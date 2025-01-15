"use client";

import { useLocomotiveScroll } from "./locomotive";
import { ReactNode } from "react";

interface LocomotiveProviderProps {
  children: ReactNode;
}

const LocomotiveProvider: React.FC<LocomotiveProviderProps> = ({ children }) => {
  useLocomotiveScroll();
  return <>{children}</>;
};

export default LocomotiveProvider;
