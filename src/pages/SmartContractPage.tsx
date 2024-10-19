import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SmartContract from "../components/SmartContract";

const SmartContractPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <SmartContract id={id ? +id : -1} />
    </div>
  );
};

export default SmartContractPage;
