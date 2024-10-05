import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";
import debug from "./debug.js";

const adKeywords = new Set([
  "advertise",
  "promo",
  "sponsor",
  "banner",
  "commercial",
  "preroll",
  "midroll",
  "postroll",
  "ad-container",
  "sponsored",
]);

const adKeywordsRegex = (() => {
  const pattern = Array.from(adKeywords).join("|");
  return new RegExp(pattern, "i");
})();

const filterVideoNodes = (nodes) => {
  const result = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node instanceof HTMLVideoElement) {
      result.push(node);
    } else if (node instanceof HTMLElement) {
      const videos = node.querySelectorAll("video");
      for (let j = 0; j < videos.length; j++) {
        result.push(videos[j]);
      }
    } else if (node.shadowRoot) {
      const shadowVideos = node.shadowRoot.querySelectorAll("video");
      for (let k = 0; k < shadowVideos.length; k++) {
        result.push(shadowVideos[k]);
      }
    }
  }
  return result;
};

const isAdVideo = (video) => {
  if (
    adKeywordsRegex.test(video.className) ||
    adKeywordsRegex.test(video.title)
  )
    return true;

  let parent = video.parentElement;
  while (parent) {
    if (
      adKeywordsRegex.test(parent.className) ||
      adKeywordsRegex.test(parent.id)
    )
      return true;
    parent = parent.parentElement;
  }

  return false;
};

const isMutedVideo = (video) => {
  return (
    video.hasAttribute("muted") &&
    !video.classList.contains("vjs-tech") &&
    !video.preload
  );
};

const isVideoReady = (video) => video.readyState >= 3;

const waitForVideoReady = (video, callback) => {
  const checkVideoState = () => {
    if (isVideoReady(video)) {
      callback(video);
    } else {
      requestAnimationFrame(checkVideoState);
    }
  };

  checkVideoState();
};

export class VideoObserver {
  constructor() {
    this.videoCache = new Set();
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();

    this.observer = new MutationObserver(this.handleMutations);
    this.intersectionObserver = new IntersectionObserver(
      this.handleIntersections,
      { threshold: 0.1 },
    );
  }

  handleMutations = (mutationsList) => {
    window.requestIdleCallback(
      () => {
        for (let i = 0; i < mutationsList.length; i++) {
          const mutation = mutationsList[i];
          if (mutation.type !== "childList") continue;

          const addedVideos = filterVideoNodes(mutation.addedNodes);
          for (let j = 0; j < addedVideos.length; j++) {
            this.checkAndHandleVideo(addedVideos[j]);
          }

          const removedVideos = filterVideoNodes(mutation.removedNodes);
          for (let k = 0; k < removedVideos.length; k++) {
            this.handleVideoRemoved(removedVideos[k]);
          }
        }
      },
      { timeout: 1000 },
    );
  };

  handleIntersections = (entries) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        this.handleIntersectingVideo(entry.target);
      }
    }
  };

  enable() {
    this.observer.observe(document, { childList: true, subtree: true });
    const videos = this.getAllVideoEls();
    for (let i = 0; i < videos.length; i++) {
      this.checkAndHandleVideo(videos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
    this.intersectionObserver.disconnect();
  }

  getAllVideoEls() {
    const videos = document.querySelectorAll("video");
    if (videos.length) return Array.from(videos);

    // Use it only if we don't find videos
    // It takes a long time to complete
    const videoElements = new Set();
    const traverseShadowRoot = (root) => {
      if (!root) return;
      const shadowVideos = root.querySelectorAll("video");
      for (let i = 0; i < shadowVideos.length; i++) {
        videoElements.add(shadowVideos[i]);
      }
      const shadowElements = root.querySelectorAll("*");
      for (let i = 0; i < shadowElements.length; i++) {
        if (shadowElements[i].shadowRoot)
          traverseShadowRoot(shadowElements[i].shadowRoot);
      }
    };

    const allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i].shadowRoot)
        traverseShadowRoot(allElements[i].shadowRoot);
    }

    return Array.from(videoElements);
  }

  checkAndHandleVideo = (video) => {
    if (this.videoCache.has(video)) return;
    this.videoCache.add(video);
    this.intersectionObserver.observe(video);
  };

  handleIntersectingVideo = (video) => {
    this.intersectionObserver.unobserve(video);
    if (isAdVideo(video) || isMutedVideo(video)) {
      debug.log("The promotional/muted video was ignored", video);
      return;
    }
    waitForVideoReady(video, this.handleVideoAdded);
  };

  handleVideoAdded = (video) => {
    this.onVideoAdded.dispatch(video);
  };

  handleVideoRemoved = (video) => {
    if (!document.contains(video)) {
      this.videoCache.delete(video);
      this.onVideoRemoved.dispatch(video);
    }
  };
}
