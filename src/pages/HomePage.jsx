import { useContext } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../styles/HomePage.css"
import { SampleContext } from "../App";

const HomePage = () => {
    const { counter, setCounter } = useContext(SampleContext)
    return <div>
        <button onClick={() => setCounter(counter + 1)}>Update - {counter}</button>
        <NavBar />
        <Header />
        <h1>Home Page</h1>
    </div>
}

export default HomePage