import useFetch from '@/hooks/useFeatch'
import { Carousel } from '../Carousel'
import { useParamsDetails } from '@/context/paramsDetailsContext'


export const Recommendations = () => {
    const { idParams, mediaTypeParams } = useParamsDetails()

    const { data: similarData, loading: similarLoading } = useFetch(`https://api.themoviedb.org/3/${mediaTypeParams}/${idParams}/recommendations`)

    return (
        <section className='relative w-[80%] h-[487px] mx-auto mt-20 mb-10'>
            <h2 className="text-3xl font-medium font-Nunito mb-[18px]">Recomendação</h2>

            {similarData?.results.length !== 0 ? (
                <Carousel
                    dataResults={similarData?.results}
                    loading={similarLoading}
                    mediaType={mediaTypeParams} />
            ) :
            (
                <div className='flex justify-center items-center mt-40'>
                      <p className='font-semibold'>Sem Recomendações no momento!!</p>
                </div>
            )}
        </section>
    )
}
