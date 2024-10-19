import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SmartContractPage = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
    </div>
  );
};

export default SmartContractPage;
