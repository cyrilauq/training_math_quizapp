import { Question } from '@/modules/questions/Question'
import { QuestionType } from './questions/QuestionType'

export { questions }


let questions = [
    new Question(
        QuestionType.TRUE_OR_FALSE,
        "Qu'est-ce qu'un graphe orienté?",
        "Le graphe \"G\" est-il un ensemble de sommet noté \"V\" et un ensemble d'arrêtes notées \"E\"?",
        true),
    new Question(
        QuestionType.ONE_CHOICE,
        "Qu'est-ce qu'un graphe orienté?",
        [
            "Le graphe \"G\" est-il un ensemble de sommet noté \"V\" et un ensemble d'arrêtes notées \"E\"?",
            "Un chat"
        ],
        0)
]