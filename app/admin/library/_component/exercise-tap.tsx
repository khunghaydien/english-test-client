import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExerciseGroupCard from "./exercise-group-card";
import ExerciseCard from "./exercise-card";
export function Exercise() {
  return (
    <Tabs defaultValue="group" className="w-full">
      <TabsList className="grid w-[500px] grid-cols-2">
        <TabsTrigger value="group">Exercise Group Information</TabsTrigger>
        <TabsTrigger value="exercise">Exercise Information</TabsTrigger>
      </TabsList>
      <TabsContent value="group">
        <ExerciseGroupCard />
      </TabsContent>
      <TabsContent value="exercise">
        <ExerciseCard />
      </TabsContent>
    </Tabs>
  );
}
