import { shuffle } from '../functions/arrays';
import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #asking: string;
  #answers: AnswerModel[];
  #correct: boolean;
  //*   #answered: boolean;

  constructor(
    id: number,
    asking: string,
    answers: AnswerModel[],
    correct = false
  ) {
    this.#id = id;
    this.#asking = asking;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get asking() {
    return this.#asking;
  }

  get answers() {
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }

  get notAnswered() {
    return !this.answered;
  }

  get answered() {
    for (const answer of this.#answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  answerWith(index: number): QuestionModel {
    const isRightAnswer = this.#answers[index]?.correct;
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const shouldReveal = selectedAnswer || answer.correct;
      return shouldReveal ? answer.reveal() : answer;
    });
    return new QuestionModel(this.#id, this.#asking, answers, isRightAnswer);
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#asking,
      shuffledAnswers,
      this.#correct
    );
  }

  static createFromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map((answer) =>
      AnswerModel.createFromObject(answer)
    );
    return new QuestionModel(obj.id, obj.asking, answers, obj.correct);
  }

  toObject() {
    return {
      id: this.#id,
      asking: this.#asking,
      answered: this.answered,
      correct: this.#correct,
      answers: this.#answers.map((answer) => answer.toObject()),
    };
  }
}
