import "styled-components";
import { StringLiteral } from "typescript";

declare module "styled-components" {
  export interface DefaultTheme {
    icon: {
      red: string;
      green: string;
    };
    font: {
      gray: string;
    };
  }
}
