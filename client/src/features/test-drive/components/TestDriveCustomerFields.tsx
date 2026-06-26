import { Mail, Phone, User } from 'lucide-react'

import { FormTextField } from '@/components/ui/FormTextField'

export function TestDriveCustomerFields() {
  return (
    <div className="space-y-4 lg:space-y-6">
      <FormTextField
        label="Full name"
        name="fullName"
        placeholder="ex. John Dowe"
        autoComplete="name"
        icon={User}
      />

      <FormTextField
        label="Phone number"
        name="phoneNumber"
        type="tel"
        placeholder="12345678"
        autoComplete="tel"
        icon={Phone}
      />

      <FormTextField
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