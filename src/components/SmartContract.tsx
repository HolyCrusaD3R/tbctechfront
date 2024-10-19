import { useEffect } from "react"; // For fetching
import testContract from "../assets/testContract";
import WallOfText from "./WallOfText";

const SmartContract = ({ id }: { id: number }) => {
  if (id === -1) {
    return (
      <div>
        <p>ამ კონტრაქტზე ხელი არ მიგიწვდებათ ან არ არსებობს</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto my-10 border-tbcBlue border-2 rounded-md px-10">
      <div className="flex flex-row justify-between w-full pt-10">
        <div className="text-xl">
          <p>
            <strong>{testContract.product.title}</strong>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xl font-bold">
          <p>to : {testContract.buyer.name}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-full">
        {testContract.product.images.length === 0 ? (
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            alt="no image found"
            className="h-60 w-60 object-cover rounded-xl"
          />
        ) : (
          testContract.product.images.map((src) => (
            <img
              src={src}
              alt="product photo"
              className="h-60 w-60 object-cover rounded-xl"
            />
          ))
        )}
      </div>
      {/* <br /> */}
      {/* <WallOfText title="Description">{testContract.description}</WallOfText> */}
      <br />
      <WallOfText title="Terms & Conditions">
        {testContract.conditions}
      </WallOfText>
      <br />
      <div className="text-2xl font-bold my-4">
        Price: {testContract.amount} ₾
      </div>
      <div className="text-2xl font-bold my-4">
        Contract ID: {testContract.id} ₾
      </div>
    </div>
  );
};

export default SmartContract;
