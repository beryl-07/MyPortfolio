import Navbar from "../components/Navbar";
import kotlin from "../assets/kotlin.svg";
import github from "../assets/github.svg";
import laravel from "../assets/laravel.svg";
import nodejs from "../assets/nodejs.svg";

function Skills() {
  interface Skill {
    svg: string;
    name: string;
    color: string;
    colorRGB: string;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }
  //interface Certifications {
  //  name: string;
  //  svg: string;
  //}
  const allSkills: SkillSection[] = [
    {
      title: "Web",
      skills: [
        {
          svg: laravel,
          name: "Laravel",
          color: "#E34F26",
          colorRGB: "227, 79, 38",
        },
        {
          svg: nodejs,
          name: "NodeJS",
          color: "#539e43",
          colorRGB: "83, 158, 67",
        },
        {
          svg: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
        {
          svg: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
          name: "TypeScript",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          svg: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        {
          svg: "https://www.svgrepo.com/show/374118/tailwind.svg",
          name: "TailwindCSS",
          color: "#38B2AC",
          colorRGB: "56, 178, 172",
        },
      ],
    },
    {
      title: "Mobile",
      skills: [
        {
          svg: kotlin,
          name: "Kotlin",
          color: "#02569B",
          colorRGB: "2, 86, 155",
        },
      ],
    },
    // {
    //   title: "Deployment",
    //   skills: [
    //     {
    //       svg: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
    //       name: "Vercel",
    //       color: "#000000",
    //       colorRGB: "0, 0, 0",
    //     },
    //   ],
    // },
    {
      title: "Other",
      skills: [
        {
          svg: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          svg: github,
          name: "Github",
          color: "#000",
          colorRGB: "0, 0, 0",
        },
      ],
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
        <div className="grid grid-cols-[5vw_5vw_5vw_80vw_5vw]">
          <div className=" h-[15vh] max-lg:h-[10vh] w-full col-span-3 grid place-content-center">
            {/* <div className="text-3xl">BrylDev.</div> */}
            <div className="fixed top-7 left-[5%] ">
                <div className="text-3xl max-lg:text-2xl">BrylDev.</div>
            </div>
          </div>
          <div className=" h-[15vh] w-full col-start-2 col-end-5">
            {allSkills.map((skill, index) => (
              <div className="m-5" key={index}>
                <div
                  className="skills-section__title"
                  style={{ overflow: "hidden" }}
                >
                  <h2 className="text-left text-3xl max-lg:text-2xl">{skill.title}</h2>
                </div>
                <div className="border border-gray-950 h-[0.01vh] w-full m-4"></div>
                <div className="flex gap-3 flex-wrap">
                  {skill.skills.map((skill, index) => (
                    <div className="">
                      <div key={index}>
                        <div
                          className="rounded-full p-2 w-20 h-20 grid place-content-center max-lg:w-16 max-lg:h-16"
                          style={{
                            backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                            border: `1px solid ${skill.color}`,
                          }}
                        >
                          <img
                            src={skill.svg}
                            alt={skill.name}
                            width={50}
                            height={50}
                          />
                        </div>
                        <h3
                          style={{
                            color: skill.color,
                          }}
                        >
                          {skill.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Navbar/>
      </main>
    </>
  );
}
export default Skills;