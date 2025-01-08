import ProductImages from "@/components/productImages"
const SinglePage = () => {
    return (
        <div className='px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 relative flex flex-col lg:flex-row gap-16'>
            {/*Image */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/*Texts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">Texts</div>
        </div>
    )
}

export default SinglePage