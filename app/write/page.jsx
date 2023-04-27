const Write = () => {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <label htmlFor="title">제목</label>
        <input id="title" name="title" type="text" placeholder="글제목" />
        <label htmlFor="content">내용</label>
        <input id="content" name="content" type="text" placeholder="글내용" />

        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Write
