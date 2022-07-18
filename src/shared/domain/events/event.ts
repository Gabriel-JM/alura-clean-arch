import { EventTypes } from './event-types.ts'

export interface Event {
  when(): Date
  get type(): EventTypes
  get info(): Map<string, any>
}
