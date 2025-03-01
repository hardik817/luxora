import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
    const cookies = request.cookies;
    const res = NextResponse.next();

    if (cookies.get("refreshToken")) {
        return res;
    }

    const wixClient = createClient({
        auth: OAuthStrategy({ clientId: 'c6b63da8-315d-4047-bfc6-6ac303a892ec' }),
    });

    const tokens = await wixClient.auth.generateVisitorTokens();
    res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
        maxAge: 60 * 60 * 24 * 30,
    });

    return res;
};