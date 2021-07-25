import questions from '../questionsBank';

const questionsId = (req, res) => {
  const id = +req.query.id;

  const uniqueQuestion = questions.filter((question) => question.id === id);

  if (uniqueQuestion.length === 1) {
    const selectedQuestion = uniqueQuestion[0].shuffleAnswers();
    return res.status(200).json(selectedQuestion.toObject());
  } else {
    return res.status(204).send();
  }
};

export default questionsId;
