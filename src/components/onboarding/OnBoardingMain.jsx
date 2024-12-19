import React, { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import ModalHeading from "../../ui/ModalHeading";
import CustomModal from "../../ui/CustomModal";
import Intro from "./steps/Intro";
import UserDetails from "./steps/UserDetails";
import Third from "./steps/Third";
import Four from "./steps/Four";
import Five from "./steps/Five";
import Six from "./steps/Six";
import Seven from "./steps/Seven";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { STORAGE_KEY } from "../../utils/index";

const Headings = {
  1: "",
  2: "",
  3: "Role & Strengths",
  4: "Skills & Values",
  5: "Brand Roadmap",
  6: "Your Brand Statement",
  7: "Summary & Next Steps",
};

const OnBoardingMain = ({ open, onClose }) => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    defaultValues: {
      strengths: [], // Initialize strengths as an empty array
    },
  });
  const { watch, setValue, handleSubmit, register } = methods;

  useEffect(() => {
    const subscription = watch((data) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

      localStorage.setItem("form-changed", true);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  // Rehydrate form data on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  useEffect(() => {
    if (open) setStep(1);
  }, [open]);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const renderStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return <Intro onNext={goToNextStep} />;
      case 2:
        return (
          <UserDetails onNext={goToNextStep} onPrevious={goToPreviousStep} />
        );
      case 3:
        return <Third onNext={goToNextStep} onPrevious={goToPreviousStep} />;
      case 4:
        return <Four onNext={goToNextStep} onPrevious={goToPreviousStep} />;
      case 5:
        return <Five onNext={goToNextStep} onPrevious={goToPreviousStep} />;
      case 6:
        return <Six onNext={goToNextStep} onPrevious={goToPreviousStep} />;
      case 7:
        return <Seven onPrevious={goToPreviousStep} />;
      default:
        return null;
    }
  };

  return (
    <CustomModal maxWidth={"max-w-full md:max-w-[45%]"} show={open} onClose={onClose}>
      <ModalHeading onClose={onClose}>{Headings[step]}</ModalHeading>
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {renderStep(step)}
            </form>
          </FormProvider>
        </div>
      </div>
    </CustomModal>
  );
};

export default OnBoardingMain;
