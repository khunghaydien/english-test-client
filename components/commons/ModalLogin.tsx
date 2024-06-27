"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

function ModalLogin() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"}>Sign-in</Button>
      </DialogTrigger>
      <DialogContent>
        Login
      </DialogContent>
    </Dialog>
  );
}

export default ModalLogin;
