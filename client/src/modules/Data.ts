const GET_CONTENT = "data/GET_DATA";


export const onGetContent = (content: any) => ({ type: GET_CONTENT, content });


let initialState = {
   data: null,
   loading: false,
   error: null,
};


interface Action {
   type: string
   [index: string]: any
}

export default function Data(state = initialState, action: any) {
   switch (action.type) {
      case "data/GET_DATA":
         return {
            ...state,
            data: action.content,
         };
      default:
         return state;
   }
}
