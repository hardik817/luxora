import ProductImages from "@/components/productImages"
import CustomizableProducts from "@/components/CustomizableProducts"
import Add from "@/components/Add"
const SinglePage = () => {
    return (
        <div className='px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 relative flex flex-col lg:flex-row gap-16'>
            {/*Image */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/*Texts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus, labore commodi nostrum alias cupiditate quod blanditiis doloribus consectetur ipsum reiciendis ad illum impedit? Exercitationem, architecto quasi temporibus voluptatibus explicabo est distinctio. Unde quia molestiae aut tempore consequuntur nesciunt maiores, harum consequatur omnis dolores, saepe ratione at consectetur. Ipsam, similique.
                </p>
                <div className="h-[2px] bg-gray-100"></div>
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl">$49</h2>
                </div>
                <div className="h-[2px] bg-gray-100"></div>
                <CustomizableProducts />
                <Add />
                <div className="h-[2px] bg-gray-100"></div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error non distinctio sapiente eaque amet tenetur. Quae ratione omnis non fugit provident reprehenderit esse saepe asperiores, soluta ea suscipit quisquam placeat unde officiis, odio quidem error modi incidunt sed blanditiis excepturi repellendus quas ad cupiditate? Placeat veniam cumque officiis doloribus!</p>

                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error non distinctio sapiente eaque amet tenetur. Quae ratione omnis non fugit provident reprehenderit esse saepe asperiores, soluta ea suscipit quisquam placeat unde officiis, odio quidem error modi incidunt sed blanditiis excepturi repellendus quas ad cupiditate? Placeat veniam cumque officiis doloribus!</p>

                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error non distinctio sapiente eaque amet tenetur. Quae ratione omnis non fugit provident reprehenderit esse saepe asperiores, soluta ea suscipit quisquam placeat unde officiis, odio quidem error modi incidunt sed blanditiis excepturi repellendus quas ad cupiditate? Placeat veniam cumque officiis doloribus!</p>

                </div>
            </div>
        </div>
    )
}

export default SinglePage