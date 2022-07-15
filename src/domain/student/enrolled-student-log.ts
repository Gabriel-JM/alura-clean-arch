import { EnrolledStudent } from './enrolled-student.ts'

export class EnrolledStudentLog {
  on(event: EnrolledStudent) {
    console.log(
      `Student with this CPF ${event.studentCPF} enrolled at ${event.when()}`
    )
  }
}
