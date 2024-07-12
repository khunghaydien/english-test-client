import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface IMultipleChoiceAnswer {
  id: string;
  value: string;
  label: string;
  isCorrect: boolean;
}

interface IMultipleChoiceExercise {
  id: string;
  questionNumber: number;
  question: string;
  answers: IMultipleChoiceAnswer[];
}

export interface IExercise {
  id: string;
  construction: string;
  type: "multiple-choice";
  //...
  questions: IMultipleChoiceExercise[];
}

const Exercise = ({ construction, type, questions }: IExercise) => {
  const onValueChange = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div>{construction}</div>
      <div>{type}</div>
      <div className="flex flex-col gap-6">
        {questions.map(
          ({ question, answers, questionNumber }, questionIndex) => (
            <div key={questionIndex} className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1">
                <div className="flex items-center justify-center border border-blue-500 rounded-full w-[24px] h-[24px]">
                  {questionNumber}
                </div>
                <div>{question}</div>
              </div>
              <RadioGroup
                defaultValue="comfortable"
                onValueChange={onValueChange}
                className="answer flex items-center w-full box-border gap-6 "
              >
                {answers.map(({ label, value }, answerIndex) => (
                  <div
                    className="flex items-center space-x-2 flex-grow"
                    key={answerIndex}
                  >
                    <RadioGroupItem
                      value={value}
                      id={`${questionIndex}-${answerIndex}`}
                    />
                    <label
                      htmlFor={`${questionIndex}-${answerIndex}`}
                      className="cursor-pointer"
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default Exercise;
