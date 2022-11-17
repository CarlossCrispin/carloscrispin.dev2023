import videoBG from '../../assets/video/vid.mp4'
import './VideoBG.css'

const VideoBG = () => {
  return (
    <div className="text-indigo-600 dark:text-slate-300 ">
      <div className="overlay"></div>
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline
        className="h-screen"
      ></video>
      <div className="content"></div>
    </div>
  )
}

export default VideoBG
