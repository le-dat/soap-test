import { useState, useEffect } from "react"
import ReactPlayer from "react-player/youtube"
import { VideosData } from "./Data"
import { FaRegPlayCircle } from "react-icons/fa"

function Videos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetch = async () => {
      setVideos(VideosData)
    }
    fetch()
  }, [videos])

  const [clicked, setClicked] = useState(0)
  const [urlVideos, setUrlVideos] = useState(VideosData[0].url)

  function clickedBtn(urlVideo, numberId) {
    setUrlVideos(urlVideo)
    setClicked(numberId)
  }

  return (
    <>
      <div className="video-list">
        <div className="grid">
          <div className="video-row">
            <div className="video-main">
              <ReactPlayer
                id="react-player"
                playing="true"
                controls="true"
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${urlVideos}`}
              />
            </div>
            <div className="video-list-right">
              {videos.map((video) => (
                <div
                  className={
                    clicked === video.id
                      ? "video-list-right-item clicked"
                      : "video-list-right-item"
                  }
                  onClick={() => clickedBtn(video.url, video.id)}
                >
                  <img
                    src={require(`../assets/images/${video.image}`)}
                    alt=""
                  />
                  {clicked === video.id ? (
                    <span>Đang xem</span>
                  ) : (
                    <FaRegPlayCircle />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Videos
