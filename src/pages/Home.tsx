import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <main className="m-0 w-screen h-screen">
            <div className="m-0">
                <div className="flex justify-between h-[15vh] px-[3vw] ">
                    <div className="col-span-1 grid place-items-center max-lg:text-xs">Bryl dev.</div>
                    <div className="col-span-3 grid place-items-center max-lg:text-xs">Based in Cotonou<br /> Benin</div>
                    <div className="col-span-1 grid place-items-center max-lg:text-xs"><Link to="/MyPortfolio/contact" className="text-slate-700 hover:text-slate-700">contact</Link> </div>
                </div>
                <div className=" flex justify-start items-end col-start-2 pl-[12vw] h-[25vh] pb-2 ">
                    <p className=" w-[17.9vw] text-sm text-left max-lg:w-[38vw] max-lg:text-xs">
                        Hi, I'm Béryl HOUESSOU mobile & backend developer living in Cotonou, Benin
                    </p>
                </div>
                <div className=" col-start-2 col-end-6 text-left text-8xl pl-[12vw] h-[50vh] max-lg:text-[2.8rem]" >BÉRYL✺HOUESSOU<br />DEVELOPER❋</div>
                <div className="col-span-5 grid place-items-center h-[10vh]"><Navbar/></div>
            </div>
        </main>
    );
}

export default Home;