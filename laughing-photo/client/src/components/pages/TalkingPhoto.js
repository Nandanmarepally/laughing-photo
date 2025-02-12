import { useState } from "react";
import axios from "axios";
import FileUpload from "../components/FileUpload";
import TextInput from "../components/TextInput";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/TalkingPhoto.css";

const TalkingPhoto = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("text", text);

        try {
            const response = await axios.post("http://localhost:5000/api/talking-photo", formData);
            setVideoUrl(response.data.videoUrl);
        } catch (error) {
            console.error("Error generating talking photo:", error);
        }
    };

    return (
        <div className="talking-photo-container">
            <h2>Talking Photo App</h2>
            <FileUpload setImage={setImage} />
            <TextInput text={text} setText={setText} />
            <button className="generate-btn" onClick={handleSubmit}>Generate</button>
            <VideoPlayer videoUrl={videoUrl} />
        </div>
    );
};

export default TalkingPhoto;
