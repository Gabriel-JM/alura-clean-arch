import { Student } from '@/domain/student/student.ts'

export interface SendEmail {
  sendTo(student: Student): Promise<void>
}
