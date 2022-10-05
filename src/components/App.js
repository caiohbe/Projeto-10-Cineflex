import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../reset.css'
import '../style.css'
import SelectMoviePage from "./SelectMoviePage";
import SelectSessionPage from "./SelectSessionPage";
import SelectSeatPage from "./SelectSeatPage";


 export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectMoviePage />}/>
                <Route path="/sessoes" element={<SelectSessionPage />}/>
                <Route path="/assentos" element={<SelectSeatPage />}/>
            </Routes>
        </BrowserRouter>
    )
 }