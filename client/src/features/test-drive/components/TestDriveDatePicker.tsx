import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/cn'

function startOfLocalDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addLocalDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)

  return nextDate
}

export function TestDriveDatePicker() {
  const initialDates = useMemo(() => {
    const today = startOfLocalDay(new Date())
    const defaultSelectedDate = addLocalDays(today, 1)

    return {
      today,
      defaultSelectedDate,
    }
  }, [])

  const [selectedDate, setSelectedDate] = useState<Date>(
    initialDates.defaultSelectedDate,
  )

  return (
    <div className="space-y-2">
      <label className="block text-caption font-semibold text-vc-text-secondary lg:text-body-2">
        Preferred date
      </label>

      <DayPicker
        mode="single"
        required
        selected={selectedDate}
        onSelect={(date) => {
          if (date) {
            setSelectedDate(date)
          }
        }}
        defaultMonth={selectedDate}
        today={initialDates.today}
        showOutsideDays
        disabled={{ before: initialDates.today }}
        components={{
          Chevron: ({ orientation, className }) => {
            const Icon = orientation === 'left' ? ChevronLeft : ChevronRight

            return (
              <Icon className={cn('size-4', className)} aria-hidden="true" />
            )
          },
        }}
        classNames={{
          root: 'w-full rounded-[20px] border border-slate-300 bg-slate-50 p-3 [--cell-size:2rem]',
          months: 'relative flex flex-col gap-4',
          month: 'grid w-full grid-cols-1 flex-col gap-4',
          month_caption:
            'flex h-[--cell-size] w-full items-center justify-center px-[--cell-size] text-center font-semibold text-vc-text-secondary',
          caption_label: 'select-none text-sm font-medium',
          nav: 'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          button_previous:
            'flex h-[--cell-size] w-[--cell-size] items-center justify-center rounded-md p-0 transition-colors hover:bg-orange-100',
          button_next:
            'flex h-[--cell-size] w-[--cell-size] items-center justify-center rounded-md p-0 transition-colors hover:bg-orange-100',
          month_grid: 'w-full',
          weekdays: 'flex',
          weekday:
            'flex-1 select-none rounded-md text-caption font-normal text-vc-text-tertiary',
          weeks: 'space-y-2',
          week: 'flex w-full',
          day: 'group/day relative flex aspect-square h-full w-full select-none items-center justify-center p-0 text-center text-vc-text-primary',
          day_button:
            'flex aspect-square h-auto w-full min-w-[--cell-size] flex-col items-center justify-center rounded-md text-caption font-normal leading-none transition-colors hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-orange-100 disabled:pointer-events-none disabled:opacity-50',
          today: '!text-orange-500 bg-transparent',
          selected: '!text-white [&>button]:!bg-orange-500 rounded-[6px]',
          disabled: '!text-vc-text-disabled cursor-not-allowed opacity-40',
          outside: '!text-slate-400',
        }}
      />
    </div>
  )
}