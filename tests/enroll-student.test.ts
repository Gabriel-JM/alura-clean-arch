import { describe, it } from 'std/bdd'
import {  } from 'std/asserts'
import { spy, assertSpyCall } from 'std/mock'
import { EnrollStudent } from '@/application/student/enroll-student.ts'

function makeSut() {
  const fakeStudentRepository: any = {
    enroll: spy(() => Promise.resolve())
  }
  const sut = new EnrollStudent(fakeStudentRepository)

  return {
    sut,
    fakeStudentRepository
  }
}

describe('EnrollStudent', () => {
  it('should call StudentRepository.enroll with correct values', async () => {
    const { sut, fakeStudentRepository } = makeSut()

    await sut.execute({
      name: 'any_name',
      cpf: '123.456.789-00',
      email: 'any@email.com',
      password: 'any_password'
    })

    assertSpyCall(fakeStudentRepository.enroll, 0)
  })
})
