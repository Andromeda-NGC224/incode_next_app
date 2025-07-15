import { Table } from "@/components/ui/invoices";

import { Search } from "@/components/ui";
import { InvoicesTableSkeleton } from "@/components/ui";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/lib/db";
import { Metadata } from "next";
import { lusitana } from "@/components/fonts";
import clsx from "clsx";
import { CreateInvoiceButton, Pagination } from "@/components/ui/invoices";

export const metadata: Metadata = {
  title: "Invoices | Acme Dashboard",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={clsx(lusitana.className, "text-2xl")}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoiceButton />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
