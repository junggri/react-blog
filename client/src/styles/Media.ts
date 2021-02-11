import { css } from "styled-components";

interface ISizes {
   desktop: number
   tablet: number
   mobile: number

   [index: string]: any
}

const sizes: ISizes = {
   inherit: 1800,
   desktop: 1250,
   postBox: 992,
   tablet: 930,
   bigMoblie: 600,
   mobile: 500,
   small: 262,
   smallest: 219,
};

export const media = Object.keys(sizes).reduce((acc: any, label: any) => {
   acc[label] = (...args: any) => css`
     @media(max-width:${sizes[label] / 16}em){
    ${css(args)};
  }
`;
   return acc;
}, {});