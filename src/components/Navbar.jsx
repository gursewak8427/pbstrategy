import CustomButton from "../ui/buttons/CustomButton";
import Logo from "./Logo";
import { useState } from "react";
import OnBoardingMain from "./onboarding/OnBoardingMain";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-gray-100 border-b border-b-gray-400 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Get Started Button */}
          <CustomButton onClick={() => setOpen(true)}>Get Started</CustomButton>
        </div>
      </nav>

      <OnBoardingMain open={open} onClose={handleClose} />
    </>
  );
}
