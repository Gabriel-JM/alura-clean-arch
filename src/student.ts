import { Email } from './email.ts'
import { CPF } from './cpf.ts'
import { Phone } from './phone.ts'

export class Student {
  name: string
  cpf: CPF
  email: Email
  phones: Phone[]

  addPhone(ddd: string, number: string) {
    this.phones.push(new Phone(ddd, number))
  }
}
