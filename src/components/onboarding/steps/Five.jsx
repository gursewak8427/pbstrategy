import React from "react";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";

import CustomButton from "../../../ui/buttons/CustomButton";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Heading from "../Heading";
import ModalFooter from "../ModalFooter";
import { useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";
import CustomInput from "../../../ui/inputs/CustomInput";

const defaultMilestones = [
  { key: "isWeeklyContent", label: "Post weekly thought leadership content" },
  {
    key: "isBuildingNetwork",
    label: "Build network of industry professionals",
  },
];

const JourneyPlanner = ({ ...props }) => {
  const {
    register,
    setValue,
    watch,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  const validateNext = async () => {
    return await trigger(["smartGoals"]);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start">
      <div className="space-y-2 w-full">
        <p className="text-lg font-medium">Let's map out your journey</p>

        <div className="space-y-4 w-full mt-6">
          <div className="space-y-2 p-4 border-gray-300 border rounded">
            <CustomInput
              required={true}
              name="smartGoals"
              label="SMART Goals"
            />
          </div>

          <div className="space-y-2 p-4 border-gray-300 border rounded">
            <label className="text-sm font-medium text-gray-700">
              Key Milestones
            </label>
            <div className="space-y-2">
              {defaultMilestones.map((milestone) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...(register && { ...register(milestone.key) })}
                      name={milestone.key}
                      defaultChecked={getValues(milestone.key)}
                      sx={{
                        color: "#818CF8",
                        "&.Mui-checked": {
                          color: "#818CF8",
                        },
                      }}
                    />
                  }
                  label={milestone.label}
                  className="text-gray-600"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ModalFooter isNext={validateNext} next="Continue" {...props} />
    </div>
  );
};

export default JourneyPlanner;
