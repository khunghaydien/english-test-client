import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import React from "react";
import { formatDistance } from "date-fns";

export interface IChapterCard {
  id: string;
  type: "published" | "draft";
  createdAt: Date;
  visited: number;
  submitted: number;
  description: string;
  name: string;
}

function ChapterCard({
  id,
  type,
  createdAt,
  visited,
  submitted,
  description,
  name,
}: IChapterCard) {
  return (
    <Card className="w-[300px]">
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

export default ChapterCard;
