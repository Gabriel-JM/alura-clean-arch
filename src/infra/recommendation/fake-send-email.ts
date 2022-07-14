import { SendEmail } from '@/application/recommendation/send-email.ts'

export class FakeSendEmail implements SendEmail {
  sendTo(): Promise<void> {
    return Promise.resolve()
  }
}
