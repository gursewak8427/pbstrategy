import React from "react";
import {
  Download,
  CircleDot,
  Users,
  DownloadCloud,
  DownloadIcon,
} from "lucide-react";

import CustomButton from "../../../ui/buttons/CustomButton";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Heading from "../Heading";
import ModalFooter from "../ModalFooter";

const SummarySteps = ({ ...props }) => {
  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start">
      <div className="space-y-2 w-full">
        <p className="">Your personal brand strategy is ready!</p>

        <div className="space-y-4 w-full mt-6">
          <div className="p-4 border border-gray-200 rounded-md flex items-start gap-3">
            <CircleDot className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium">Action Items</p>
              <p className="text-sm text-gray-600">
                Update your LinkedIn profile with your new brand statement
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-200 rounded-md flex items-start gap-3">
            <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-medium">Content Strategy</p>
              <p className="text-sm text-gray-600">
                Share weekly insights about employee engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      <ModalFooter {...props}>
        <PrimaryButton
          title={"Download Strategy"}
          frontIcon={<DownloadIcon />}
        />
      </ModalFooter>
    </div>
  );
};

export default SummarySteps;
