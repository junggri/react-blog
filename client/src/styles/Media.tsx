import { css } from "styled-components";

interface ISizes {
   desktop: number
   tablet: number
   mobile: number
   [index: string]: any
}

const sizes: ISizes = {
   desktop: 1250,
   postBox: 1120,
   tablet: 900,
   mobile: 500,
};

export const media = Object.keys(sizes).reduce((acc: any, label: any) => {
   acc[label] = (...args: any) => css`
  @media(max-width:${sizes[label] / 16}em){
    ${css(args)};
  }
`;
   return acc;
}, {});