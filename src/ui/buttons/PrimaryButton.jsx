import React from "react";
import CustomButton from "./CustomButton";

const PrimaryButton = ({ title, ...props }) => {
  return (
    <CustomButton
      className="bg-gradient-to-r from-primary-dark to-primary-light hover:filter hover:brightness-110"
      {...props}
    >
      {title}
    </CustomButton>
  );
};

export default PrimaryButton;
