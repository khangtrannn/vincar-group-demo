import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

import { cn } from '@/lib/cn'

export type FormSelectOption = {
  value: string
  label: string
}

type FormSelectFieldProps = {
  name: string
  options: FormSelectOption[]
  label?: string
  placeholder?: string
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  wrapperClassName?: string
  labelClassName?: string
  triggerClassName?: string
  contentClassName?: string
  hideLabel?: boolean
}

const baseTriggerClassName =
  'flex h-10 w-full items-center justify-between gap-2 rounded-[12px] border border-vc-border bg-vc-bg-input-hover px-4 py-0 text-body-3 text-vc-text-secondary outline-none transition-all hover:bg-vc-bg-input-hover focus:border-vc-text-primary focus:bg-vc-bg-input-focus focus:text-vc-text-primary focus:shadow-md disabled:cursor-not-allowed disabled:border-vc-bg-input-default disabled:bg-vc-bg-input-default disabled:text-vc-input-text-disabled disabled:opacity-100 data-[placeholder]:text-vc-input-text-empty data-[state=open]:border-vc-text-primary data-[state=open]:bg-vc-bg-input-focus data-[state=open]:text-vc-text-primary data-[state=open]:shadow-md [&>span]:min-w-0 [&>span]:text-left [&_svg]:transition [&[data-state=open]_svg]:rotate-180'

export function FormSelectField({
  name,
  options,
  label,
  placeholder,
  defaultValue,
  value,
  onValueChange,
  disabled,
  required,
  wrapperClassName,
  labelClassName,
  triggerClassName,
  contentClassName,
  hideLabel = false,
}: FormSelectFieldProps) {
  const labelId = `${name}-label`

  return (
    <div
      className={cn(
        label && !hideLabel ? 'space-y-2' : undefined,
        wrapperClassName,
      )}
    >
      {label ? (
        <label
          id={labelId}
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

      <Select.Root
        name={name}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <Select.Trigger
          aria-labelledby={label ? labelId : undefined}
          className={cn(baseTriggerClassName, triggerClassName)}
        >
          <Select.Value placeholder={placeholder} />

          <Select.Icon asChild>
            <ChevronDown
              className="h-4 w-4 shrink-0 text-vc-text-tertiary"
              aria-hidden="true"
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            align="start"
            sideOffset={8}
            className={cn(
              'z-[1002] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[12px] border border-slate-300 bg-white shadow-lg',
              'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              contentClassName,
            )}
          >
            <Select.Viewport>
              {options.map((option, index) => {
                const isLastItem = index === options.length - 1

                return (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={cn(
                      'relative flex min-h-14 cursor-pointer select-none items-center justify-between gap-4 px-5 py-4 text-body-3 text-vc-text-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-slate-50',
                      !isLastItem ? 'border-b border-slate-300' : undefined,
                    )}
                  >
                    <Select.ItemText>
                      <span className="line-clamp-1">{option.label}</span>
                    </Select.ItemText>

                    <Select.ItemIndicator>
                      <Check className="h-5 w-5 shrink-0 text-vc-text-primary" />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}