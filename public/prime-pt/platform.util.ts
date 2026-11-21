export const Platform = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export class PlatformUtil {
  /** When set, overrides user-agent detection. Useful for previews and tests. */
  private static forcedMobile: boolean | null = null;

  static simulateMobile(value: boolean | null): void {
    PlatformUtil.forcedMobile = value;
  }

  static sm(): boolean {
    return window.innerWidth < Platform.sm;
  }

  static md(): boolean {
    return window.innerWidth >= Platform.md;
  }

  static lg(): boolean {
    return window.innerWidth >= Platform.lg;
  }

  static xl(): boolean {
    return window.innerWidth >= Platform.xl;
  }

  static '2xl'(): boolean {
    return window.innerWidth >= Platform['2xl'];
  }

  static mobile(): boolean {
    if (PlatformUtil.forcedMobile !== null) {
      return PlatformUtil.forcedMobile;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
