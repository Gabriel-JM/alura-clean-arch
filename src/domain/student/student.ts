import { Email } from './email.ts'
import { CPF } from './cpf.ts'
import { Phone } from './phone.ts'

export class Student {
  #phones: Phone[] = []

  constructor(
    public name: string,
    public cpf: CPF,
    public email: Email,
    public password: string
  ) {}

  get phones() {
    return this.#phones
  }

  addPhone(ddd: string, number: string) {
    if (this.#phones.length === 2) {
      throw new Error('A Student can only have 2 phone numbers')
    }

    this.#phones.push(new Phone(ddd, number))
  }
}
