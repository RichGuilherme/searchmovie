import { MovieBanner } from "./Moviebanner"


export const Banner = () => {
    return (
        <>
            <section className='relative w-full text-textColors-200 font-sans'>
                <MovieBanner />
            <div 
            className="w-full h-[250px] absolute left-0 bottom-0
            bg-[linear-gradient(180deg,_rgba(4,_21,_45,_0)_0%,_#000000_79.17%)]"></div>
            </section>
        </>
    )
}
