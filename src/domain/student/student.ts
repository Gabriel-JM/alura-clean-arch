import { Email } from './email.ts'
import { CPF } from './cpf.ts'
import { Phone } from './phone.ts'

export class Student {
  #phones: Phone[] = []

  constructor(
    public name: string,
    public cpf: CPF,
    public email: Email
  ) {}

  get phones() {
    return this.#phones
  }

  addPhone(ddd: string, number: string) {
    this.#phones.push(new Phone(ddd, number))
  }
}
