import { Hasher } from '@/academic/domain/student/hasher.ts'
import { hashSync, compareSync } from 'x/bcrypt'

export class BcryptHasher implements Hasher {
  hash(text: string): string {
    return hashSync(text)
  }

  validateHash(hash: string,text: string): boolean {
    return compareSync(text, hash)
  }
}
