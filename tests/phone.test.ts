import { describe, it } from 'std/bdd'
import { assertEquals, assertThrows } from 'std/asserts'
import { Phone } from '@/phone.ts'

describe('Phone value object', () => {
  it('should not a phone with invalid DDD', () => {
    assertThrows(() => new Phone('invalid_ddd', '12345678'), 'Invalid DDD')
  })

  it('should not a phone with invalid number', () => {
    assertThrows(() => new Phone('10', 'invalid_number'), 'Invalid phone number')
  })

  it('should create a Phone instance on success', () => {
    const phone = new Phone('10', '123456789')

    assertEquals(phone.ddd, '10')
    assertEquals(phone.number, '123456789')
  })
})
