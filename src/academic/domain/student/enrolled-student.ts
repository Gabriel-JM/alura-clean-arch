import { Event } from '@/shared/domain/events/event.ts'
import { EventTypes } from '@/shared/domain/events/event-types.ts'

export class EnrolledStudent implements Event {
  readonly #studentCPF: string
  readonly #when = new Date()

  constructor(studentCPF: string) {
    this.#studentCPF = studentCPF
  }

  get type(): EventTypes {
    return EventTypes.ENROLLED_STUDENT
  }

  get studentCPF() {
    return this.#studentCPF
  }

  get info(): Map<string, any> {
    return new Map([
      ['cpf', this.#studentCPF]
    ])
  }
  
  when() {
    return this.#when
  }
}
