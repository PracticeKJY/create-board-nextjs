import connectDB from "@/util/db"

export default async function handler(req, res) {
  const db = (await connectDB).db("forum")
  let result = await db.collection("post").find().toArray()

  const body = req.body

  // let date = new Date()

  //응답
  return res.status(200).json(body)
}
