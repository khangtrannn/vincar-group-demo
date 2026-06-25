export function TestDriveSubmitButton() {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled
        className="flex h-10 w-full items-center justify-center gap-2 rounded-[24px] border border-orange-600 bg-orange-600 px-5 py-2 font-semibold text-white transition-all hover:bg-orange-700 active:bg-orange-800 disabled:cursor-not-allowed disabled:border-disabled-primary-bg disabled:bg-disabled-primary-bg disabled:opacity-100 max-lg:text-body-3 md:max-w-[240px] lg:text-body-3"
      >
        Schedule Test Drive
      </button>
    </div>
  )
}