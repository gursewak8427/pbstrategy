import { Button } from "@mui/material";

export default function CustomButton({ children, ...props }) {
    return (<Button className="!px-6 !py-3 !rounded-[40px] !bg-black hover:!bg-gray-700 !text-white" {...props}>
        {children}
    </Button>)
}