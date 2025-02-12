import "../styles/Components.css";

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="video-container">
            {videoUrl && <video src={videoUrl} controls />}
        </div>
    );
};

export default VideoPlayer;
