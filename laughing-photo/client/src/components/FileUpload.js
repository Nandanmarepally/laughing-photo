import "../styles/Components.css";

const FileUpload = ({ setImage }) => {
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="file-upload">
            <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
    );
};

export default FileUpload;
