import { Button } from "@mui/material";

export default function CustomButton({
  children,
  frontIcon,
  backIcon,
  className,
  ...props
}) {
  const defaultStyle =
    "!text-xs md:!text-lg !px-6 !py-3 !rounded-[40px] !bg-black hover:!bg-gray-700 !text-white flex items-center gap-2";

  return (
    <Button className={`${defaultStyle} ${className}`} {...props}>
      {frontIcon}
      {children && <span>{children}</span>}
      {backIcon}
    </Button>
  );
}
