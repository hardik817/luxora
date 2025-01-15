"use client"
import { createClient, OAuthStrategy } from "@wix/sdk"
import { products, collections } from "@wix/stores"
import Cookies from "js-cookie";
import { createContext } from "vm";
import { ReactNode } from "react";
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
    modules: {
        products,
        collections
        //   currentCart,
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
        },
    }),
});
export type WixClient = typeof myWixClient;
export const WixClientContext = createContext<WixClient>(myWixClient);
export const WixClientcontextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <WixClientContext.Provider value={myWixClient}>{children}</WixClientContext.Provider>
}
