import { Stamp } from './stamp.ts'

export interface StampRepository {
  add(stamp: Stamp): Promise<void>
  studentStampsByCPF(cpf: string): Promise<Stamp[]>
}
