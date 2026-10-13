import { formatDate } from "../data/notices.js";

export default function NoticeItem({ notice }) {
  return (
    <article className="notice">
      <time className="notice-date" dateTime={notice.date}>
        {formatDate(notice.date)}
      </time>
      <div className="notice-body">
        <p className="chip">{notice.category}</p>
        <h3>{notice.title}</h3>
        <p>{notice.summary}</p>
        <a href={notice.href}>
          Read the full notice<span className="sr-only">: {notice.title}</span>
        </a>
      </div>
    </article>
  );
}
