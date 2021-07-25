import { shuffle } from '../../../functions/arrays';
import questions from '../questionsBank';

export default (req, res) => {
  const getQuestionsId = questions.map((question) => question.id);
  return res.status(200).json(shuffle(getQuestionsId));
};
