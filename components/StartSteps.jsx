import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row border-2 border-purple-600`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px] text-white">0 {number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-[18px] text-[#B0B0B0] leading-[32px] font-normal">
      {text}
    </p>
  </div>
);

export default StartSteps;
