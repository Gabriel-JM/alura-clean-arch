import { describe, it } from 'std/bdd'
import { assertThrows } from 'std/asserts'
import { Student } from '@/domain/student/student.ts'
import { CPF } from '@/domain/student/cpf.ts'
import { Email } from '@/domain/student/email.ts'

describe('Student', () => {
  it('should throw an Error if is add more then two phone numbers to a student', () => {
    const sut = new Student(
      'any_name',
      new CPF('123.456.789-00'),
      new Email('any@email.com'),
      'any_password'
    )

    sut.addPhone('10', '12345678')
    sut.addPhone('10', '12345678')

    assertThrows(
      () => sut.addPhone('10', '123456789'),
      'A Student can only have 2 phone numbers'
    )
  })
})
