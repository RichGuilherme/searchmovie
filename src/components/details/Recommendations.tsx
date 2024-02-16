

import { useAxios } from '@/hooks/useAxios'
import { Carousel } from '../Carousel'
import { useParamsDetails } from '@/context/paramsDetailsContext'
import axiosInstancia from '@/data/service/axios'


export const Recommendations = () => {
    const { idParams, mediaTypeParams } = useParamsDetails()
    

    const { data: similarData, loading: similarLoading } = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `${mediaTypeParams}/${idParams}/recommendations`,
        requestConfig: {
           params: {
             language: 'pt-BR', 
           },
        }
     })

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
