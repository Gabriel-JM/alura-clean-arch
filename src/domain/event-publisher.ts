import { Listener } from './listener.ts'
import { Event } from './event.ts'

export class EventPublisher {
  #listeners: Listener[] = []

  add(listener: Listener) {
    this.#listeners.push(listener)
  }

  publish(event: Event) {
    for (const listener of this.#listeners) {
      listener.process(event)
    }
  }
}
