import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';

function CustomModal({ maxWidth, show, onClose, children }) {

    const handleClose = () => {
        onClose();
    }

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-[99999]" onClose={handleClose} >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto" >
                    <div className="flex min-h-full items-center justify-center p-4 text-center" >
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className={`w-full ${!maxWidth ? 'max-w-md' : `${maxWidth}`} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-4xl transition-all`} >
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CustomModal