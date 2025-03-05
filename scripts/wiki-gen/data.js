import locales from "./locales";

const youtubeSiteData = {
  paths: ["/watch", "/embed", "/shorts", "/live", "?v=VIDEO_ID"],
  limits: [locales.noPreviewVideos],
};

const youtubeAltSiteData = {
  paths: youtubeSiteData.paths,
  limits: [...youtubeSiteData.limits],
};

const siteData = {
  youtube: youtubeSiteData,
  invidious: youtubeAltSiteData,
  piped: youtubeAltSiteData,
  vk: {
    paths: [
      "/video-xxxxxxxxx_xxxxxxxxx",
      "?z=video-xxxxxxxxx_xxxxxxxxx",
      "/video_ext.php?oid=VIDEO_ID_PART_ONE&id=VIDEO_ID_PART_TWO",
      ".../playlist/PLAYLIST_ID/video-xxxxxxxxx_xxxxxxxxx",
    ],
  },
  nine_gag: {
    paths: ["/gag/VIDEO_ID"],
    limits: [locales.noFeedVideos],
  },
  twitch: {
    paths: [
      "/videos",
      "/embed",
      "/NICKNAME/clip",
      "?v=VIDEO_ID (player.twitch.tv)",
    ],
    limits: [locales.noStreams],
  },
  proxitok: {
    paths: ["/@NICKNAME/video/VIDEO_ID"],
  },
  tiktok: {
    paths: ["/@NICKNAME/video/VIDEO_ID"],
    limits: [locales.noFeedVideos],
  },
  vimeo: {
    paths: ["/CHANNEL_ID/VIDEO_ID", "/VIDEO_ID"],
  },
  xvideos: {
    paths: ["/VIDEO_ID/VIDEO_NAME"],
  },
  pornhub: {
    paths: ["/view_video.php?viewkey=VIDEO_ID", "/embed/VIDEO_ID"],
    limits: [locales.cantTranslatePHPremium],
  },
  twitter: {
    paths: ["/NAME/status/VIDEO_ID"],
    limits: [locales.noFeedVideos],
  },
  udemy: {
    paths: ["/course/NAME/learn/lecture/LECTURE_ID"],
    limits: [locales.needBeLoggedIn],
  },
  rumble: {
    paths: ["/VIDEO_NAME"],
    limits: [locales.noStreams],
  },
  facebook: {
    paths: ["/reel/VIDEO_ID", "/videos/VIDEO_ID"],
  },
  rutube: {
    paths: ["/video/VIDEO_ID", "/?bvid=VIDEO_ID"],
  },
  bilibili: {
    paths: ["/video/VIDEO_ID", "/?bvid=VIDEO_ID"],
  },
  mail_ru: {
    paths: [
      "/v/NICKNAME/video/...",
      "/mail/NICKNAME/video/...",
      "video/embed/VIDEO_ID",
    ],
  },
  bitchute: {
    paths: ["/video/VIDEO_ID", "/embed/VIDEO_ID"],
  },
  coursera: {
    paths: ["/learn/NAME/lecture/XXXX"],
    limits: [locales.needBeLoggedIn, locales.videoWithoutSubs],
  },
  eporner: {
    paths: ["/video-VIDEO_ID/NAME"],
  },
  peertube: {
    paths: ["/w/VIDEO_ID"],
    limits: [locales.someModInstanceNotSupported],
  },
  dailymotion: {
    paths: ["/video/VIDEO_ID"],
  },
  trovo: {
    paths: ["/s/NICK/VIDEO_ID"],
    limits: [locales.noStreams],
  },
  yandexdisk: {
    paths: ["/i/FILE_ID"],
    limits: [locales.workOnlyWithPublicLinks],
  },
  coursehunterLike: {
    paths: ["/course/COURSE_ID"],
  },
  "ok.ru": {
    paths: ["/video/VIDEO_ID"],
  },
  googledrive: {
    paths: ["/file/d/FILE_ID"],
    limits: [locales.workOnlyWithPublicLinks],
  },
  bannedvideo: {
    paths: ["/watch?id=VIDEO_ID"],
  },
  weverse: {
    paths: ["/CHANNEL_NAME/media/VIDEO_ID", "/CHANNEL_NAME/live/VIDEO_ID"],
    limits: [locales.noStreams],
  },
  newgrounds: {
    paths: ["/XXX/view/XXX"],
  },
  egghead: {
    paths: ["/lessons/LESSON_NAME"],
  },
  youku: {
    paths: ["/v_show/VIDEO_ID"],
  },
  archive: {
    paths: ["/details/VIDEO_ID", "/embed/VIDEO_ID"],
  },
  patreon: {
    paths: ["/posts/POST_ID"],
    limits: [locales.noSubtitles],
  },
  reddit: {
    paths: ["/r/SUB_REDDIT/comments/VIDEO_ID/VIDEO_NAME"],
    limits: [locales.noSubtitles],
  },
  kick: {
    paths: ["/video/VIDEO_ID", "/NICKNAME?clip=clip_CLIPID"],
    limits: [locales.noSubtitles, locales.noStreams],
  },
  apple_developer: {
    paths: ["/videos/play/XXX/XXX"],
    limits: [locales.noSubtitles],
  },
  epicgames: {
    paths: ["/community/learning/courses/XXX/XXX/XXX/XXX"],
    limits: [locales.noSubtitles],
  },
  nineanimetv: {
    paths: ["/watch/anime-name-ANIME_ID?ep=EPISODE_ID"],
    limits: [locales.noSubtitles],
  },
  odysee: {
    paths: ["/@USERNAME/VIDEO_NAME"],
    limits: [],
  },
  sap: {
    paths: ["/courses/COURSE_NAME", "/courses/COURSE_NAME/LECTURE_NAME"],
  },
  watchpornto: {
    paths: ["/video/VIDEO_ID/VIDEO_NAME", "/embed/VIDEO_ID"],
  },
  linkedin: {
    paths: ["/learning/COURSE_NAME/LECTURE_NAME"],
  },
  incestflix: {
    paths: ["/watch/VIDEO_ID"],
  },
  directlink: {
    paths: ["/*.mp4", "/*.webm"],
    limits: [locales.noLocalLinks],
  },
};

const extraData = {
  udemy: {
    status: "⚠️",
    statusPhrase: locales.worksWithLimitations,
  },
  // twitter: {
  //   status: "⚠️",
  //   statusPhrase: locales.worksWithLimitations,
  // },
  // facebook: {
  //   status: "⚠️",
  //   statusPhrase: locales.worksWithLimitations,
  // },
  // yandexdisk: {
  //   status: "⚠️",
  //   statusPhrase: locales.worksWithLimitations,
  // },
  // sap: {
  //   status: "⚠️",
  //   statusPhrase: locales.worksWithLimitations,
  // },
  // linkedin: {
  //   status: "⚠️",
  //   statusPhrase: locales.worksWithLimitations,
  // },
};

const sitesBlackList = ["porntn"];

export { siteData, extraData, sitesBlackList };
