'use client'
import Categorylist from "@/components/Categorylist"
import Productlist from "@/components/Productlist"
import Slider from "@/components/slider"
import { WixClientContext } from "@/context/wixContext"
import { useContext, useEffect } from "react"

const HomePage = () => {
  // const wixClient = useContext(WixClientContext);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();

  // }, [wixClient]);





  return (
    <>
      <div className="">
        <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36">
          <h1 className="text-2xl">Featured Products</h1>
          <Productlist />
        </div>
        <div className="mt-24 ">
          <h1 className="text-2xl px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 mb-12">Categories</h1>
          <Categorylist />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36">
          <h1 className="text-2xl">New Products</h1>
          <Productlist />
        </div>
      </div>
    </>

  )
}

export default HomePage