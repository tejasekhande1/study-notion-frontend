import { Link } from "react-router-dom";
const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[16px] px-6 py-3 rounded-lg font-bold border-b-[1px] border-white border-opacity-20
      ${active ? `bg-yellow-50 text-black` : `bg-richblack-800 text-white`}
      hover:scale-95 transition-all duration-200`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
