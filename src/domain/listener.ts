import { Event } from './event.ts'

export abstract class Listener {
  process(event: Event) {
    if (this.shouldProcess(event)) {
      this.on(event)
    }
  }

  abstract on(event: Event): void | Promise<void>

  abstract shouldProcess(event: Event): boolean
}
