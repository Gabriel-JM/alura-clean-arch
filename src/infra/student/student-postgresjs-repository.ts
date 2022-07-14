import postgres from 'x/postgresjs'
import { StudentRepository } from '@/domain/student/student-repository.ts'
import { Student } from '@/domain/student/student.ts'
import { StudentBuilder } from '@/domain/student/student-factory.ts'
import { StudentNotFound } from '@/domain/student/student-not-found.ts'

export class StudentPostgresjsRepository implements StudentRepository {
  #sql: postgres.Sql<Student & Record<string, unknown>>

  constructor(sql: postgres.Sql<Student & Record<string, unknown>>) {
    this.#sql = sql
  }
  
  async enroll(student: Student): Promise<void> {
    const { name, email, cpf } = student
    
    await this.#sql`
      INSERT INTO students VALUES (${
        this.#sql({ name, email, cpf }, 'name', 'email', 'cpf')
      })
    `

    for (const { ddd, number } of student.phones) {
      await this.#sql`
        INSERT INTO phones VALUES (${
          this.#sql({ ddd, number }, 'ddd', 'number')
        })
      `
    }
  }
  
  async searchByCPF(cpf: string): Promise<Student> {
    const [studentData] = await this.#sql`
      SELECT id, name, email FROM student WHERE cpf = ${cpf}
    `

    if (!studentData) {
      throw new StudentNotFound(cpf)
    }

    const builder = new StudentBuilder()
      .withNameCpfEmail(studentData.name, cpf, studentData.email)

    const phones = await this.#sql`
      SELECT ddd, number FROM phones WHERE student_id = ${studentData.id}
    `

    for (const phone of phones) {
      builder.withPhone(phone.ddd, phone.number)
    }

    return builder.build()
  }
  
  async listAllStudents(): Promise<Student[]> {
    const students = await this.#sql`SELECT id, name, cpf, email FROM student`

    return Promise.all(students.map(async student => {
      const builder = new StudentBuilder()
        .withNameCpfEmail(student.name, student.cpf, student.email)

      const phones = await this.#sql`
        SELECT ddd, number FROM phones WHERE student_id = ${student.id}
      `

      for (const phone of phones) {
        builder.withPhone(phone.ddd, phone.number)
      }

      return builder.build()
    }))
  }
}
