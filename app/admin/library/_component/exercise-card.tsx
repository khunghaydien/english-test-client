import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFormik } from "formik";
import React from "react";

function ExerciseCard() {
  const formik = useFormik({
    initialValues: {
      construction: "",
      exerciseType: "",
      exercises: [],
    },
    onSubmit: () => {},
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Information</CardTitle>
        <CardDescription>
          Make changes to exercise information. Click save when you're done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2"></CardContent>
      <CardFooter className="flex justify-end">
        <Button>Save Exercise</Button>
      </CardFooter>
    </Card>
  );
}

export default ExerciseCard;
