import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    } as any); 
    return () => {
      locomotiveScroll.destroy(); // Cleanup
    };
  }, []);
};
