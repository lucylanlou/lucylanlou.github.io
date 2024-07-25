import { motion } from "framer-motion";
import { down } from "../assets";

import { styles } from "../styles";
import { FlowersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] sm:h-screen min-h-[700px] mx-auto flex flex-col container justify-center items-center">
      <div
        className={`${styles.paddingX} inset-0 pt-[120px] w-full
      flex flex-row items-start gap-5 max-w-7xl`}
      >
        <div className="absolute flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>
        <div className="ml-10">
          <h1 className={`${styles.heroHeadText} text-black-100`}>
            Hi, I'm{" "}
            <span className="text-secondary">
              Lucy <span className="sm:inline hidden">Lou</span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            A software engineer and designer&nbsp;
            <br className="sm:block hidden" />
            with an emphasis on creativity
          </p>
        </div>
      </div>

      <FlowersCanvas className="flex grow md:w-[750px] mt-5 mx-auto" />

      <div className="absolute z-10 sm:bottom-[10px] bottom-[30px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[55px] h-[64px] flex justify-center items-start p-0">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <img
                src={down}
                alt="see more"
                className="sm:mt-0 mt-5 sm:w-7 w-5 object-contain"
              />
              <img
                src={down}
                alt="see more"
                className="sm:w-7 w-5 object-contain"
              />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
