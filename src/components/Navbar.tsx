import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            {isMenuOpen && (
                <div className="transition ease-in-out delay-150 fixed bottom-10 left-[25%] flex flex-col rounded-lg p-[0.4vw] text-white w-[50vw] h-[38vh]" style={{ backgroundColor: 'rgba(34, 34, 34, 0.8)' }}>
                    <div className="flex flex-col justify-evenly mb-[0.5vh] bg-slate-900 rounded-lg h-full w-full border-[0.05vw] border-stroke">
                        <Link to="/MyPortfolio/about" className="text-left border-b border-dashed p-[0.7vw] text-white">About</Link>
                        <Link to="/MyPortfolio/skills" className="text-left border-b border-dashed p-[0.7vw] text-white">Skills</Link>
                        <Link to="/MyPortfolio/experience" className="text-left border-b border-dashed p-[0.7vw] text-white">Experience</Link>
                        <Link to="/MyPortfolio/contact" className="text-left p-[0.7vw] text-white">Contact</Link>
                        {/* <div className="flex justify-around">
                        <div className="flex items-end justify-center">Twitter</div>
                        <div className="flex items-end justify-center">Github <sub>@beryl452</sub></div>
                        <div className="flex items-end justify-center">Github <sub>@beryl-07</sub></div>
                        <div className="flex items-end justify-center">LinkedIn</div>
                    </div> */}
                    </div>
                    <div className="flex justify-between rounded-lg bg-slate-900 h-[8vh] border-[0.05vw] border-stroke">
                        <Link to="/portfolio" className="text-white flex items-center justify-center rounded-lg bg-slate-900 p-[0.5vw]">
                            BrylDev.
                        </Link>
                        <div className="flex rounded-lg bg-slate-900 p-[0.5vw] w-[3vw] h-[3vh] cursor-pointer" onClick={
                            () => {
                                setIsMenuOpen(!isMenuOpen)
                                console.log(isMenuOpen)
                            }
                        }>
                            <svg
                                width={32}
                                height={32}
                                viewBox="0 0 4 4"
                                enableBackground="new 0 0 32 32"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M0.287 3.713a0.125 0.125 0 0 0 0.177 0L2 2.177l1.537 1.536a0.125 0.125 0 0 0 0.177 -0.177L2.177 2 3.713 0.463a0.125 0.125 0 0 0 -0.177 -0.177L2 1.823 0.463 0.287a0.125 0.125 0 0 0 -0.176 0.176L1.823 2 0.287 3.537a0.125 0.125 0 0 0 0 0.176z"
                                    fill="#fff"
                                    data-original="#000000"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            {!isMenuOpen && (
                <div className="fixed bottom-10 left-[40.1%] flex justify-between rounded-lg border-[0.05vw] border-stroke w-min" style={{ backgroundColor: 'rgba(34, 34, 34, 0.8)', color: 'white', padding: '0.4vw' }}>
                    <Link to="/portfolio" className=" text-white flex items-center justify-center w-[45%] rounded-lg bg-slate-900 p-[0.9vw] ">
                        BrylDev.
                    </Link>
                    <div className="flex justify-between w-[45%] rounded-lg bg-slate-900 p-[0.5vw] cursor-pointer px-3" onClick={
                        () => {
                            setIsMenuOpen(!isMenuOpen)
                        }
                    }>
                        <div className="grid place-items-center">
                            Menu
                        </div>
                        <svg
                            viewBox="0 0 32 32"
                            enableBackground="new 0 0 32 32"
                            xmlSpace="preserve"
                            className="w-[4.1vw] h-[4.1vw]"
                        >
                            <g>
                                <path
                                    d="M25.3 9H6.7c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8zM25.3 16H6.7c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8zM25.3 23H6.7c-.4 0-.7-.3-.7-.8s.3-.8.8-.8h18.5c.4 0 .8.3.8.8s-.4.8-.8.8z"
                                    fill="#ffffff"
                                    data-original="#000000"
                                    opacity={1}
                                />
                            </g>
                        </svg>
                    </div>
                </div>)}
        </>
    );
}

export default Navbar;
