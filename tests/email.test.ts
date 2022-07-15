import { describe, it } from 'std/bdd'
import { assertThrows, assertEquals } from 'std/asserts'
import { Email } from '@/academic/domain/student/email.ts'

describe('Email value object', () => {
  it('should not create invalid Emails', () => {
    assertThrows(() => new Email('any_invalid_email'), 'Invalid E-Mail')
  })

  it('should create an Email instance on success', () => {
    const email = new Email('any@email.com')

    assertEquals(email.value, 'any@email.com')
  })
})
