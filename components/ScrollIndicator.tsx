

const ScrollAnimated = () => {
  return (
    <div className='w-[5px] h-[5px] rotate-45 border-white border-r-2 border-b-2 ml-2 mb-4'>
      <div className='h-16 w-16 border-white border-2'>
        <div className='h-4 w-2 block my-4 mx-auto bg-white relative animate-animatedMouse'></div>
      </div>
      <div>
        <span className='mt-4 animate-mouseScroll delay-100 direction-alternate '></span>
        <span className='animate-mouseScroll delay-200 direction-alternate'></span>
        <span className='animate-mouseScroll delay-300 direction-alternate'></span>
      </div>
    </div>
  );
};

export default ScrollAnimated;
