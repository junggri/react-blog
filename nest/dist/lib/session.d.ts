declare const sessionConfig: {
    secret: string;
    name: string;
    resave: boolean;
    saveUninitialized: boolean;
    store: any;
    cookie: {
        httpOnly: boolean;
        secure: boolean;
    };
};
export default sessionConfig;
