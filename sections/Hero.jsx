"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6 border-2 border-yellow-500`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col border-2 border-red-500`}
    >
      <div
        className="flex justify-center items-center flex-col relative z-10 
    "
      >
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center border-2 border-lime-400"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <h1 className={styles.heroDText}></h1>
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full hero-gradient h-[300px] rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt=""
          className="w-full sm:h-[500px] h-[350px] rounded-tl-[140px] z-10 relative object-cover"
        />
        <a href="#explore">
          <div className="w-full sm:-mt-[70px] flex justify-end -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt=""
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain
               "
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
