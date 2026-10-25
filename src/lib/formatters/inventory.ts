const quantityFormatter = new Intl.NumberFormat("es-CO", {
  maximumFractionDigits: 3,
});

const dateTimeFormatter = new Intl.DateTimeFormat("es-CO", {
  timeZone: "America/Bogota",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const shortDayFormatter = new Intl.DateTimeFormat("es-CO", {
  timeZone: "UTC",
  day: "numeric",
  month: "short",
});

const UNIT_LABELS: Record<string, string> = {
  KG: "kg",
  G: "g",
  L: "L",
  ML: "ml",
  UNITS: "und",
};

export function formatQuantity(value: number): string {
  return quantityFormatter.format(value);
}

export function formatDateTime(value: string | Date): string {
  return dateTimeFormatter.format(new Date(value));
}

// Recibe una fecha en formato YYYY-MM-DD, como las que produce buildDailyBalances
export function formatShortDay(dayKey: string): string {
  return shortDayFormatter.format(new Date(`${dayKey}T12:00:00Z`));
}

export function unitLabel(unit: string): string {
  return UNIT_LABELS[unit] ?? unit;
}
