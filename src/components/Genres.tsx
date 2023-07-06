import { useFetch } from "@/data/hooks/useFeatch"

type GenresProps = { 
    movieId?: number 
    movieTypeProps?: string
}

export const Genres = ({ movieId, movieTypeProps }: GenresProps) => {
    const { data } = useFetch(`https://api.themoviedb.org/3/${movieTypeProps}/${movieId}`)
    const dataGenres = data?.genres

    return (
        <>
            {
                dataGenres && dataGenres.slice(0, 2).map((genre, i) => (
                    <span key={i} className="text-textColors-100">
                        {i == 1 && ", "}
                        {genre.name}
                    </span>
                ))
            }
        </>
    )
}
