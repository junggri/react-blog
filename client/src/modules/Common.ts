const SET_HEIGHT = "common/SET_HEIGHT";


export const onSetHeight = (height: number) => ({ type: SET_HEIGHT, height });


const initialState = {
   height: null,
   width: window.screen.width * 0.70,
};

interface Action {
   type: string
}

export default function common(state = initialState, action: any) {

   switch (action.type) {
      case SET_HEIGHT:
         console.log(action);
         return {
            ...state,
            height: action.height,
         };
      default:
         return state;
   }
}