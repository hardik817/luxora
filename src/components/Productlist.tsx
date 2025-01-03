import Link from "next/link"
import Image from "next/image"
const Productlist = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image alt="" src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    ></Image>
                    <Image alt="" src="https://images.pexels.com/photos/28052361/pexels-photo-28052361/free-photo-of-a-wooden-table-with-bowls-and-cups-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    ></Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-dev text-dev py-2 px-4 text-xs hover:bg-dev hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image alt="" src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    ></Image>
                    <Image alt="" src="https://images.pexels.com/photos/28052361/pexels-photo-28052361/free-photo-of-a-wooden-table-with-bowls-and-cups-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    ></Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-dev text-dev py-2 px-4 text-xs hover:bg-dev hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image alt="" src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    ></Image>
                    <Image alt="" src="https://images.pexels.com/photos/28052361/pexels-photo-28052361/free-photo-of-a-wooden-table-with-bowls-and-cups-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    ></Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-dev text-dev py-2 px-4 text-xs hover:bg-dev hover:text-white w-max">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image alt="" src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    ></Image>
                    <Image alt="" src="https://images.pexels.com/photos/28052361/pexels-photo-28052361/free-photo-of-a-wooden-table-with-bowls-and-cups-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    ></Image>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-dev text-dev py-2 px-4 text-xs hover:bg-dev hover:text-white w-max">Add to Cart</button>
            </Link>
        </div>
    )
}

export default Productlist;