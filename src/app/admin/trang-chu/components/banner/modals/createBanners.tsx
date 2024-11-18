"use client";
import { Button } from "@/components/ui/button";
import { DialogContent, Dialog, DialogHeader, DialogFooter } from "@/components/ui/dialog";

import React, { useEffect, useState } from "react";

const CreateBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("IS OPEN", isOpen);
  }, []);
  const resetState = () => {
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="transition-opacity duration-300 ease-in-out opacity-0">
        <DialogHeader>
          <h2 className="text-lg font-semibold">Modal Title</h2>
        </DialogHeader>
        <p className="text-sm mb-4">This is the content of the modal. You can put any information here.</p>
        <DialogFooter>
          <button
            //   onClick={handleClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBanner;
