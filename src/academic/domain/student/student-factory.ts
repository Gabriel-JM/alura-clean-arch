import { CPF } from '@/shared/domain/cpf.ts'
import { Email } from './email.ts'
import { Student } from './student.ts'

export class StudentBuilder {
  #student?: Student

  withNameCpfEmail(name: string, cpf: string, email: string) {
    this.#student = new Student(name, new CPF(cpf), new Email(email), '')
    return this
  }

  withPhone(ddd: string, number: string) {
    this.#student?.addPhone(ddd, number)
    return this
  }

  build() {
    return this.#student!
  }
}
