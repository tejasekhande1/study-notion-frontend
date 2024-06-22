import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton.jsx";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "./CodeBlocks.jsx";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}

      {/* add shadows */}
      <div className="flex flex-col relative w-full text-white justify-between max-w-maxContent">
        <Link to="/signup">
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 border-b-[1px] border-white border-opacity-20 hover:scale-95 w-fit">
            <div className="rounded-full flex flex-row items-center gap-[10px] px-5 py-[5px] group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower your future with
          <HighlightText text={" Coding Skills"}></HighlightText>
        </div>

        <div className=" mt-4 flex justify-center">
          <p className="w-[70%] text-center font-thin text-[16px] text-richblack-300">
            {" "}
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="flex flex-row justify-center gap-5 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="shadow-blue-200 mt-12 mx-3 flex flex-row justify-center">
          <video muted loop autoPlay className="w-[1035px] h-[515px]">
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>

        {/* code section 1 */}
        <div className="py-[40px] px-[120px]">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your{" "}
                <HighlightText text={" coding potential "}></HighlightText>with
                our online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              text: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html> 
                        <html> 
                        <head><title>Example</title><linkrel="stylesheet"href="styles.css"> 
                        </head> 
                        <body> 
                        <h1><ahref="/">Header</a> 
                        </h1> 
                        <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a> 
                        </nav>`}
            codeColor={"text-yellow-25"}
          ></CodeBlocks>
        </div>
      </div>

      {/* Section 2 */}
      {/* Section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
