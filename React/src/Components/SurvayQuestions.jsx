import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {v4 as uuidv4} from "uuid";
import QuestionEditor from "./QuestionEditor";

export default function SurvayQuestion({survay, onSurvayUpdate}) {
  const [model, setModel] = useState({ ...survay });

  const addQuestion = (index) => {
    index = index !== undefined ? index : model.questions.length;
    model.questions.splice(index,0,{
      id: uuidv4(),
      type: "text",
      question: "",
      description: "",
      data: {},
    })
    setModel({
      ...model,
      questions: [
        ...model.questions
      ],
    });
  };
  const questionChange = (question) => {
    if (!question) return;
    const newQuestion = model.questions.map((q) => {
      if (q.id == question.id) return { ...question };
      return q;
    });setModel({
      ...model,
      questions:newQuestion
    })
  };
  const deleteQuestion = (question) => {
    const newQuestions = model.questions.filter((q) => q.id !== question.id);
    setModel({
      ...model,
      questions:newQuestions
    });
  };
  useEffect(() => {
    onSurvayUpdate(model);
  },[model]);
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-2x1 font-bold">Questions</h3>
        <button
          className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
          type="button"
          onClick={() => addQuestion(0)}
        >
          <AiOutlinePlusCircle />
          Add Question
        </button>
      </div>
      {model.questions.length ? (
        model.questions.map((q, ind) => (
          <QuestionEditor
            key={q.id}
            index={ind}
            question={q}
            questionChange={questionChange}
            addQuestion={addQuestion}
            deleteQuestion={deleteQuestion}
          />
        ))
      ) : (
        <div className="text-gray-400 text-center py-4">
          You don`t Have Any Question created
        </div>
      )}
    </>
  );
}
