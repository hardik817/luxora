import { wixClientServer } from "@/lib/wixServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
    categoryId,
    limit,
    searchParams,
}: {
    categoryId: string;
    limit?: number;
    searchParams?: any;
}) => {
    // Extract all searchParams values upfront to avoid synchronous access errors
    const params = {
        name: searchParams?.name || "",
        type: searchParams?.type || null,
        min: searchParams?.min ? Number(searchParams.min) : 0,
        max: searchParams?.max ? Number(searchParams.max) : 999999,
        page: searchParams?.page ? Number(searchParams.page) : 0,
        sort: searchParams?.sort || null,
        cat: searchParams?.cat || null
    };

    const wixClient = await wixClientServer();

    // Build the base query
    let productQuery = wixClient.products
        .queryProducts()
        .startsWith("name", params.name)
        .eq("collectionIds", categoryId)
        .hasSome(
            "productType",
            params.type ? [params.type] : ["physical", "digital"]
        )
        .gt("priceData.price", params.min)
        .lt("priceData.price", params.max)
        .limit(limit || PRODUCT_PER_PAGE)
        .skip(params.page * (limit || PRODUCT_PER_PAGE));

    // Apply sorting if specified
    if (params.sort) {
        const [sortType, sortBy] = params.sort.split(" ");

        if (sortType === "asc") {
            productQuery = productQuery.ascending(sortBy);
        } else if (sortType === "desc") {
            productQuery = productQuery.descending(sortBy);
        }
    }

    // Execute the query
    const res = await productQuery.find();

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {res.items.map((product: products.Product) => (
                <Link
                    href={"/" + product.slug}
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                    key={product._id}
                >
                    <div className="relative w-full h-80">
                        <Image
                            src={product.media?.mainMedia?.image?.url || "/product.png"}
                            alt=""
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        />
                        {product.media?.items && (
                            <Image
                                src={product.media?.items[1]?.image?.url || "/product.png"}
                                alt=""
                                fill
                                sizes="25vw"
                                className="absolute object-cover rounded-md"
                            />
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">${product.price?.price}</span>
                    </div>
                    {/* {product.additionalInfoSections && (
                        <div
                            className="text-sm text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    product.additionalInfoSections.find(
                                        (section: any) => section.title === "shortDesc"
                                    )?.description || " "
                                ),
                            }}
                        ></div>
                    )} */}
                    <button className="rounded-2xl ring-1 ring-dev text-dev w-max py-2 px-4 text-xs hover:bg-dev hover:text-white">
                        Add to Cart
                    </button>
                </Link>
            ))}
            {(params.cat || params.name) ? (
                <Pagination
                    currentPage={res.currentPage || 0}
                    hasPrev={res.hasPrev()}
                    hasNext={res.hasNext()}
                />
            ) : null}
        </div>
    );
};

export default ProductList;