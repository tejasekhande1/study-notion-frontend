import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  ctabtn1,
  ctabtn2,
  codeBlock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex my-20 justify-between ${position} gap-10`}>
      <div className="flex flex-col w-[50%] p-[32px]">
        <div className="flex flex-col gap-[12px]">
          {heading}
          <div className="font-light text-[16px] text-richblack-300">
            {subHeading}
          </div>
        </div>
        <div className="flex gap-7 mt-[24px]">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.text}
              <FaArrowRight></FaArrowRight>
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.text}
          </CTAButton>
        </div>
      </div>

      <div className="w-[50%] flex flex-row p-[32px] border border-richblack-100 border-opacity-[22%] bg-code-block-gradient"> 
        <div className="p-[8px] flex">
          <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <div
            className={`w-[100%] flex-col font-bold font-mono ${codeColor} lg:w-[500px]`}
          >
            <TypeAnimation
              sequence={[codeBlock, 2000, ""]}
              repeat={Infinity}
              omitDeletionAnimation={false}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
            ></TypeAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
