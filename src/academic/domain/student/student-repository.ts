import { Student } from './student.ts'

export interface StudentRepository {
  enroll(student: Student): Promise<void>
  searchByCPF(cpf: string): Promise<Student>
  listAllStudents(): Promise<Student[]>
}
