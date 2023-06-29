import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href='/'>
            <Image
                priority={true}
                src="/image/logo.png"
                alt="logo"
                height={43}
                width={181}
            />
        </Link>
    )
}
