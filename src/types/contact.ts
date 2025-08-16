export type IContact = {
  type: "phone" | "email" | "github" | "linkedin";
  label: string;
  href: string;
};
