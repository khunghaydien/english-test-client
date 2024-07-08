import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDistance } from "date-fns";
import React from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface IExerciseCard {
  id: string;
  type: "published" | "draft";
  createdAt: Date;
  visited: number;
  submitted: number;
  description: string;
  name: string;
  className?: string;
  onClick: (id: string) => void;
}

function ExerciseCard({
  id,
  type,
  createdAt,
  visited,
  submitted,
  description,
  name,
  className,
  onClick,
}: IExerciseCard) {
  return (
    <Card
      className={cn(className, "cursor-pointer")}
      onClick={() => onClick(id)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bole">{name}</span>
          {type === "published" && <Badge>Published</Badge>}
          {type === "draft" && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex flex-center justify-between text-muted-foreground text-sm">
          {formatDistance(createdAt, new Date(), {
            addSuffix: true,
          })}
          {type === "published" && (
            <div className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{visited.toLocaleString()}</span>
              <FaWpforms className="text-muted-foreground" />
              <span>{submitted.toLocaleString()}</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {description || "No description"}
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
