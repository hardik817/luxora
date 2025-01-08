import Image from "next/image"
import Filter from "@/components/filter"
import Productlist from "@/components/Productlist"
const ListPage = () => {
    return (
        <div className='px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 relative'>
            {/*Campaign */}
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-{48px} text-grey-700">Grab upto 50% off on <br></br> Selected Products</h1>
                    <button className="rounded-3xl bg-dev text-white w-max py-3 px-5 text-sm">Buy Now</button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain"></Image>
                </div>
            </div>
            <Filter></Filter>
            {/*Products*/}
            <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
            <Productlist></Productlist>
        </div>
    )
}

export default ListPage