import { Listener } from '@/shared/domain/events/listener.ts'
import { Event } from '@/shared/domain/events/event.ts'
import { EventTypes } from '@/shared/domain/events/event-types.ts'
import { Stamp } from '../domain/stamp/stamp.ts'
import { StampRepository } from '../domain/stamp/stamp-repository.ts'

export class GenerateBeginnerStudentStamp extends Listener {
  #stampRepository: StampRepository
  
  constructor(stampRepository: StampRepository) {
    super()
    this.#stampRepository = stampRepository
  }

  async on(event: Event): Promise<void> {
    const stamp = <Stamp> {
      cpfStudent: event.info.get('cpf'),
      name: 'Beginner'
    }

    await this.#stampRepository.add(stamp)
  }

  shouldProcess(event: Event): boolean {
    return event.type === EventTypes.ENROLLED_STUDENT
  }
}
