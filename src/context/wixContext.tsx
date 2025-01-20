"use client"
import { products, collections } from '@wix/stores';
import { createClient, OAuthStrategy } from '@wix/sdk';
import Cookies from "js-cookie";
import { createContext } from "react";
import { ReactNode } from "react";
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
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
// async function n1() {
//     const productList = await myWixClient.products.queryProducts().find();
//     console.log('My Products:');
//     console.log('Total: ', productList.items);
// }
// n1();
export type WixClient1 = typeof myWixClient;
export const WixClientContext = createContext<WixClient1>(myWixClient);
console.log(WixClientContext)
export const WixClientcontextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <WixClientContext.Provider value={myWixClient}>{children}</WixClientContext.Provider>
}
