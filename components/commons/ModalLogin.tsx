"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { SignIn } from "@clerk/nextjs";
import { Button } from "../ui/button";

function ModalLogin() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>Sign-in</Button>
      </DialogTrigger>
      <DialogContent>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
}

export default ModalLogin;
