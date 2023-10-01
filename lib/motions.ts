interface IFadeInTypeProps {
  direction?: string;
  type?: string;
  delay?: number;
  duration?: number;
}

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: IFadeInTypeProps) => {
  return {
    hidden: {
      x:
        direction === 'left'
          ? 100
          : direction === 'right'
          ? -100
          : 0,
      y:
        direction === 'up'
          ? 100
          : direction === 'down'
          ? -100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay || 0.5,
        duration: duration || 0.5,
        ease: 'easeOut',
      },
    },
  };
};

export const appear = () => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      viewport: { once: false },
      transition: { duration: 0.5 },
    },
  };
};
