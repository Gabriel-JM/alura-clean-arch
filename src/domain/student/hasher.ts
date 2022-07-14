export interface Hasher {
  hash(text: string): string
  validateHash(hash: string, text: string): boolean
}
