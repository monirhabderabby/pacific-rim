import Image from "next/image";

const Flag = ({
  currentState,
  displayedFlag,
}: {
  currentState: string;
  displayedFlag: string;
}) => (
  <div className="mb-8">
    <Image
      src={displayedFlag}
      alt={`${currentState} Flag`}
      width={300}
      height={180}
      className="rounded-lg shadow-lg"
    />
  </div>
);

export default Flag;
