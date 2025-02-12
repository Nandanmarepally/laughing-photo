import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TalkingPhoto from "./pages/TalkingPhoto";  // Ensure this matches the exact file name
import "./styles/App.css";  // Ensure this matches the correct path

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TalkingPhoto />} />
            </Routes>
        </Router>
    );
}

export default App;
