import Navbar from "../components/Navbar";

interface Work {
    name: string;
    url?: string;
    location: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
}
function Experience() {
    const internships: Work[] = [
        {
            name: "SENIORDEV",
            url: "https://seniordev-group.com/",
            position: "Web Developer",
            location: "Cotonou, Benin",
            date: "Mars 2023 - Juin 2023",
            description:
                "During this placement, we worked on creating a project management web application using ReactTS on the front-end and Laravel Sanctum on the backend. I also improved my analysis method using UML.",
            stacks: ["ReactJS", "Laravel Sanctum", "TypeScript", "JWT", "REST API", "PostgreSQL", "UML"],
        },
        {
            name: "SENIORDEV",
            url: "https://seniordev-group.com/",
            position: "Web Developer",
            location: "Cotonou, Benin",
            date: "Juillet 2022 - Septembre 2022",
            description:
                "During my placement, I developed my back-end development skills with Laravel and improved my front-end development skills with VueJS 2 by creating a web application for managing practical work.",
            stacks: ["VueJS", "Laravel", "JavaScript", "PHP", "MERISE","MySQL"],
        },
    ];

    return (
        <>
            <head>
                <title>Béryl HOUESSOU | Skills</title>
                <meta
                    name="description"
                    content="I'm Béryl HOUESSOU, a mobile and backend developer."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <main className="m-0 w-screen h-screen  overflow-x-hidden">
                <div className="grid grid-cols-[5vw_5vw_5vw_80vw_5vw] ">
                    <div className=" h-[15vh] w-full col-span-3 grid place-content-center">
                        <div className="text-3xl">BrylDev.</div>
                    </div>
                    <div className=" h-[15vh] w-full col-start-2 col-end-5">
                        <div
                            className="experience-internship__title"
                        >
                            <h2 className="text-left text-3xl">
                                Internships
                            </h2>
                        </div>
                        <div className="border border-gray-950 h-[0.01vh] w-full m-4 "></div>
                        <div className=" h-[15vh] w-full col-start-2 col-end-5 ">
                            {internships.map((internship, index) => (
                                <div className={`flex-col flex justify-between  h-[32vh] p-[2.5vh]  ${index === 0 ? '' : 'border-t-[0.2vh] border-gray-900' }`} key={index}>
                                    <div className="flex justify-between ">
                                        <div className="text-left ">
                                            <h3 className="text-1xl font-extrabold">{internship.name}</h3>
                                            <p className="font-semibold">{internship.position}</p>
                                        </div>
                                        <div className="text-right ">
                                            <h3 className="">{internship.date}</h3>
                                            <p className="font-bold">{internship.location}</p>
                                        </div>
                                    </div>
                                    <div className="text-left ">
                                        <p>{internship.description}</p>
                                    </div>
                                    {internship.stacks && (
                                        <div className="flex gap-1 h-6 ">
                                            {internship.stacks.map((item) => {
                                                return <div className="rounded-full border border-gray-900 h-full px-2 text-sm">{item}</div>;
                                            })}
                                        </div>
                                    )}
                                    <div className="flex justify-end ">
                                        {internship.url && (
                                            <a
                                            href={internship.url}
                                            className="hover:text-gray-800 text-gray-800 flex  items-center justify-between w-[6.5vw]"
                                            >
                                                <svg
                                                    width={15}
                                                    height={15}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    // className="bg-slate-300"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                                <span>Website</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Navbar />
            </main>
        </>
    );
}
export default Experience;