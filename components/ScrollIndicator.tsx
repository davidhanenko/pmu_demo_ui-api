type ScrollAnimatedProps = {
  borderColor: string;
  bgColor: string;
};

const ScrollAnimated = ({
  borderColor,
  bgColor,
}: ScrollAnimatedProps) => {
  return (
    <div>
      <div
        className={`h-7 w-4 ${borderColor} border-2 rounded-xl`}
      >
        <div
          className={`h-[5px] w-[2px] block my-[3px] mx-auto ${bgColor} animate-animatedMouse`}
        ></div>
      </div>
    </div>
  );
};

export default ScrollAnimated;
