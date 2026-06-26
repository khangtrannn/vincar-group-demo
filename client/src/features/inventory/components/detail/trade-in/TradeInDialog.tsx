import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { FormSelectField } from "@/components/ui/FormSelectField";
import { FormTextField } from "@/components/ui/FormTextField";
import type { Vehicle } from "@/features/inventory/api/vehicle-types";

type TradeInDialogProps = {
  vehicle: Vehicle;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function getTradeInVehicleOptions(vehicle: Vehicle) {
  return [
    {
      value: vehicle.id,
      label: vehicle.name,
    },
    {
      value: "audi-q5",
      label: "Audi Q5 Prestige 2.0 TFSI Gasolina 2024",
    },
    {
      value: "bmw-x5",
      label: "BMW X5",
    },
    {
      value: "mercedes-gle",
      label: "Mercedes GLE",
    },
  ];
}

export function TradeInDialog({
  vehicle,
  open,
  onOpenChange,
}: TradeInDialogProps) {
  const vehicleOptions = getTradeInVehicleOptions(vehicle);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="trade-dialog-overlay fixed inset-0 z-[1000] bg-black/50" />

        <Dialog.Content className="trade-dialog-content fixed left-1/2 top-1/2 z-[1001] grid max-h-[calc(100vh-2rem)] w-[calc(100vw-2rem)] max-w-[720px] -translate-x-1/2 -translate-y-1/2 gap-0 overflow-y-auto rounded-[20px] border border-slate-200 bg-white p-0 shadow-lg will-change-transform">
          <div className="flex flex-col space-y-1.5 px-4 pb-0 pt-5 text-center lg:px-6">
            <div className="flex w-full items-center justify-between px-0.5 text-center">
              <Dialog.Title className="w-full text-heading-5 font-semibold text-vc-text-primary">
                Get Trade-In Estimate
              </Dialog.Title>
            </div>

            <Dialog.Description className="sr-only">
              Submit your contact and vehicle details to get a trade-in
              estimate.
            </Dialog.Description>
          </div>

          <form
            className="px-4 py-4 lg:px-6 lg:py-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex flex-1 flex-col gap-4">
                <label className="text-body-3 font-semibold text-orange-500">
                  Your contact
                </label>

                <FormTextField name="firstName" placeholder="First name" />

                <FormTextField name="lastName" placeholder="Last name" />

                <FormTextField
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                />

                <FormTextField
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <label className="text-body-3 font-semibold text-orange-500">
                  Vehicle Details
                </label>

                <FormSelectField
                  name="vehicleId"
                  options={vehicleOptions}
                  defaultValue={vehicle.id}
                  placeholder="Select vehicle"
                />

                <FormTextField
                  name="carplateNumber"
                  placeholder="Carplate Number"
                />

                <FormTextField
                  name="mileage"
                  type="number"
                  placeholder="Mileage (KM)"
                  inputMode="numeric"
                />

                <FormTextField name="accessCode" placeholder="Access Code" />
              </div>
            </div>

            <div className="mx-auto mt-6 flex max-w-[400px] gap-3 pt-2">
              <button
                type="submit"
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[24px] border border-neutral-900 bg-neutral-900 px-5 py-2 font-semibold text-white transition-all hover:bg-neutral-800 active:bg-neutral-700 disabled:cursor-not-allowed disabled:border-disabled-primary-bg disabled:bg-disabled-primary-bg disabled:opacity-100 max-lg:text-body-3 lg:text-body-3"
              >
                Submit
              </button>

              <Dialog.Close asChild>
                <button
                  type="button"
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-[24px] border border-slate-600 bg-transparent px-5 py-2 font-semibold text-vc-text-primary transition-all hover:border-slate-700 hover:bg-neutral-900 hover:text-white active:border-slate-900 active:bg-elevation/10 disabled:cursor-not-allowed disabled:border-disabled-secondary-bg disabled:text-disabled-secondary-text disabled:opacity-100 max-lg:text-body-3 lg:text-body-3"
                >
                  Cancel
                </button>
              </Dialog.Close>
            </div>

            <p className="mt-6 text-center text-caption leading-[1.33] text-slate-700">
              By clicking &quot;Submit&quot;, I consent to the collection, use
              and disclosure of my personal data provided in this form, by EV
              Hub Pte Ltd and VINCAR Pte Ltd, for the purpose set out in the
              Privacy Policy accessible here
            </p>
          </form>

          <Dialog.Close asChild>
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}