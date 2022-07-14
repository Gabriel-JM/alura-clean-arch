import { Event } from '../event.ts'

export class EnrolledStudent implements Event {
  readonly #studentCPF: string
  readonly #when = new Date()

  constructor(studentCPF: string) {
    this.#studentCPF = studentCPF
  }

  get studentCPF() {
    return this.#studentCPF
  }
  
  when() {
    return this.#when
  }
}
