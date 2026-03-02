import { CaretLeftIcon } from "@phosphor-icons/react";
import { useNavigate, useNavigationType } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const handleBack = () => {
    if (navigationType === "PUSH") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button className="flex justify-center items-center" onClick={handleBack}>
      <CaretLeftIcon size={24} className="text-white" />
    </button>
  );
};

export default BackButton;
