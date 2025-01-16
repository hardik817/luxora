
import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";
export const wixClientServer = async () => {
    let refreshToken;
    const cookieStore = await cookies()
    try {

        const ccc = await cookieStore.get("refreshToken")?.value
        refreshToken = JSON.parse(ccc || "{}");
    } catch (e) { }

    const wixClient = createClient({
        modules: {
            products,
            collections,
        },
        auth: OAuthStrategy({
            clientId: 'c6b63da8-315d-4047-bfc6-6ac303a892ec',
            tokens: {
                refreshToken,
                accessToken: { value: "", expiresAt: 0 },
            },
        }),
    });

    return wixClient;
};
