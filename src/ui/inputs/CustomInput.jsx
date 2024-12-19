import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const CustomInput = ({ required, ...props }) => {
  const { register, setValue, getValues, formState } = useFormContext();

  const isError = formState.errors[props.name];

  return (
    <TextField
      {...props}
      {...(register && { ...register(props.name, { required: required }) })}
      fullWidth={true}
      variant="outlined"
      error={!!isError} // This will trigger error styling
      helperText={isError ? isError.message || "This field is required" : ""} // Display error message
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#E5E7EB",
          },
          "&:hover fieldset": {
            borderColor: "#9CA3AF",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#818CF8",
          },
        },
      }}
    />
  );
};

export default CustomInput;
