import { motion } from "motion/react";
// import { useEffect, useRef, useState } from "react";

function AnimatedCount({ count }: { count: number }) {
  // const controls = useAnimationControls();

  // const [isIncrement, setIsIncrement] = useState<boolean>(true);

  // const prevCountRef = useRef<number>(count);

  // useEffect(() => {
  //     setIsIncrement(count > prevCountRef.current);
  //     prevCountRef.current = count;
  // }, [count,setIsIncrement])

  // useEffect(() => {
  //     controls.start("")
  // }, [isIncrement]);

  return (
    <motion.div
      initial="false"
      animate={{
        transition: {
          duration: 1,
          ease: "linear",
        },
      }}
    >
      {count}
    </motion.div>
  );
}

export default AnimatedCount;
