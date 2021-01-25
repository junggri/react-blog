import jwt from "jsonwebtoken";
import env from "../../../../server.env.json"

async function verify(jwttoken: string) {
    try {
        const decoded = jwt.verify(jwttoken, env.JWT_SECRET);
        return decoded;
    } catch (e) {
        // console.error(e);
    }
}

export default verify;