const StateHeader = ({ currentState }: { currentState: string }) => (
  <div className="space-y-4 mb-14 text-center">
    <h1 className="text-gradient text-3xl font-bold">
      Select Any State of {currentState}
    </h1>
    <p className="text-gray-500 text-sm">
      Choose Your Business State to Proceed
    </p>
  </div>
);

export default StateHeader;
