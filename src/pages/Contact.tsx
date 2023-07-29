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
                        <div className="text-3xl max-lg:text-2xl">BrylDev.</div>
                    </div>
                    <div className="flex w-[50%] justify-evenly items-start text-left ">
                        <ul className="list-none list-inside max-lg:leading-8">
                            <h3 className="font-semibold text-4xl py-3 max-lg:text-3xl">Contact</h3>
                            <li>
                                <a href="https://twitter.com/Bryl_07" className="text-slate-700 hover:text-slate-700"><span className="text-[1.4vw] max-lg:text-sm">
                                    Twitter 
                                </span></a>
                            </li>
                            <li>
                               <span className="text-[1.4vw] max-lg:text-sm">Whatsapp </span>
                            </li>
                        </ul>
                        <ul className="list-none list-inside max-lg:leading-8">
                            <h3 className="font-semibold text-4xl py-3 max-lg:text-3xl">Other</h3>
                            <li>
                            <a href="https://www.linkedin.com/in/b%C3%A9ryl-houessou-03a016206/" className="text-slate-700 hover:text-slate-700" >
                                <span className="text-[1.4vw] max-lg:text-sm">LinkedIn </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/beryl452" className="text-slate-700 hover:text-slate-700"><span className="text-[1.4vw] max-lg:text-sm">Github <sub>@beryl452</sub></span></a>
                            </li>
                            <li>
                                <a href="https://github.com/beryl-07" className="text-slate-700 hover:text-slate-700"><span className="text-[1.4vw] max-lg:text-sm">Github <sub>@beryl-07</sub></span></a>
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