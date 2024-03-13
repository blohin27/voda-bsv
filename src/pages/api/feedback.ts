import { sql } from "@vercel/postgres";

export default async function handlerFeedBack(req: any) {
  console.log("req.query FeedBack", req?.name);
  const phone = req?.mob || "Пусто";
  const email = req?.email || "Пусто";
  const name = req?.name || "Пусто";
  const message = req?.message || "Пусто";

  try {
    await sql`INSERT INTO contacts (phone, email, name, message) VALUES (${phone}, ${email}, ${name}, ${message})`;
  } catch (error) {
    console.log(error);
  }
}
