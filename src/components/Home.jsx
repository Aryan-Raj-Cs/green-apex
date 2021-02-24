import { useEffect, useState } from "react";
import "../css/home.css";
function App() {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [allPost, setallPost] = useState([]);
  const changePage = () => {
    setPageCount(pageCount + 1);
  };
  console.log(page);
  console.log(allPost);
  useEffect(() => {
    try {
      setInterval(async () => {
        const res = await fetch(
          "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=" + page
        );
        const result = await res.json();
        console.log(result);
        let obj = { page: page, post: result };
        setallPost([...allPost, obj]);
        setPage(page + 1);
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <div className="App">
      {console.log(allPost.length && page)}
      <table>
        <tr>
          <th>Title</th>
          <th>Url</th>
          <th>CreatedAt</th>
          <th>Author</th>
        </tr>

        {allPost.length &&
          allPost[pageCount].post.hits.map((value) => {
            return (
              <tr>
                <td>{value.title.substring(0, 10)}</td>
                <td>{value.url}</td>
                <td>{value.created_at.substring(0, 10)}</td>
                <td>{value.author}</td>
              </tr>
            );
          })}
      </table>
      <div className="page" onClick={changePage}>
        page count {page} click to next
      </div>
    </div>
  );
}

export default App;
