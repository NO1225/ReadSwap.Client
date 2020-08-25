import jwt_decode from "jwt-decode";

export default function checkTokenExpiry(accessToken: string): boolean {
    console.log("Checking token");
    let decoded = jwt_decode<JWTToken>(accessToken);
    let now = new Date();
    console.log(decoded.exp >= now.getUTCDate());

    if (decoded.exp >= now.getUTCDate())
        return true;
    return false;
}