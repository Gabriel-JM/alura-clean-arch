import { StudentRepository } from '@/domain/student/student-repository.ts'
import { StudentBuilder } from '@/domain/student/student-factory.ts'
import { EnrollStudentDTO } from './enroll-student-dto.ts'

export class EnrollStudent {
  #studentRepository: StudentRepository

  constructor(studentRepository: StudentRepository) {
    this.#studentRepository = studentRepository
  }

  async execute(data: EnrollStudentDTO) {
    const student = new StudentBuilder()
      .withNameCpfEmail(data.name, data.cpf, data.email)
      .build()

    await this.#studentRepository.enroll(student)
  }
}
