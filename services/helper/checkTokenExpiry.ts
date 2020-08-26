import jwt_decode from "jwt-decode";

export default function checkTokenExpiry(accessToken: string): boolean {
    let decoded = jwt_decode<JWTToken>(accessToken);
    let now = new Date();


    if (decoded.exp >= now.getUTCDate())
        return true;
    return false;
}