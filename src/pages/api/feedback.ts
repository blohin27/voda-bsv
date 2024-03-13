import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handlerFeedBack(req: any) {
  console.log("req.query FeedBack", req?.name);
  try {
    // const { rows } = await sql`SELECT * from CARTS where user_id=${user}`;
    // await sql`INSERT INTO contacts (phone, email, name, message) VALUES
    // ('${req?.mob && "123"}', '${req?.email && "123"}', '${req?.name && "123"}', '${req?.message && "123"}')`;
    await sql`INSERT INTO contacts (phone, email, name, message) VALUES
    ('123', '123', '123', '123')`;
  } catch (error) {
    console.log(error);
  }
}
