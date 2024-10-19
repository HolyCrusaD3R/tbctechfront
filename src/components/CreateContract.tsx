import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SubmitButton from "../components/SubmitButton";
import tempToken from "../assets/tempToken";
import { Alert } from "@mui/material";

const CreateContract = () => {
  const [conditions, setConditions] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [productId, setProductId] = useState<number>(0);
  const [alert, setAlert] = useState<string>("");

  const navigate = useNavigate(); // Initialize the hook

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
            conditions,
            amount: +amount,
            product_id: +productId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Contract creation failed");
      }

      const data = await response.json();

      // Navigate to home after successful contract creation
      setAlert("success");
      navigate("/");
    } catch (error) {
      //   console.error(error.message);
      setAlert("error");
    }
  };

  useEffect(() => {
    if (alert !== "") {
      const timer = setTimeout(() => {
        setAlert(""); // Reset alert after 1 second
      }, 3000);

      return () => clearTimeout(timer); // Clean up the timer when the component unmounts or when alert changes
    }
  }, [alert]);

  return (
    <div className="max-w-3xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Create Contract
      </h1>
      {alert && (
        <Alert severity={alert === "success" ? "success" : "error"}>
          {alert === "success"
            ? "Contract Created."
            : "Contract Could Not Be Created."}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="flex justify-center mt-8">
          <SubmitButton>Create Contract</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default CreateContract;
