import { QuestionType } from "./QuestionType"

export { Question }

class Question {
    title: string = ""
    question: string =  ""
    isTrue: boolean = false
    answers: string[] = []
    correctAnswerIndex: number = -1
    type: QuestionType

    constructor(type: QuestionType, title: string, question: string, isTrue: boolean)
    constructor(type: QuestionType, title: string, answers: string[], correctAnswerIndex: number)
    constructor(type: QuestionType = QuestionType.TRUE_OR_FALSE, ...arr: any[]) {
        this.type = type
        if(type === QuestionType.TRUE_OR_FALSE) {
            this.title = arr[0]
            this.question = arr[1]
            this.isTrue = arr[2]
        } else if(type === QuestionType.ONE_CHOICE) {  
            this.title = arr[0]
            this.answers = arr[1]
            this.correctAnswerIndex = arr[2]
        }
    }
}