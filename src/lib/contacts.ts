import { IContact } from "@/types/contact";

export const getContacts = async (): Promise<IContact[]> => {
  const url = process.env.NEXT_PUBLIC_S3_CONTACTS_URL!;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(url, {
    headers,
    next: { revalidate: 86400 }, // 24 hours
  });

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
};
