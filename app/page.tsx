import HomeComponent from "./components/home";
import dynamic from "next/dynamic";
const LocomotiveProvider = dynamic(
  () => import("./components/LocomotiveProvider"), // Import your hook's client context
  { ssr: false } // Disable server-side rendering for this component
);
export default function Home() {
  return (
    <div>
      <LocomotiveProvider>
        <HomeComponent />
      </LocomotiveProvider>
    </div>
  );
}
