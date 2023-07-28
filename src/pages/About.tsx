import Navbar from "../components/Navbar";

function About() {
    return (
        <main className="m-0 w-screen h-screen">
            <div className="fixed top-7 left-[5%] ">
                <div className="text-2xl">Bryl dev.</div>
            </div>
            <div className="flex justify-center w-screen h-screen ">
                <div className="text-left w-[60%] flex justify-start items-center p-[1.5vw]">
                    <div className="h-[70%] grid content-evenly">
                        <div className="text-3xl">ABOUT ME</div>
                        <div className="text-lg">
                            Hey, I'm Béryl HOUESSOU, a mobile and backend developer (Laravel and NodeJS) currently
                            finishing my degree in Computer and Software Systems (SIL). I'm passionate about web
                            app development and with my growing interest in Android app development, I've decided
                            to start a blog to document my learning journey. I also enjoy listening to music and
                            playing basketball in my free time.
                        </div>
                        <ul className="list-none list-inside">
                            <h3 className="font-semibold text-xl">LANGUAGES</h3>
                            <li>
                                <span>French <sub>Native</sub></span>
                            </li>
                            <li>
                                <span>English <sub>Basic</sub></span>
                            </li>
                            <li>
                                <span>Fon <sub>Native</sub></span>
                            </li>
                        </ul>
                        <div className="flex w-full">
                            <a

                                href="#"
                                className="text-cyan-950 flex justify-between px-[1.9%] w-[18%]"
                            >
                                <svg
                                    width={23}
                                    height={23}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="#213547"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>{" "}
                                Resume
                            </a>
                            <a

                                href="#"
                                className="text-cyan-950 flex justify-between px-[1.9%] w-[15%]"
                            >
                                <svg
                                    width={23}
                                    height={23}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="#213547"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>{" "}
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </main>
    );
}

export default About;