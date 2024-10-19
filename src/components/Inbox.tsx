import SmartContractMinimized from "./SmartContractMinimized";

const testContract = {
  id: 5,
  price: 1000,
  title: "google image for sale",
  images: [
    "data:image/png;base64,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",
  ],
  receiver: {
    name: "luka",
  },
  sender: {
    name: "jeff",
  },
  description: "very good product",
  tAndC: "dfkdov dsnva",
};

const Inbox = () => {
  return (
    <div>
      <div className="flex flex-row flex-start text-2xl max-w-[1000px] mx-auto my-10">
        <p>Inbox</p>
      </div>
      <SmartContractMinimized contract={testContract} />
      <div className="flex flex-row flex-start text-2xl max-w-[1000px] mx-auto mt-20">
        <p>Sent</p>
      </div>
      <SmartContractMinimized contract={testContract} />
      <SmartContractMinimized contract={testContract} />
    </div>
  );
};

export default Inbox;
