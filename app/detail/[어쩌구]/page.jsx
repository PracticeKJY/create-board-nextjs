import connectDB from "@/util/db"
import { ObjectId } from "mongodb"

const Detail = async (props) => {
  const db = (await connectDB).db("forum")
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.어쩌구) })

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  )
}

export default Detail
