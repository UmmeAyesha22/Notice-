import { notices, formatDate } from "../data/notices.js";

export default function NoticeTable() {
  return (
    <section id="summary" aria-labelledby="summary-heading">
      <h2 id="summary-heading">Notice Summary</h2>
      <div className="table-scroll">
        <table>
          <caption>Recent sample notices, newest first</caption>
          <thead>
            <tr>
              <th scope="col">Notice Title</th>
              <th scope="col">Published Date</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr key={n.id}>
                <th scope="row">{n.title}</th>
                <td>{formatDate(n.date)}</td>
                <td>{n.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
