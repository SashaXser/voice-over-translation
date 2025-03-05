export type VideoData = object; // add typings for object
export type Site = object; // add typings for object

export class VideoHandler {
  translateFromLang: string;
  translateToLang: string;

  timer: ReturnType<typeof setTimeout> | undefined;
  videoData: string | VideoData;

  firstPlay: boolean;
  audioContext: AudioContext | undefined;

  dragging: boolean | undefined;
  longWaitingResCount: number;

  // set in methods
  video: HTMLVideoElement;
  data: Record<string, unknown>;
  constructor(video: HTMLVideoElement, container: HTMLElement, site: Site);

  transformBtn(status: "none" | "success" | "error", text: string): this;
  setLoadingBtn(loading: boolean = false): this;
  getVideoVolume(): number;
  setVideoVolume(volume: number): this;
  isMuted(): boolean;
}
