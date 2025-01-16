
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";
export const wixClientServer = async () => {
    let refreshToken;

    try {
        const cookieStore = cookies();
        const ccc = await cookieStore.get("refreshToken")?.value
        refreshToken = JSON.parse(ccc || "{}");
    } catch (e) { }

    const wixClient = createClient({
        modules: {
            products,
            collections,
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
            tokens: {
                refreshToken,
                accessToken: { value: "", expiresAt: 0 },
            },
        }),
    });

    return wixClient;
};
