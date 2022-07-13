export class Email {
  value: string
  #emailRegex = /^[\w._]+@[\w.-]+\.[a-zA-Z]{2,}$/
  
  constructor(value: string) {
    if (!value || !this.#emailRegex.test(value)) {
      throw new Error('Invalid E-Mail')
    }

    this.value = value
  }
}
