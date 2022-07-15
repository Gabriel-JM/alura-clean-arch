import { Student } from '@/academic/domain/student/student.ts'

export interface SendEmail {
  sendTo(student: Student): Promise<void>
}
