"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

function ModalRegister() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Sign-up</Button>
      </DialogTrigger>
      <DialogContent>
        Register
      </DialogContent>
    </Dialog>
  );
}

export default ModalRegister;
