import { StudentRepository } from '@/domain/student/student-repository.ts'
import { Student } from '@/domain/student/student.ts'
import postgres from 'x/postgresjs'

export class StudentPostgresjsRepository implements StudentRepository {
  #sql: postgres.Sql<any>

  constructor(sql: postgres.Sql<any>) {
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
  
  searchByCPF(cpf: string): Promise<Student> {
    throw new Error("Method not implemented.");
  }
  
  listAllStudents(): Promise<Student[]> {
    throw new Error("Method not implemented.");
  }
}
