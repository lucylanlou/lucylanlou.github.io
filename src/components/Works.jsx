import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { arrow } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="sm:min-w-[360px] w-full"
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white-100 p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-tertiary w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
          >
            <img
              src={arrow}
              alt="see more"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-black-100 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] leading-[30px]"
      >
        Here are some of my class and side projects! Besides this website, which
        uses React, Tailwind CSS, and Three.js, I’ve designed and coded some
        others. I’ve also made a few mobile apps. I had a lot of fun with
        creating these; I love seeing my visions come to life.
      </motion.p>

      <div className="md:mt-20 mt-12 grid lg:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works", 0.15);
