// "use client"
import Categorylist from "@/components/Categorylist"
import Productlist from "@/components/Productlist"
import Slider from "@/components/slider"
import { WixClientContext } from "@/context/wixContext"
import { useContext, useEffect } from "react"
import { useWixClient } from "./hooks/useWixClient"
import { wixClientServer } from "@/lib/wixServer"
const HomePage = async () => {
  // const myWixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await myWixClient.products.queryProducts().find()

  //       console.log('Products:', res)
  //     } catch (error) {
  //       console.error('Error fetching products:', error)
  //     }
  //   }

  //   getProducts()
  // }, [myWixClient])

  // const wixclient = await wixClientServer();
  // const res = await wixclient.products.queryProducts().find()

  // console.log('Products:', res)



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