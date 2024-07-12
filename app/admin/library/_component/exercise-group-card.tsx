import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function ExerciseGroupCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Group Information</CardTitle>
        <CardDescription>
          Make changes to information group of Exercise. Click save when you're
          done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
}

export default ExerciseGroupCard;
