import { shuffle } from '../../../functions/arrays';
import questions from '../questionsBank';

const Quiz = (req, res) => {
  const getQuestionsId = questions.map((question) => question.id);
  return res.status(200).json(shuffle(getQuestionsId));
};

export default Quiz;
