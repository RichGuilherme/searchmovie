import { topCastProps } from "@/@types/apiInformation"

export const TopCast = ({ cast, loadingCrew }: topCastProps) => {
  return (
    <section className="w-[76%] mx-auto mt-14">
      <h2 className="text-3xl font-medium font-Nunito">Top Atores</h2>

      <div className="flex flex-row gap-14 w-full mt-6 overflow-y-hidden ">
        {!loadingCrew ? (
          <>
            {cast && cast.map((actors, i) => (
              i <= 5 &&
              <div
                key={i}
                className="flex flex-col items-center gap-y-3">

                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w300${actors.profile_path})`
                  }}
                  className="w-[175px] h-[175px] rounded-full bg-no-repeat bg-center bg-[cover]"></div>

                <div className="flex flex-col items-center gap-1">
                  <p className="text-[19px] text-center text-textColors-200">{actors.character}</p>
                  <span className="text-[19px] text-center text-textColors-100">{actors.name}</span>
                </div>
              </div>
            ))}
          </>

        ) : ""
        }
      </div>

    </section>
  )
}
