import { notFound } from "next/navigation";
import ProductImages from "@/components/productImages";
import CustomizeProducts from "@/components/CustomizableProducts";
import Add from "@/components/Add";
import { wixClientServer } from "@/lib/wixServer";

interface SinglePageProps {
    params: { slug: string };
}

const SinglePage = async ({ params }: SinglePageProps) => {
    // Await params before destructuring
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Fetch data asynchronously
    const wixclient = await wixClientServer();
    const prod = await wixclient.products.queryProducts().eq("slug", slug).find();

    if (!prod.items[0]) {
        return notFound();
    }

    const prod1 = prod.items[0];

    return (
        <div className="px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 relative flex flex-col lg:flex-row gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages items={prod1.media?.items} />
            </div>
            {/* Texts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">{prod1.name}</h1>
                <p className="text-gray-500">{prod1.description}</p>
                <div className="h-[2px] bg-gray-100"></div>
                {prod1.price?.price === prod1.price?.discountedPrice ? (
                    <h2 className="font-medium text-2xl">${prod1.price?.price}</h2>
                ) : (
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl text-gray-500 line-through">${prod1.price?.price}</h3>
                        <h2 className="font-medium text-2xl">${prod1.price?.discountedPrice}</h2>
                    </div>
                )}
                <div className="h-[2px] bg-gray-100"></div>
                {prod1.variants && prod1.productOptions ? (
                    <CustomizeProducts productId={prod1._id!} variants={prod1.variants} productOptions={prod1.productOptions} />
                ) : (
                    <Add productId={prod1._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={prod1.stock?.quantity || 0} />
                )}
                <div className="h-[2px] bg-gray-100"></div>
                {prod1.additionalInfoSections?.map((section: any) => (
                    <div className="text-sm" key={section.title}>
                        <h4 className="font-medium mb-4">{section.title}</h4>
                        <p>{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SinglePage;