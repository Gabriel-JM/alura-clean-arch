import { describe, it } from 'std/bdd'
import { assertEquals, assertThrows } from 'std/asserts'
import { CPF } from '@/domain/student/cpf.ts'

describe('CPF value object', () => {
  it('should not create an invalid CPF', () => {
    assertThrows(() => new CPF('invalid_cpf'), 'Invalid CPF')
  })

  it('should create a CPF instance on success', () => {
    const cpf = new CPF('123.456.789-01')

    assertEquals(cpf.value, '123.456.789-01')
  })
})
