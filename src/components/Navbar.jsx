import CustomModal from "../ui/CustomModal";
import CustomButton from "../ui/CustomButton";
import Logo from "./Logo";
import { useState } from "react";
import ModalHeading from "../ui/ModalHeading";

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <nav className="w-full bg-gray-100 border-b border-b-gray-400 px-4 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Get Started Button */}
                    <CustomButton onClick={()=>setOpen(true)}>Get Started</CustomButton>
                </div>
            </nav>

            <CustomModal show={open} onClose={handleClose}>
                <ModalHeading></ModalHeading>
                <div className="p-4">
                    <h2 className="text-3xl font-bold">Customize your website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis vel nunc fermentum pulvinar. Donec sed arcu vel nunc faucibus tristique.</p>
                </div>
                <CustomButton>Close</CustomButton>
            </CustomModal>
        </>
    )
}

