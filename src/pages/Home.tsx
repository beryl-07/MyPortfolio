import Navbar from "../components/Navbar";

function Home() {
    return (
        <main className="m-0 w-screen h-screen">
            <div className="m-0">
                <div className="flex justify-between h-[15vh] px-[1.5vw] ">
                    <div className="col-span-1 grid place-items-center">Bryl dev.</div>
                    <div className="col-span-3 grid place-items-center">Based in Cotonou<br /> Benin</div>
                    <div className="col-span-1 grid place-items-center">contact</div>
                </div>
                <div className=" flex justify-start items-end col-start-2 pl-[12vw] h-[25vh] pb-2 ">
                    <p className=" w-[17.9vw] text-sm text-left">
                        Hi, I'm Béryl HOUESSOU mobile & backend developer living in Cotonou, Benin
                    </p>
                </div>
                <div className=" col-start-2 col-end-6 text-left text-8xl pl-[12vw] h-[50vh]" >BÉRYL✺HOUESSOU<br />DEVELOPER❋</div>
                <div className="col-span-5 grid place-items-center h-[10vh]"><Navbar/></div>
            </div>
        </main>
    );
}

export default Home;