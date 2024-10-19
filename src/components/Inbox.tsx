import { useEffect, useState } from "react";
import SmartContractMinimized from "./SmartContractMinimized";
import NavBarLinkButton from "./NavBarLinkButton";
import apiKey from "../assets/tempToken";

const Inbox = () => {
  const [issuedContracts, setIssuedContracts] = useState<any[]>([]);
  const [receivedContracts, setReceivedContracts] = useState<any[]>([]);
  const [userID, setUserID] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch(
          "http://134.122.73.198/api/users/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contracts");
        }

        const data = await response.json();
        data.issued_contracts
          ? setIssuedContracts(data.issued_contracts)
          : null;
        data.received_contracts
          ? setReceivedContracts(data.received_contracts)
          : null;
        setUserID(data.id);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  if (loading) {
    return <div>Loading contracts...</div>; // You can add a loading spinner here
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex flex-row flex-start text-2xl max-w-[1000px] mx-auto my-10">
        <p>Inbox</p>
      </div>
      {receivedContracts.length > 0 ? (
        receivedContracts.map((contract) => (
          <SmartContractMinimized key={contract.id} contract={contract} />
        ))
      ) : (
        <div>No contracts found.</div>
      )}
      <div className="flex flex-row justify-between text-2xl max-w-[1000px] mx-auto my-10">
        <div>
          <p>Sent</p>
        </div>
        <div>
          <NavBarLinkButton to="/create">Create Contract</NavBarLinkButton>
        </div>
      </div>
      {issuedContracts.length > 0 ? (
        issuedContracts.map((contract) => (
          <SmartContractMinimized key={contract.id} contract={contract} />
        ))
      ) : (
        <div>No contracts found.</div>
      )}
    </div>
  );
};

export default Inbox;
