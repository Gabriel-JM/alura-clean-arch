export class CPF {
  value: string
  #cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

  constructor(value: string) {
    if (!value || !this.#cpfRegex.test(value)) {
      throw new Error('Invalid CPF')
    }
    
    this.value = value
  }
}
