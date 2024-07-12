"use client";
import Exercise, { IExercise } from "@/components/exercise";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
const exercise: IExercise = {
  id: "1",
  construction: "",
  type: "multiple-choice",
  questions: [
    {
      id: "1",
      questionNumber: 1,
      question: "...you a teacher? B: Yes, I...",
      answers: [
        {
          id: "1",
          value: "A",
          label: "Are/is",
          isCorrect: false,
        },
        {
          id: "2",
          value: "B",
          label: "Are/am",
          isCorrect: false,
        },
        {
          id: "3",
          value: "C",
          label: "Is/am",
          isCorrect: false,
        },
        {
          id: "4",
          value: "D",
          label: "Is/are",
          isCorrect: false,
        },
      ],
    },
    {
      id: "2",
      questionNumber: 2,
      question: "...you a teacher? B: Yes, I...",
      answers: [
        {
          id: "11",
          value: "A",
          label: "Are/is",
          isCorrect: false,
        },
        {
          id: "22",
          value: "B",
          label: "Are/am",
          isCorrect: false,
        },
        {
          id: "33",
          value: "C",
          label: "Is/am",
          isCorrect: false,
        },
        {
          id: "44",
          value: "D",
          label: "Is/are",
          isCorrect: false,
        },
      ],
    },
    {
      id: "3",
      questionNumber: 3,
      question: "...you a teacher? B: Yes, I...",
      answers: [
        {
          id: "111",
          value: "A",
          label: "Are/is",
          isCorrect: false,
        },
        {
          id: "222",
          value: "B",
          label: "Are/am",
          isCorrect: false,
        },
        {
          id: "333",
          value: "C",
          label: "Is/am",
          isCorrect: false,
        },
        {
          id: "444",
          value: "D",
          label: "Is/are",
          isCorrect: false,
        },
      ],
    },
  ],
};
function page(context: { params: Params }) {
  return (
    <div>
      {context.params.id}
      <Exercise
        construction={exercise.construction}
        type={exercise.type}
        questions={exercise.questions}
        id={exercise.id}
      />
    </div>
  );
}

export default page;
