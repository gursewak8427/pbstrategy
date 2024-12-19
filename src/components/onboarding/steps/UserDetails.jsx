"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";

import CustomInput from "../../../ui/inputs/CustomInput";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import IconLogo from "../IconLogo";
import Heading from "../Heading";
import ModalFooter from "../ModalFooter";
import { useFormContext } from "react-hook-form";

const Intro = ({ ...props }) => {
  const {
    register,
    setValue,
    setError,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const validateNext = async () => {
    return await trigger(["fullname", "email", "linkedInUrl"]);
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6 items-center justify-start p-4">
      <IconLogo />
      <Heading>Enter Details</Heading>

      <div className="w-full space-y-4">
        <CustomInput required={true} name="fullname" label="Your Full Name" />
        <CustomInput
          required={true}
          name="email"
          label="Your Email Address"
          type="email"
        />
        <CustomInput
          required={true}
          name="linkedInUrl"
          label="Your LinkedIn URL"
        />

        <FormControlLabel
          control={
            <Checkbox
              {...(register && {
                ...register("isEmailUpdates"),
              })}
              name={"isEmailUpdates"}
              defaultChecked={getValues("isEmailUpdates")}
              sx={{
                color: "#818CF8",
                "&.Mui-checked": {
                  color: "#818CF8",
                },
              }}
            />
          }
          label="Receive updates via email"
          className="text-gray-600"
        />
      </div>

      <ModalFooter
        isNext={() => validateNext()}
        next="Start Assessment"
        {...props}
      />
    </div>
  );
};

export default Intro;
