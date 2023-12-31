import { Quiz } from '../models/quizz.model';
import { Question } from '../models/question.model';
import { StatQuizz } from 'src/models/quizz.stat.model';

export const QUESTION_ACTOR: Question = {
    id: '1',
    label: 'Quel est le président actuel de la France ?',
    answers: [
        {
            value: 'Francis Ngannou',
            isCorrect: false,
        },
        {
            value: 'Stevie Wonder',
            isCorrect: false,
        },
        {
            value: 'Emmanuel Macron',
            isCorrect: true,
        },
        {
            value: 'Vladimir Poutine',
            isCorrect: false,
        }
    ]
};

export const QUESTION_US: Question = {
    id: '2',
    label: 'Qui était le président des États-Unis en 2020 ?',
    answers: [
        {
            value: 'Joe Biden',
            isCorrect: false,
        },
        {
            value: 'Barack Obama',
            isCorrect: false,
        },
        {
            value: 'Donald Trump',
            isCorrect: true,
        },
        {
            value: 'George W. Bush',
            isCorrect: false,
        }
    ]
};

export const QUESTION_FR: Question = {
    id: '2',
    label: 'Qui est la présdient de popo actuellement ?',
    answers: [
        {
            value: 'Joe Biden',
            isCorrect: false,
        },
        {
            value: 'Barack Obama',
            isCorrect: false,
        },
        {
            value: 'CAMINADA',
            isCorrect: true,
        },
        {
            value: 'George W. Bush',
            isCorrect: false,
        }
    ]
};

export const STAT_QUIZ: StatQuizz={
    timeResponses: []
}

export const QUIZ_LIST: Quiz[] = [
    {
      id: '1',
      name: 'Les présidents', // What's happening if I change this value..?
      theme: 'President',
      statQuiz : STAT_QUIZ,
      desc: 'Vous allez pouvoir tester vos connaissances sur les présidents actuels du monde !',
      questions: [QUESTION_ACTOR, QUESTION_US],
      difficulty: 4,
      hovered: undefined,
      image: 'https://i.f1g.fr/media/figaro/1194x804/2017/05/12/XVMcdc579d2-3705-11e7-bae0-7b37d71239eb.jpg'
    },
    {
      id: '2',
      name: 'Les films',
      theme: 'Cinema',
      statQuiz : STAT_QUIZ,
      desc: 'Les bons films beaufs des années 80, on les aime comme le bon vin !',
      questions: [],
      difficulty: 3,
      hovered: undefined,
      image: 'https://thesudercompany.com/wp-content/uploads/2020/01/brian-suder-guide-to-hollywood-1024x683.jpg'
    },
     {
      id: '3',
      name: 'Les Aliments',
      theme: 'Vie quotidienne',
      statQuiz : STAT_QUIZ,
      desc:'Quel est le poids de cet aliment ? Un quizz assez sympa à faire en famille',
      questions: [],
       difficulty: 1,
      hovered: undefined,
       image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/1709F/production/_109476349_foodwaste1pile_of_fruit.jpg'
  }

];

