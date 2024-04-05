import { db, Product } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Product).values([{
		id: 1,
		productName: "Product 1"
	},
	{
		id: 2,
		productName: "Product 2"
	}])
}