import { fetchCustomers } from "@/lib/db";
import { Breadcrumbs } from "@/components/ui/invoices";
import { CreateInvoiceForm } from "@/components/ui/invoices";

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
