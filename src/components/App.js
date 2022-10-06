import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../reset.css'
import '../style.css'
import SelectMoviePage from "./SelectMoviePage";
import SelectSessionPage from "./SelectSessionPage";
import SelectSeatPage from "./SelectSeatPage";
import Header from "./Header";
import Sucess from "./Sucess";


 export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SelectMoviePage />}/>
                <Route path="/sessoes/:idFilme" element={<SelectSessionPage />}/>
                <Route path="/assentos/:idSessao" element={<SelectSeatPage />}/>
                <Route path='/sucesso' element={<Sucess />}/>
            </Routes>
        </BrowserRouter>
    )
 }