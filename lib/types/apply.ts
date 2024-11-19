const statusOptions = ["INPROGRESS", "CONFIRMED", "CANCELLED"] as const;
export type StatusOptions = (typeof statusOptions)[number];
