import React from "react";
import { useFormContext } from "react-hook-form";

import ModalFooter from "../ModalFooter";

const roles = [
  "HR Professional",
  "Marketing Manager",
  "Business Developer",
  "Software Engineer",
  "Product Manager",
];

const strengths = [
  "Leadership",
  "Communication",
  "Strategy",
  "Innovation",
  "Problem Solving",
  "Team Building",
];

const Third = ({ ...props }) => {
  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
    setError,
  } = useFormContext();

  // Watch for role and strengths values
  const selectedRole = watch("role");
  const selectedStrengths = watch("strengths");

  const handleStrengthToggle = (strength) => {
    let updatedList = [...selectedStrengths];
    updatedList = updatedList.includes(strength)
      ? updatedList.filter((s) => s !== strength)
      : [...updatedList, strength];

    setValue("strengths", updatedList.slice(0, 3));
  };

  const validateNext = async () => {
    if (selectedStrengths?.length < 3) {
      setError("strengths", { message: "Minimum 3 strengths are required." });
      return false;
    } else {
      setError("strengths", false);
    }

    return await trigger(["role"]);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start">
      <div className="space-y-2 w-full">
        <p>Let's start with your professional foundation</p>

        <div className="space-y-4 w-full mt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              What is your role?
            </label>
            <select
              {...register("role", { required: "This field is required" })}
              className={`w-full p-2 focus:border-primary border border-gray-300 rounded-md focus:outline-none focus:ring-0 ${
                errors?.role && "border-red-500"
              }`}
            >
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors?.role && (
              <p className="text-red-500 text-xs">{errors?.role?.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Select your top three strengths
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  onClick={() => handleStrengthToggle(strength)}
                  className={`flex items-center gap-2 p-3 border rounded-md cursor-pointer ${
                    selectedStrengths.includes(strength)
                      ? "bg-primary-light bg-opacity-20"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <div
                    className={`w-4 h-4 border rounded-sm flex items-center justify-center ${
                      selectedStrengths.includes(strength)
                        ? "bg-primary border-primary"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedStrengths.includes(strength) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm">{strength}</span>
                </div>
              ))}
            </div>
            {errors?.strengths && (
              <p className="text-red-500 text-xs">
                {errors?.strengths?.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <ModalFooter isNext={() => validateNext()} next="Continue" {...props} />
    </div>
  );
};

export default Third;
