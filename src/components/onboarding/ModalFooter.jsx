import React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import PrimaryButton from "../../ui/buttons/PrimaryButton";

const ModalFooter = ({
  onPrevious,
  onNext,
  next: nextTitle,
  children,
  isNext = async () => {
    return true;
  },
}) => {
  return (
    <div
      className={`w-full flex items-center ${
        onPrevious ? "justify-between" : "justify-center"
      }`}
    >
      {onPrevious && (
        <IconButton onClick={onPrevious} variant="outlined">
          <ArrowLeft />
        </IconButton>
      )}
      {onNext && (
        <PrimaryButton
          title={nextTitle || "Next"}
          backIcon={<ArrowRight />}
          onClick={async () => (await isNext()) && onNext()}
        />
      )}
      {children}
    </div>
  );
};

export default ModalFooter;
