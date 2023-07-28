import Navbar from "../components/Navbar";

function Contact() {
    return (
        <main className="grid place-items-center m-0 w-screen h-screen">
            {/* <div className="fixed top-7 left-[5%] "> */}
            {/* <div className="text-2xl">Bryl dev.</div> */}
            {/* </div> */}
            <div className="grid grid-cols-1 place-content-around w-[95%] h-screen">
                <div className="text-center bg-slate-900 flex justify-center items-center p-[1.5vw] rounded-lg">
                    <h1 className=" text-white text-[10.5vw] ">DROP ME A LINE</h1>
                </div>
                <div className="flex w-full justify-between items-start h-[30vh] ">
                    <div className="grid w-[30%] h-full place-items-center ">
                        <div className="text-3xl ">Bryl dev.</div>
                    </div>
                    <div className="flex w-[50%] justify-evenly items-start text-left ">
                        <ul className="list-none list-inside">
                            <h3 className="font-semibold text-4xl py-3">Contact</h3>
                            <li>
                                <span className="text-[1.4vw]">Twitter </span>
                            </li>
                            <li>
                                <span className="text-[1.4vw]">Whatsapp </span>
                            </li>
                        </ul>
                        <ul className="list-none list-inside">
                            <h3 className="font-semibold text-4xl py-3">Other</h3>
                            <li>
                                <span className="text-[1.4vw]">LinkedIn </span>
                            </li>
                            <li>
                                <span className="text-[1.4vw]">Github <sub>@beryl452</sub></span>
                            </li>
                            <li>
                                <span className="text-[1.4vw]">Github <sub>@beryl-07</sub></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navbar />
        </main>
    );
}

export default Contact;