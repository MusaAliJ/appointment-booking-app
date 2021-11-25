import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainComponent from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
    );
}

export default App;
