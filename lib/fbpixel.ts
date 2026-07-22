export const FB_PIXEL_ID = "1812986660081810";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackFbEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
}
