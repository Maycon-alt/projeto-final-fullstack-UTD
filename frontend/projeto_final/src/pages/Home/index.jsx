import NavBar from "../../components/NavBar";
import '../../index.css'

function Home() {
    return (
        <>
            <NavBar/>            
            <button className="main text-4xl text-blue-500 font-bold">Viver é arriscar tudo. Caso contrário você é apenas um pedaço inerte de moléculas montadas aleatoriamente à deriva onde o universo te sopra.</button>
        </>
    );
}
export default Home;
