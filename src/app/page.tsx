import Productlist from "@/components/Productlist"
import Slider from "@/components/slider"

const HomePage = () => {
  return (
    <>
      <div className="">
        <Slider />
        <div className="mt-24 px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36">
          <h1>Featured Products</h1>
          <Productlist />
        </div>
      </div>
    </>

  )
}

export default HomePage