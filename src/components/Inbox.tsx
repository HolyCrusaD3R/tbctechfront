import SmartContractMinimized from "./SmartContractMinimized";
import testContract from "../assets/testContract";

const Inbox = () => {
  return (
    <div>
      <div className="flex flex-row flex-start text-2xl max-w-[1000px] mx-auto my-10">
        <p>Inbox</p>
      </div>
      <SmartContractMinimized contract={testContract} />
      <SmartContractMinimized contract={testContract} />
      <SmartContractMinimized contract={testContract} />
      <SmartContractMinimized contract={testContract} />
    </div>
  );
};

export default Inbox;
