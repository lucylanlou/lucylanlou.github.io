import { motion } from 'framer-motion';

import { styles } from '../styles'
import { FlowersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 pink-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black-100`}>
            Hi, I'm <span className="text-secondary">Lucy Lou</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            A software engineer and designer&nbsp;
            <br className="sm:block hidden"/> 
            with an emphasis on creativity
          </p>
        </div>
      </div>

      <FlowersCanvas />

      <div className="absolute xs:bottom-5 bottom-5 w-full 
      flex justify-center items-center">
        <a href="#about">
          <div className="w-[55px] h-[64px] flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [12, 0, 12]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            >
              <div className="flex">
                <div className="w-1 h-5 bg-quadinary rotate-[125deg] mr-1 ml-1"></div>
                <div className="w-1 h-5 bg-quadinary rotate-[55deg] ml-1 mr-1"></div>
              </div>
              <div className="flex">
                <div className="w-1 h-5 bg-quadinary rotate-[125deg] mr-1 ml-1"></div>
                <div className="w-1 h-5 bg-quadinary rotate-[55deg] ml-1 mr-1"></div>
              </div>
            </motion.div>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero