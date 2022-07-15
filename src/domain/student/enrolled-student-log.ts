import { EnrolledStudent } from './enrolled-student.ts'
import { Listener } from '../listener.ts'

export class EnrolledStudentLog extends Listener {
  on(event: EnrolledStudent) {
    console.log(
      `Student with this CPF ${event.studentCPF} enrolled at ${event.when()}`
    )
  }

  shouldProcess(event: EnrolledStudent) {
    return event instanceof EnrolledStudent
  }
}
