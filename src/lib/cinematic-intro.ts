export const INTRO_SEEN_KEY = "ab-cinematic-intro-seen";
export const INTRO_SOUND_KEY = "ab-cinematic-intro-sound";
export const INTRO_REPLAY_EVENT = "ab-cinematic-intro-replay";

export function requestIntroReplay() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(INTRO_REPLAY_EVENT));
}
