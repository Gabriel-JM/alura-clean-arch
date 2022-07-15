import { Student } from '@/academic/domain/student/student.ts'

export class Recommendation {
  #whoRecommended: Student
  #recommended: Student
  #date: Date

  constructor(whoRecommended: Student, recommended: Student) {
    this.#whoRecommended = whoRecommended
    this.#recommended = recommended
    this.#date = new Date()
  }
}
