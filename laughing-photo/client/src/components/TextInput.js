import "../styles/Components.css";

const TextInput = ({ text, setText }) => {
    return (
        <div className="text-input">
            <input
                type="text"
                placeholder="Enter text for avatar speech"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default TextInput;
