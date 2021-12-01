import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    stroke: string;
    colors: {
      background: string;
      foreground: string;
      over_black: string;
      over_white: string;
      foreground_low: string;
      foreground_lower: string;
      foreground_lowest: string;
      accent: string;
      accent_smalltext: string;
      white: string;
      warning: string;
      error: string;
      success: string;
    };
  }
}
