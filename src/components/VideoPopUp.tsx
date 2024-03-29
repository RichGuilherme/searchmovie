
import dynamic from 'next/dynamic';
import { videoPopUpProps } from '@/@types/videoProps';
import { useEffect } from 'react';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })


export const VideoPopUp = ({ videoKey, show, setShow, setVideoKey }: videoPopUpProps) => {
  const hiddenVideo = () => {
    setShow(false)
    setVideoKey("")
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }

  }, [show])

  return (
    <div
      style={{ visibility: `${show ? "visible" : "hidden"}` }}
      className='flex justify-center items-center w-full h-screen fixed top-0 left-0 z-50'>

      <div
        onClick={() => hiddenVideo()}
        style={{ opacity: `${show ? 1 : "0"}` }}
        className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,.25)] backdrop-blur-sm duration-700 z-30'></div>

      <div
        className='aspect-video w-[800px] bg-white scale-[1] z-40'>
        <span
          onClick={() => hiddenVideo()}
          className='absolute right-0 -top-8 text-xl cursor-pointer hover:text-textColors-100'>
          Fechar
        </span>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          controls
          width="100%"
          height="100%"
          origin="https://www.youtube.com"
        />
      </div>
    </div>
  )
}
