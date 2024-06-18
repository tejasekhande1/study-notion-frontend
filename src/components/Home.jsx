import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
const Home = () => {
  return (
    <div>
      {/* Section 1 */}

      {/* add shadows */}
      <div className="flex flex-col relative w-full text-white justify-between max-w-maxContent">
        <Link to="/signup">
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
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
          <p className="w-[70%] text-center font-thin">
            {" "}
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      {/* Section 3 */}
      {/* Footer */}
    </div>
  );
};

export default Home;
