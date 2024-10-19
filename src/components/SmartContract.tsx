import { useState, useEffect } from "react";
import WallOfText from "./WallOfText";

import apiKey from "../assets/tempToken";

const SmartContract = ({ id }: { id: number }) => {
  const [contract, setContract] = useState<any>(null); // For holding the fetched contract
  const [loading, setLoading] = useState<boolean>(true); // For loading state
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    const fetchContract = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://134.122.73.198/api/contracts/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contract");
        }

        const data = await response.json();
        setContract(data); // Set the fetched contract data
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (id !== -1) {
      fetchContract();
    }
  }, [id]);

  if (id === -1) {
    return (
      <div>
        <p>ამ კონტრაქტზე ხელი არ მიგიწვდებათ ან არ არსებობს</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-[1000px] mx-auto my-10 border-tbcBlue border-2 rounded-md px-10">
        <div className="animate-pulse">
          <div className="flex flex-row justify-between w-full pt-10">
            <div className="w-1/3 h-8 bg-gray-300 rounded-md"></div>
            <div className="flex flex-col gap-3 w-1/4">
              <div className="h-6 bg-gray-300 rounded-md"></div>
              <div className="h-6 bg-gray-300 rounded-md"></div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-around w-full mt-6">
            <div className="h-60 w-60 bg-gray-300 rounded-xl"></div>
            <div className="h-60 w-60 bg-gray-300 rounded-xl"></div>
            <div className="h-60 w-60 bg-gray-300 rounded-xl"></div>
          </div>
          <div className="mt-10">
            <div className="w-1/2 h-6 bg-gray-300 rounded-md mb-4"></div>
            <div className="w-full h-24 bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-1/3 h-6 bg-gray-300 rounded-md mt-8"></div>
          <div className="w-1/4 h-6 bg-gray-300 rounded-md mt-4"></div>
          <div className="w-1/4 h-6 bg-gray-300 rounded-md mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl font-bold mx-auto max-w-[1000px] mt-10 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!contract) {
    return <p>This contract doesn't exist or you cannot see it.</p>;
  }

  return (
    <div className="max-w-[1000px] mx-auto my-10 border-tbcBlue border-2 rounded-md px-10">
      <div className="flex flex-row justify-between w-full pt-10">
        <div className="text-xl">
          <p>
            <strong>{contract.product.title}</strong>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xl font-bold">
          <p>from: {contract.buyer.name}</p>
          <p>to: {contract.product.user.name}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around w-full">
        {contract.product.images.length === 0 ? (
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            alt="no image found"
            className="h-60 w-60 object-cover rounded-xl"
          />
        ) : (
          contract.product.images.map((src: string) => (
            <img
              src={src}
              alt="product photo"
              className="h-60 w-60 object-cover rounded-xl"
            />
          ))
        )}
      </div>
      <br />
      <WallOfText title="Terms & Conditions">{contract.conditions}</WallOfText>
      <br />
      <div className="text-2xl font-bold my-4">Status: {contract.status}</div>
      <div className="text-2xl font-bold my-4">Price: {contract.amount} ₾</div>
      <div className="text-2xl font-bold my-4">Contract ID: {contract.id}</div>
    </div>
  );
};

export default SmartContract;
