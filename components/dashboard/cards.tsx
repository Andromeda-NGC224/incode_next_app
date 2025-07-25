import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

import { fetchCardData } from "@/lib/db";
import { lusitana } from "@/lib/fonts";
import clsx from "clsx";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const cardData = await fetchCardData();

  const cards = [
    {
      title: "Collected",
      value: cardData.totalPaidInvoices,
      type: "collected" as const,
    },
    {
      title: "Pending",
      value: cardData.totalPendingInvoices,
      type: "pending" as const,
    },
    {
      title: "Total Invoices",
      value: cardData.numberOfInvoices,
      type: "invoices" as const,
    },
    {
      title: "Total Customers",
      value: cardData.numberOfCustomers,
      type: "customers" as const,
    },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          type={card.type}
        />
      ))}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={clsx(
          lusitana.className,
          "truncate rounded-xl bg-white px-4 py-8 text-center text-2xl"
        )}
      >
        {value}
      </p>
    </div>
  );
}
