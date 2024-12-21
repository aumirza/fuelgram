import { PgTableWithColumns } from "drizzle-orm/pg-core";

export function getSelectedFields<T extends PgTableWithColumns<any>>(
  schema: T,
  fields: Record<keyof typeof schema.$inferSelect, boolean>
) {
  const selectedFields = Object.entries(fields)
    .filter(([_, value]) => value)
    .reduce((acc, [key]) => {
      acc[key] = schema[key];
      return acc;
    }, {} as Record<string, any>);

  return selectedFields;
}
