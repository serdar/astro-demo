import { defineDb } from 'astro:db';
import { defineTable, column, NOW } from 'astro:db';

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    productName: column.text()
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {Product}
});

