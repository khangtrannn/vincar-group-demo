import { skipToken, useQuery } from "@apollo/client/react";
import { useRouter } from "next/router";

import { GET_PUBLISHED_VPL_VEHICLE } from "@/features/inventory/api/get-published-vpl-vehicle";

import { TestDriveForm } from "../components/TestDriveForm";
import { TestDrivePageHeader } from "../components/TestDrivePageHeader";
import { TestDriveVehicleSummary } from "../components/TestDriveVehicleSummary";
import { ArrowLeft } from "lucide-react";

export function TestDriveScreen() {
  const router = useRouter();
  const vehicleId = router.query.vehicleId;

  const resolvedVehicleId =
    typeof vehicleId === "string" && vehicleId.length > 0 ? vehicleId : null;

  const { data, loading, error } = useQuery(
    GET_PUBLISHED_VPL_VEHICLE,
    resolvedVehicleId
      ? {
          variables: {
            vehicleId: resolvedVehicleId,
          },
        }
      : skipToken,
  );

  const vehicle = data?.getPublishedVPLVehicle;

  if (!resolvedVehicleId || loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-10 lg:py-10">
          <p className="text-body-3 text-vc-text-tertiary">
            Loading test drive details...
          </p>
        </div>
      </main>
    );
  }

  if (error || !vehicle) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-10 lg:py-10">
          <p className="text-body-3 text-red-600">
            Failed to load vehicle details.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1440px] space-y-4 px-4 py-8 lg:space-y-6 lg:px-10 lg:py-10">
        <TestDrivePageHeader vehicle={vehicle} />

        <section>
          <div className="mx-auto grid max-w-[1100px] gap-4 lg:grid-cols-[2fr_3fr] lg:gap-8">
            <TestDriveVehicleSummary vehicle={vehicle} />
            <TestDriveForm vehicle={vehicle} />
          </div>
        </section>

        <section className="flex justify-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-[24px] bg-transparent px-5 py-2 font-semibold text-vc-text-primary transition-all hover:bg-elevation/10 max-lg:text-body-3 lg:text-body-3 [&_svg]:h-4 [&_svg]:w-auto"
          >
            <span className="shrink-0">
              <ArrowLeft aria-hidden="true" strokeWidth={2} />
            </span>

            <span className="group-hover:underline group-hover:underline-offset-8">
              Back to Page
            </span>
          </button>
        </section>
      </div>
    </main>
  );
}
