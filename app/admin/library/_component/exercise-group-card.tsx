import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CREATE_EXERCISE } from "@/graphql/mutation/exercise";
import { useMutation } from "@apollo/client";
import React from "react";

function ExerciseGroupCard() {
  const [createExercise, { loading, error, data }] = useMutation(CREATE_EXERCISE)
  const handleCreateExercise = () => {
    createExercise({
      variables: {
        name: 'Test 1',
        construction: "Choose the correct present simple forms of 'to be' for the gaps below",
        exerciseType: ['CUSTOM', 'LISTENING'],
        level: 'ELEMENTARY'
      }
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Group Information</CardTitle>
        <CardDescription>
          Make changes to information group of Exercise. Click save when you're
          done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleCreateExercise}>Save changes</Button>
      </CardFooter>
    </Card>
  );
}

export default ExerciseGroupCard;
