import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../reset.css'
import '../style.css'
import SelectMoviePage from "./SelectMoviePage";
import SelectSessionPage from "./SelectSessionPage";
import SelectSeatPage from "./SelectSeatPage";
import Footer from "./Footer"; 


 export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectMoviePage />}/>
                <Route path="/sessoes" element={<SelectMoviePage />}/>
                <Route path="/assentos" element={<SelectMoviePage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
 }