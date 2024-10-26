"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };
 
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
  const padding = useTransform(scrollYProgress, [0, 1], ["1rem", "0rem"]);
  const border = useTransform(scrollYProgress, [0, 1], ["4px", "0px"]);

  return (
    <div
      className="h-[60rem] md:min-h-[80rem] flex items-center justify-center relative bg-[#080808]"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-40"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} width={width} padding={padding} border={border}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center div"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  width,
  padding,
  border,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  width: MotionValue<string>;
  padding: MotionValue<string>;
  border: MotionValue<string>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        width,
        rotateX: rotate,
        scale,
        padding,
        border,
    
      }}
      className="-mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-[#2f2f2f] bg-[#1f1f1f] rounded-[30px]"
    >
      <div className="w-full h-full overflow-hidden bg-[#000000] dark:bg-zinc-900 rounded-3xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
