export class Phone {
  ddd: string
  number: string

  constructor(ddd: string, number: string) {
    if (!ddd || !(/^\d{2}$/).test(ddd)) {
      throw new Error('Invalid DDD')
    }

    if (!number || !(/^\d{8,9}$/).test(number)) {
      throw new Error('Invalid phone number')
    }

    this.ddd = ddd
    this.number = number
  }
}
