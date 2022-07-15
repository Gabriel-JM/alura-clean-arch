import { StudentRepository } from '@/domain/student/student-repository.ts'
import { StudentBuilder } from '@/domain/student/student-factory.ts'
import { EventPublisher } from '@/domain/event-publisher.ts'
import { EnrolledStudent } from '@/domain/student/enrolled-student.ts'
import { EnrollStudentDTO } from './enroll-student-dto.ts'

export class EnrollStudent {
  #studentRepository: StudentRepository
  #eventPublisher: EventPublisher

  constructor(
    studentRepository: StudentRepository,
    eventPublisher: EventPublisher
  ) {
    this.#studentRepository = studentRepository
    this.#eventPublisher = eventPublisher
  }

  async execute(data: EnrollStudentDTO) {
    const student = new StudentBuilder()
      .withNameCpfEmail(data.name, data.cpf, data.email)
      .build()

    await this.#studentRepository.enroll(student)

    this.#eventPublisher.publish(new EnrolledStudent(student.cpf.value))
  }
}
