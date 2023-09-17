"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { useState } from "react";
import { newFeatures, startingFeatures } from "../constants";

const WhatsNew = () => (
  <section
    className={`${styles.paddings} relative z-10 border-2 border-green-700`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 
   border-2 border-cyan-600 `}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col 
      border-2 border-pink-500"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[48px] flex  flex-wrap justify-between  gap-[24px] ">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter} border-2 border-yellow-500`}
      >
        <img
          src="/whats-new.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
