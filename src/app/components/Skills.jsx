import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, level: "HTML" },
    { icon: <FaCss3 />, level: "CSS" },
    { icon: <FaNodeJs />, level: "Javascript" },
    { icon: <SiTailwindcss />, level: "Tailwind CSS" },
    { icon: <FaReact />, level: "React.js" },
    { icon: <SiNextdotjs />, level: "Next.js" },
  ];
  return (
    <section
      id="skills"
      className="py-10 bg-gray-800 mt-8 text-gray-100 text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">skills</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
      <ul className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center">{skill.icon}</div>
            <div className="text-2xl">{skill.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
