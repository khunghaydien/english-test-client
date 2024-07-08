"use client";
import React from "react";
import ChapterCard, { IChapterCard } from "./_component/chapter-card";
import ExerciseCard, { IExerciseCard } from "./_component/exercise-card";
import { useRouter } from "next/navigation";
const chapters: IChapterCard[] = [
  {
    name: "s",
    id: "1",
    type: "published",
    createdAt: new Date(),
    visited: 0,
    submitted: 0,
    description: "",
  },
  {
    name: "fsd",
    id: "2",
    type: "published",
    createdAt: new Date(),
    visited: 0,
    submitted: 0,
    description: "",
  },
  {
    name: "fsd",
    id: "3",
    type: "published",
    createdAt: new Date(),
    visited: 0,
    submitted: 0,
    description: "",
  },
  {
    name: "fsd",
    id: "4",
    type: "published",
    createdAt: new Date(),
    visited: 0,
    submitted: 0,
    description: "",
  },
];
function Library() {
  const router = useRouter();
  const handleExerciseClick = (id: string) => {
    router.push(`library/exercise/${id}`);
  };
  return (
    <div>
      Relative
      <div className="flex gap-4 flex-wrap flex-grow">
        {chapters.map(
          (
            {
              name,
              id,
              type,
              createdAt,
              visited,
              submitted,
              description,
            }: IChapterCard,
            index: number
          ) => (
            <ChapterCard
              key={index}
              name={name}
              id={id}
              type={type}
              createdAt={createdAt}
              visited={visited}
              submitted={submitted}
              description={description}
            />
          )
        )}
      </div>
      Exercise
      <div className="w-full">
        {chapters.map(
          (
            {
              name,
              id,
              type,
              createdAt,
              visited,
              submitted,
              description,
            }: IChapterCard,
            index: number
          ) => (
            <ExerciseCard
              key={index}
              name={name}
              id={id}
              type={type}
              createdAt={createdAt}
              visited={visited}
              submitted={submitted}
              description={description}
              className={"mb-1"}
              onClick={handleExerciseClick}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Library;
