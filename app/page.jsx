import connectDB from "../util/db.js"

export default async function Home() {
  let client = await connectDB
  const db = client.db("forum")
  let result = await db.collection("post").find().toArray()

  return <div>안녕</div>
}
