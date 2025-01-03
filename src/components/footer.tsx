import Link from "next/link"
import Image from "next/image"
const Footer = () => {
    return (
        <div className='px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36'>
            {/*Top */}
            <div className="flex justify-between gap-24">
                {/*left */}
                <div className="w-1/4 flex flex-col">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">Luxora</div>
                    </Link>
                    <p>
                        50581 Dickinson Pines, Apt. 845, 75839, Sterlingfurt, Texas, United States
                    </p>
                    <span className="font-semibold ">hello@hardik</span>
                    <span className="font-semibold ">+91 1234567890</span>
                    <div className="flex gap-6">
                        <Image src="/facebook.png" alt="" width={16} height={16}></Image>
                        <Image src="/instagram.png" alt="" width={16} height={16}></Image>
                        <Image src="/youtube.png" alt="" width={16} height={16}></Image>
                        <Image src="/pinterest.png" alt="" width={16} height={16}></Image>
                        <Image src="/x.png" alt="" width={16} height={16}></Image>

                    </div>
                </div>
                {/*Center */}
                <div className="w-1/2"></div>
                {/*Right */}
                <div className="w-1/4"></div>
            </div>
            {/*Bottom */}
        </div>
    )
}

export default Footer
// finally linked