import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src="/image/logo.svg"
                alt="logo"
                className="min-w-[181px] min-h-[43px]"
                height={43}
                width={181}
                priority={true}
            />
        </Link>
    )
}
