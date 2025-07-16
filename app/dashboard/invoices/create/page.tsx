import { fetchCustomers } from "@/lib/db";
import { Breadcrumbs, CreateInvoiceForm } from "@/components/invoices";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateInvoiceForm customers={customers} />
    </main>
  );
}
