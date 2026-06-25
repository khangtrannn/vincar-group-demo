import type { ComponentType, InputHTMLAttributes } from 'react'

type TestDriveTextFieldProps = {
  label: string
  name: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>

const inputClassName =
  'h-10 w-full rounded-[12px] border border-vc-border bg-vc-bg-input-default px-3 py-2 pl-9 text-body-3 text-vc-text-primary placeholder:text-vc-input-text-empty transition-all hover:bg-vc-bg-input-hover focus-visible:border-vc-stroke-input-focus focus-visible:bg-vc-bg-input-focus focus-visible:outline-none focus-visible:shadow-md disabled:cursor-not-allowed disabled:border-vc-bg-input-default disabled:bg-vc-bg-input-default disabled:text-vc-input-text-disabled disabled:placeholder:text-vc-input-text-disabled disabled:opacity-100'

export function TestDriveTextField({
  label,
  name,
  icon: Icon,
  type = 'text',
  ...inputProps
}: TestDriveTextFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-caption font-semibold text-vc-text-secondary lg:text-body-2"
      >
        {label}
      </label>

      <div className="group/input relative w-full text-vc-text-other">
        <input
          id={name}
          name={name}
          type={type}
          className={inputClassName}
          {...inputProps}
        />

        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-inherit transition-all group-focus-within/input:text-vc-text-secondary [&_svg]:size-4">
          <Icon className="size-4" aria-hidden={true} />
        </div>
      </div>
    </div>
  )
}