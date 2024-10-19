import { useState, FormEvent } from "react";
import SubmitButton from "../components/SubmitButton";
import tempToken from "../assets/tempToken";

const CreateContract = () => {
  const [title, setTitle] = useState<string>("");
  const [conditions, setConditions] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [productId, setProductId] = useState<number>(0);
  const [buyerId, setBuyerId] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://134.122.73.198/api/contracts/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tempToken}`,
          },
          body: JSON.stringify({
            title,
            conditions,
            amount: +amount,
            product_id: +productId,
            buyer_id: +buyerId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Contract creation failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Create Contract
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tbcBlue focus:border-transparent transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Conditions:
          </label>
          <textarea
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
            placeholder="Enter conditions"
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tbcBlue focus:border-transparent transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tbcBlue focus:border-transparent transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Product ID:
          </label>
          <input
            type="number"
            value={productId}
            onChange={(e) => setProductId(Number(e.target.value))}
            placeholder="Enter product ID"
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tbcBlue focus:border-transparent transition duration-200"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Buyer ID:
          </label>
          <input
            type="number"
            value={buyerId}
            onChange={(e) => setBuyerId(Number(e.target.value))}
            placeholder="Enter buyer ID"
            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tbcBlue focus:border-transparent transition duration-200"
            required
          />
        </div>

        <div className="flex justify-center mt-8">
          <SubmitButton>Create Contract</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CreateContract;
