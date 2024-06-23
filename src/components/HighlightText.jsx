const HighlightText = ({ text }) => {
  return (
    <span className="font-bold bg-clip-text text-transparent bg-custom-gradient">
      {text}
    </span>
  );
};

export default HighlightText;
