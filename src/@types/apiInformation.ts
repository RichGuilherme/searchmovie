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

export type DataGenres = {
  name: string
  id: number
}

export type DataCast = {
  profile_path: string
  name: string
  character: string
}

type DataCrew = {
  job: string
  name: string
}

export type ApiResponse = {
  page: number
  results: MovieData[]
  total_pages: number
  total_results: number
  genres: DataGenres[]

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
  crew: DataCrew[]
  cast: DataCast[]
  episode_run_time: number
};

export type DataResults = {
  dataResults?: MovieData[]
  loading: boolean | null
  mediaType?: string  | null // Queria essa opção para no caso de não tiver o tipo (movie ou show) nos dados retornado da API
}

export type DetailsProps = {
  mediaTypeParams: string | null
  idParams: string | null
}

export type topCastProps = {
  cast?: DataCast[]
  crew?: DataCrew[]
  loadingCrew: boolean | null
}
