const TokenMiddleWare = (store: any) => (next: any) => (action: any) => {
   next(action);
};

export default TokenMiddleWare;