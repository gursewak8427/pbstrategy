import React, { useEffect, useState } from "react";
import { RefreshCcwIcon } from "lucide-react";
import getAIResponse from "../../../services/ai.service";
import CustomButton from "../../../ui/buttons/CustomButton";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Heading from "../Heading";
import ModalFooter from "../ModalFooter";
import { getSystemPrompt } from "../../../utils/prompt";
import { STORAGE_KEY } from "../../../utils/index";
import { extractBrandStatement } from "../../../utils/parseResponse";
import { useFormContext } from "react-hook-form";
import { IconButton } from "@mui/material";

const Six = ({ ...props }) => {
  const { register, setValue, watch, getValues } = useFormContext();

  const [brandStatement, setBrandStatement] = useState("");
  const [loading, setLoading] = useState(true);

  const generateBrandStatement = async () => {
    setLoading(true);

    let savedData = localStorage.getItem(STORAGE_KEY);
    delete savedData?.brandStatement;

    let prompt = `user input : ${savedData}`;

    let response = await getAIResponse(prompt, getSystemPrompt());
    let _brandStatement = extractBrandStatement(response);
    if (_brandStatement) {
      setBrandStatement(_brandStatement);
      setValue("brandStatement", _brandStatement);
    } else {
      alert("Brand Statement not generated");
    }
    setLoading(false);
    localStorage.setItem("form-changed", false);
  };

  useEffect(() => {
    let formChanged = localStorage.getItem("form-changed");
    if (getValues("brandStatement") && formChanged != "true") {
      setBrandStatement(getValues("brandStatement"));
      setLoading(false);
    } else {
      generateBrandStatement();
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start">
      <div className="space-y-2 w-full">
        <p>Craft your professional narrative</p>

        <div className="space-y-4 w-full mt-6">
          <div className="bg-primary bg-opacity-15 p-4 rounded-md">
            <div className="flex items-center gap-1 mb-3">
              <p className="text-sm text-primary font-bold tracking-wider">
                Preview
              </p>
              <IconButton onClick={generateBrandStatement}>
                <RefreshCcwIcon
                  className={`w-4 h-4 ${loading && "animate-spin"}`}
                />
              </IconButton>
            </div>
            {loading ? (
              <div className="flex flex-col gap-3">
                <div className="w-3/5 h-5 bg-primary bg-opacity-20"></div>
                <div className="w-2/4 h-5 bg-primary bg-opacity-20"></div>
                <div className="w-2/5 h-5 bg-primary bg-opacity-20"></div>
                <div className="w-5/6 h-5 bg-primary bg-opacity-20"></div>
              </div>
            ) : (
              brandStatement && (
                <div dangerouslySetInnerHTML={{ __html: brandStatement }}></div>
              )
            )}
            {/* <p className="text-gray-700">
              "I am a{" "}
              <span className="font-medium text-gray-900">strategic</span> HR
              professional who excels in{" "}
              <span className="font-medium text-gray-900">
                employee engagement
              </span>
              , committed to{" "}
              <span className="font-medium text-gray-900">innovation</span>, and
              known for{" "}
              <span className="font-medium text-gray-900">
                driving transformative change
              </span>
              ."
            </p> */}
          </div>
        </div>
      </div>

      <ModalFooter next="Continue" {...props} />
    </div>
  );
};

export default Six;
