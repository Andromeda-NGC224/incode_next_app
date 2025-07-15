import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/components/ui";

import { Metadata } from "next";
import { CardWrapper } from "@/components/ui/dashboard";
import { lusitana } from "@/components/fonts";
import { RevenueChart } from "@/components/ui/dashboard";
import { LatestInvoices } from "@/components/ui/dashboard";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Dashboard | Acme Dashboard",
};

export default async function Page() {
  return (
    <main>
      <h1 className={clsx(lusitana.className, "mb-4 text-xl md:text-2xl")}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
