export type MovieData = {
  backdrop_path: string
  id: number
  name: string
  overview: string
  popularity: number
  poster_path: string | number
  release_date: string
  title: string
  vote_average: number
  first_air_date: string
  genre_ids:number
  media_type: string
  key: string
};

type dataGenres = {
  name: string
}

type dataCast = {
  profile_path: string
  name: string
  character: string
}

export type ApiResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
  genres: dataGenres[]

  // tipagem para os dados que vem de details da API
  backdrop_path: string
  id: number
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  status: string
  vote_average: number
  tagline: string
  title: string
  release_date: string
  first_air_date: string
  number_of_seasons: string
  number_of_episodes: string
  name: string
  runtime: number
  cast: dataCast[]
  episode_run_time: number
};

export type dataResults = {
  data?: MovieData[]
  loading: boolean | null
  movieType?: string  // Queria essa opção para no caso de não tiver o tipo (movie ou show) nos dados retornado da API
}

export type DetailsProps = {
  movieType: string
  id: string
}
