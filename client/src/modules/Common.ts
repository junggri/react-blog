const SET_HEIGHT = "common/SET_HEIGHT";
const SET_WIDTH = "common/SET_WIDTH";

export const onSetHeight = (height: number) => ({ type: SET_HEIGHT, height });
export const onSetWidth = (width: number) => ({ type: SET_WIDTH, width });

const initialState = {
   height: null,
   width: null,
};

interface Action {
   type: string
}

export default function Common(state = initialState, action: any) {
   switch (action.type) {
      case "common/SET_HEIGHT":
         return {
            ...state,
            height: action.height,
         };
      case "common/SET_WIDTH":
         return {
            ...state,
            width: action.width,
         };
      default:
         return state;
   }
}