import useFetch from "@/hooks/useFeatch"

type GenresProps = { 
   genreId: string
}

export const Genres = ({genreId}:GenresProps) => {

    console.log()
    return (
        <>
            <div>{genreId}</div>
        </>
    )
}
