import { Mail, Phone, User } from 'lucide-react'

import { TestDriveTextField } from './TestDriveTextField'

export function TestDriveCustomerFields() {
  return (
    <div className="space-y-4 lg:space-y-6">
      <TestDriveTextField
        label="Full name"
        name="fullName"
        placeholder="ex. John Dowe"
        autoComplete="name"
        icon={User}
      />

      <TestDriveTextField
        label="Phone number"
        name="phoneNumber"
        type="tel"
        placeholder="12345678"
        autoComplete="tel"
        icon={Phone}
      />

      <TestDriveTextField
        label="Email"
        name="email"
        type="email"
        placeholder="ex. youremail@hotmail.com"
        autoComplete="email"
        icon={Mail}
      />
    </div>
  )
}