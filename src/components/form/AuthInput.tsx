import { FacebookIcon } from "../icons/facebook-icon"
import { GoogleIcon } from "../icons/google-icon"


export const AuthInput = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-5 w-[97%] h-auto mt-6">
            <button className="flex items-center justify-center gap-3 w-full py-[14px] rounded-full bg-[#1540CB]">
                <FacebookIcon />
                Login com Facebook
            </button>

            <button className="flex items-center justify-center gap-3 w-full py-[14px] rounded-full bg-[#DC5037]">
                <GoogleIcon />
                Login com Google
            </button>
        </div>
    )
}
