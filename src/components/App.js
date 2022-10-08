import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../reset.css'
import '../style.css'
import SelectMoviePage from "./SelectMoviePage";
import SelectSessionPage from "./SelectSessionPage";
import SelectSeatPage from "./SelectSeatPage";
import Header from "./Header";
import Sucess from "./Sucess";
import { useState } from "react";


 export default function App() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    const [title, setTitle] = useState('')

    const [sessionDay, setSessionDay] = useState('')
    const [sessionHour, setSessionHour] = useState('')
    const [seatNumbers, setSeatNumbers] = useState([])


    return (
        <BrowserRouter>
            <Header setSeatNumbers={setSeatNumbers}/>
            <Routes>
                <Route path="/" element={<SelectMoviePage />}/>

                <Route path="/sessoes/:idFilme" 
                element={<SelectSessionPage
                title={title}
                setTitle={setTitle}
                setSessionHour={setSessionHour}
                setSessionDay={setSessionDay}
                 />}/>

                <Route path="/assentos/:idSessao"
                element={<SelectSeatPage
                title={title}
                name={name}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}   
                seatNumbers={seatNumbers}
                setSeatNumbers={setSeatNumbers}             
                />}/>

                <Route path='/sucesso' 
                element={<Sucess 
                title={title}
                sessionDay={sessionDay}
                sessionHour={sessionHour}
                seatNumbers={seatNumbers}
                setSeatNumbers={setSeatNumbers}
                name={name}
                cpf={cpf}
                />}/>
            </Routes>
        </BrowserRouter>
    )
 }