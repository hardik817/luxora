"use client"
import Image from "next/image";
import { useState } from "react";
// const images = [
//     {
//         id: 0,
//         url: "https://images.pexels.com/photos/18563111/pexels-photo-18563111/free-photo-of-illuminated-train-on-a-bridge-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/27692128/pexels-photo-27692128/free-photo-of-a-long-exposure-photograph-of-a-winding-road-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/29821956/pexels-photo-29821956/free-photo-of-stunning-milky-way-over-slovak-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/14994931/pexels-photo-14994931/free-photo-of-cake-on-a-plate-and-a-drink-in-a-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     }
// ]
const ProductImages = ({ items }: { items: any }) => {
    const [index, Setindex] = useState(0);
    return (
        <div className="">
            <div className="h-[500px] relative">

                <Image src={items[index].image?.url} alt="" fill sizes="50vw" className="object-cover rounded-md">
                </Image>
            </div>
            <div className="flex justify-between gap-4 mt-0">
                {items.map((item: any, i: number) => (
                    <div key={item._id} className="w-1/4 h-32 relative gap-4 mt-4 cursor-pointer" onClick={() => Setindex(i)}>
                        <Image src={item.image?.url} alt="" fill sizes="30vw" className="object-cover rounded-md" >
                        </Image>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default ProductImages;