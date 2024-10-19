import SmartContractMinimized from "./SmartContractMinimized";
import testContract from "../assets/testContract";
import NavBarLinkButton from "./NavBarLinkButton";
// import { useEffect } from "react";

const Inbox = () => {
  // useEffect({}, []);

  return (
    <div>
      <div className="flex flex-row flex-start text-2xl max-w-[1000px] mx-auto my-10">
        <p>Inbox</p>
      </div>
      <SmartContractMinimized contract={testContract} />
      <div className="flex flex-row justify-between text-2xl max-w-[1000px] mx-auto my-10">
        <div>
          <p>Sent</p>
        </div>
        <div>
          <NavBarLinkButton to="/create">Create Contract</NavBarLinkButton>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
