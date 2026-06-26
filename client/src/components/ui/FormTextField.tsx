import type { ComponentType, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

type FormTextFieldProps = {
  label?: string
  name: string
  icon?: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  wrapperClassName?: string
  labelClassName?: string
  inputClassName?: string
  hideLabel?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'className'>

const baseInputClassName =
  'h-10 w-full rounded-[12px] border border-vc-border bg-vc-bg-input-default px-3 py-2 text-[15px] leading-5 text-vc-text-primary placeholder:text-[15px] placeholder:leading-5 placeholder:text-vc-input-text-empty transition-all hover:bg-vc-bg-input-hover focus-visible:border-vc-stroke-input-focus focus-visible:bg-vc-bg-input-focus focus-visible:outline-none focus-visible:shadow-md disabled:cursor-not-allowed disabled:border-vc-bg-input-default disabled:bg-vc-bg-input-default disabled:text-vc-input-text-disabled disabled:placeholder:text-vc-input-text-disabled disabled:opacity-100'

export function FormTextField({
  label,
  name,
  icon: Icon,
  type = 'text',
  id = name,
  placeholder,
  wrapperClassName,
  labelClassName,
  inputClassName,
  hideLabel = false,
  ...inputProps
}: FormTextFieldProps) {
  const hasVisibleLabel = Boolean(label && !hideLabel)

  return (
    <div
      className={cn(
        hasVisibleLabel ? 'space-y-2' : undefined,
        wrapperClassName,
      )}
    >
      {label ? (
        <label
          htmlFor={id}
          className={cn(
            hideLabel
              ? 'sr-only'
              : 'block text-caption font-semibold text-vc-text-secondary lg:text-body-2',
            labelClassName,
          )}
        >
          {label}
        </label>
      ) : null}

      <div className="group/input relative w-full text-vc-text-other">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={!label ? placeholder : undefined}
          className={cn(
            baseInputClassName,
            Icon ? 'pl-9' : undefined,
            inputClassName,
          )}
          {...inputProps}
        />

        {Icon ? (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-inherit transition-all group-focus-within/input:text-vc-text-secondary [&_svg]:size-4">
            <Icon className="size-4" aria-hidden={true} />
          </div>
        ) : null}
      </div>
    </div>
  )
}