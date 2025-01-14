// package import ==========
import dynamic from "next/dynamic";

const AgeAlert = dynamic(() => import("./_components/age-alert"), {
  ssr: false,
});

const Pagee = () => {
  return (
    <div>
      <AgeAlert />
    </div>
  );
};

export default Pagee;
