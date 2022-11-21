// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgSounds: string;
      bgSoundsHover: string;
      white: string;
      fontPrimary: string;
      textColor: string;
    };
  }
}
