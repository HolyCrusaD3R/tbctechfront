const SmartContractMinimized = ({
  contract,
}: {
  contract: {
    id: number;
    title: string;
    price: number;
    images: string[];
    receiver: {
      name: string;
    };
    sender: {
      name: string;
    };
    description: string;
    tAndC: string;
  };
}) => {
  return (
    <div className="max-w-[1000px] mx-auto my-10 h-32 border-tbcBlue border-2 rounded-md flex flex-row justify-between px-10 items-center">
      {contract.images.length === 0 ? (
        <img
          src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          alt="no image found"
          className="h-28 w-28 object-cover"
        />
      ) : (
        <img
          src={contract.images[0]}
          alt="contract image"
          className="h-28 w-28 object-cover"
        />
      )}

      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-between gap-12 text-xl">
          <div>
            <p>{contract.price} ₾</p>
          </div>
          <div>
            <p>
              from: <strong>{contract.sender.name}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContractMinimized;
