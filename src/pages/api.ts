import { db, Product } from 'astro:db';



export async function GET({ params }) {
   //   const id = params.id;
   //   const product = await getProduct(id);
   const product = await db.select().from(Product);

   if (!product) {
      return new Response(null, {
         status: 404,
         statusText: 'Not found'
      });
   }

   return new Response(
      JSON.stringify(product), {
      status: 200,
      headers: {
         "Content-Type": "application/json"
      }
   }
   );
}