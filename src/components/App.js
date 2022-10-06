import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../reset.css'
import '../style.css'
import SelectMoviePage from "./SelectMoviePage";
import SelectSessionPage from "./SelectSessionPage";
import SelectSeatPage from "./SelectSeatPage";
import Header from "./Header";
import axios from 'axios';


 export default function App() {
    axios
    .get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
    .then((requisition) => {
        console.log(requisition.data)
    }) 


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<SelectMoviePage />}/>
                <Route path="/sessoes" element={<SelectSessionPage />}/>
                <Route path="/assentos" element={<SelectSeatPage />}/>
            </Routes>
        </BrowserRouter>
    )
 }