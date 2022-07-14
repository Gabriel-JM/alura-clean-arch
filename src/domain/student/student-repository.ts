import { Student } from './student.ts'

export interface StudentRepository {
  enroll(): Promise<void>
  searchByCPF(cpf: string): Promise<Student>
  listAllStudents(): Promise<Student[]>
}
