import { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import { useRouter } from 'next/dist/client/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [questionsId, setQuestionsId] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const getQuestionsId = async () => {
    const res = await fetch(`${BASE_URL}/quiz`);
    const ids = await res.json();
    setQuestionsId(ids);
  };

  const loadQuestion = async (id: number) => {
    const res = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await res.json();
    const newQuestion = QuestionModel.createFromObject(json);
    setQuestion(newQuestion);
  };

  useEffect(() => {
    getQuestionsId();
  }, []);

  useEffect(() => {
    questionsId.length > 0 && loadQuestion(questionsId[0]);
  }, [questionsId]);

  const answeredQuestion = (answeredQuestion: QuestionModel) => {
    setQuestion(answeredQuestion);
    const correct = answeredQuestion.correct;
    setCorrectAnswers(correctAnswers + (correct ? 1 : 0));
  };

  const getNextQuestionId = () => {
    const nextIndex = questionsId.indexOf(question.id) + 1;
    return questionsId[nextIndex];
  };

  const nextStep = () => {
    const nextId = getNextQuestionId();
    nextId ? goToNextQuestion(nextId) : finish();
  };

  const goToNextQuestion = (nextId: number) => {
    loadQuestion(nextId);
  };

  const finish = () => {
    router.push({
      pathname: '/results',
      query: {
        total: questionsId.length,
        corrects: correctAnswers,
      },
    });
  };

  return question ? (
    <Quiz
      question={question}
      last={getNextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      nextStep={nextStep}
    />
  ) : (
    false
  );
}
