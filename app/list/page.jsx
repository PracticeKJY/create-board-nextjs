import connectDB from "@/util/db"
import styles from "./list.module.css"
import Link from "next/link"
import DetailLink from "./DetailLink"

const list = async () => {
  const db = (await connectDB).db("forum")
  let result = await db.collection("post").find().toArray()

  return (
    <>
      <div className={styles.listBg}>
        <ul>
          {result.map((item, index) => (
            <>
              <Board
                key={index}
                id={item._id}
                title={item.title}
                content={item.content}
              />
              <DetailLink />
            </>
          ))}
        </ul>
      </div>
    </>
  )
}

export default list

export const Board = ({ key, id, title, content }) => {
  return (
    <Link href={`/detail/${id}`} className={styles.listItemContainer}>
      <li className={styles.listItem} key={key}>
        <h4>{title}</h4>
        <p>{content}</p>
      </li>
    </Link>
  )
}
