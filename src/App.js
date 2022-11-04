import Home from "./pages/Home";
import "./App.css"

// react-router-dom
import {Router, Route, Routes} from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
        </Routes>

    );
}

export default App;
