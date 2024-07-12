"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Exercise } from "../_component/exercise-tap";

function page() {
  return (
    <div>
      <Button>Create Exercise</Button>
      <Exercise />
    </div>
  );
}

export default page;
