import Header from "../components/Header";
import "../styles/HomePage.css"

const HomePage = () => {
    return <div>
        <Header />
        <h1 style={{
            color: "red",
            backgroundColor: "black",
            padding: "20px",
            fontFamily: "cursive"
        }}>Home Page</h1>
    </div>
}

export default HomePage