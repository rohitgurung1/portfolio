const About = () => {
  const Info = [
    { text: "Years experience", count: "1" },
    { text: "projects completed", count: "3" },
    { text: "Companies Work", count: "0" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className=" text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold ">
        My introduction
      </p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto ">
          👋 Hello there! I&apos;m Dhan Bahadur Gurung, a dedicated student
          currently on the exciting journey of pursuing a Bachelor&apos;s in
          Computer Application at Nepathya College. I specialize in frontend
          development, utilizing Tailwind CSS, React.js/Next.js to craft
          visually stunning and highly functional user interfaces. I thrive on
          bringing ideas to life in the dynamic world of web development, always
          committed to delivering seamless digital experiences. Beyond coding,
          I&apos;m on a mission to explore innovative ways of combining
          creativity and technology to enhance user interactions. Throughout my
          academic journey, I&apos;ve refined my skills and stayed abreast of
          the latest industry trends. I&apos;m particularly proud of [any
          noteworthy achievements or projects], showcasing my dedication to
          pushing the boundaries of what&apos;s possible. Whether you&apos;re
          interested in collaborating on a project, discussing the latest in
          frontend development, or connecting with like-minded individuals,
          I&apos;m always open to new opportunities and conversations.
          Let&apos;s embark on this exciting digital adventure together! 🌐🚀
        </p>
        <ul className=" mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2 ">
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                  </h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>

                <h3 className="md:text-base text-xs">{content.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
