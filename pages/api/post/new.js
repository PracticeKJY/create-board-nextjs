import connectDB from "@/util/db"

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목써라")
    }
    try {
      let db = (await connectDB).db("forum")
      let result = db.collection("post").insertOne(req.body)
      res.redirect(302, "/list")
    } catch (error) {
      console.log(error)
    }
  }

  //응답
  // return res.status(200).redirect("/list")
}
