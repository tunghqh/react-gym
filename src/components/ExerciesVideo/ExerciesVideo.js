
import Loader from "../Loader/Loader";
import "./ExerciesVideo.scss";

function ExerciesVideo({ exerciseVideo, name }) {
  // console.log(exerciseVideo);
  if(!exerciseVideo.length) return <Loader />

  return (
    <div className="exercies-video">
      <h3 className="video__header">
        Watch <span>{name}</span> exercies videos
      </h3>
      <div className="video__content">
        {exerciseVideo?.slice(0, 6).map((item, i) => (
          <a
            key={i}
            className="video__content-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div className="video__info">
              <p>{item.video.title}</p>
              <p>{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ExerciesVideo;
