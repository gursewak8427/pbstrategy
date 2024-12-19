import React from "react";
import { ArrowRight } from "lucide-react";

import CustomButton from "../../../ui/buttons/CustomButton";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Heading from "../Heading";
import ModalFooter from "../ModalFooter";
import { useFormContext } from "react-hook-form";

const keySkills = [
  "Content Creation",
  "Public Speaking",
  "Data Analysis",
  "Project Management",
  "Team Leadership",
  "Digital Marketing",
  "Business Development",
  "Community Building",
  "Strategic Planning",
  "Innovation Management",
];

const coreValues = [
  "Innovation",
  "Integrity",
  "Excellence",
  "Collaboration",
  "Growth",
  "Impact",
  "Authenticity",
  "Customer Focus",
  "Sustainability",
  "Leadership",
];

const Four = ({ ...props }) => {
  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const validateNext = async () => {
    return await trigger(["keySkills", "coreValues"]);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start">
      <div className="space-y-2 w-full">
        <p>What driven you professionally?</p>

        <div className="space-y-4 w-full mt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Key skills
            </label>
            <select
              {...register("keySkills", { required: "This field is required" })}
              className={`w-full p-2 focus:border-primary border border-gray-300 rounded-md focus:outline-none focus:ring-0 ${
                errors?.keySkills && "border-red-500"
              }`}
            >
              <option value="">Select Key Skill</option>
              {keySkills.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors?.keySkills && (
              <p className="text-red-500 text-xs">
                {errors?.keySkills?.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Core Values
            </label>
            <select
              {...register("coreValues", {
                required: "This field is required",
              })}
              className={`w-full p-2 focus:border-primary border border-gray-300 rounded-md focus:outline-none focus:ring-0 ${
                errors?.coreValues && "border-red-500"
              }`}
            >
              <option value="">Select Core Value</option>
              {coreValues.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors?.coreValues && (
              <p className="text-red-500 text-xs">
                {errors?.coreValues?.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <ModalFooter isNext={validateNext} next="Continue" {...props} />
    </div>
  );
};

export default Four;
