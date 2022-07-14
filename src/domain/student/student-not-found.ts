export class StudentNotFound extends Error {
  constructor(cpf: string) {
    super(`Student not found with this CPF: ${cpf}`)
  }
}
