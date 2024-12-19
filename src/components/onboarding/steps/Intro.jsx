import React from "react";

import { ArrowRight } from "lucide-react";

import CustomButton from "../../../ui/buttons/CustomButton";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Heading from "../Heading";
import IconLogo from "../IconLogo";
import ModalFooter from "../ModalFooter";

const Intro = ({ ...props }) => {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-start p-4 text-center">
      <IconLogo />
      <div className="space-y-2">
        <Heading>Unleash Your Personal Brand Potential!</Heading>
        <p className="text-sm text-gray-600 mt-2">
          Ever wonder how your personal brand is perceived? Take our quick
          assessment to uncover insights that will help you refine your personal
          and professional image.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 items-center w-full">
        <span>🔍 Get Tailored Branding Tips</span>
        <span>📊 Instantly Analyze Your Online Presence</span>
      </div>

      <ModalFooter next="Start Assessment" {...props} />
    </div>
  );
};

export default Intro;
