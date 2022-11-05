import "./App.css"
// react-router-dom
import {Route, Routes} from "react-router-dom"
// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>
            <Route path={"/"} exact element={<Home/>}/>
            <Route path={'/contact'} exact element={<Contact/>}/>
        </Routes>

    );
}

export default App;
