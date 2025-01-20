import Link from "next/link"
import Image from "next/image"
import { wixClientServer } from "@/lib/wixServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
const products_per_page = 20;
const Productlist = async ({ categoryId, limit }: { categoryId: string, limit?: number }) => {
    const wixclient = await wixClientServer();
    const res = await wixclient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || products_per_page).find()
    console.log(res)
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            {res.items.map((product: products.Product) =>
            (
                <Link href={"/" + product.slug}
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                    key={product._id}>
                    <div className="relative w-full h-80">
                        <Image alt="" src={product.media?.mainMedia?.image?.url || "/product.png"}
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        ></Image>
                        {product.media?.items && <Image alt="" src={product.media?.items[1]?.image?.url || "/product.png"}

                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md"
                        ></Image>}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">${product.price?.price}</span>
                    </div>
                    {product.additionalInfoSections && <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.additionalInfoSections.find((section: any) => section.title === "shortDesc")?.description || "Buy me") }}></div>}
                    <button className="rounded-2xl ring-1 ring-dev text-dev py-2 px-4 text-xs hover:bg-dev hover:text-white w-max">Add to Cart</button>
                </Link>
            ))}

        </div>
    )
}

export default Productlist;