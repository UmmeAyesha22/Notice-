// All notices are fictional sample content.
export const notices = [
  {
    id: 1,
    title: "Web Development Workshop Registration Open",
    date: "2026-10-10",
    category: "Workshop",
    summary: "A two-day beginner workshop on HTML and CSS for new members. Seats are limited.",
    href: "#notice-1",
  },
  {
    id: 2,
    title: "Volunteer Recruitment for Annual Tech Fair",
    date: "2026-10-08",
    category: "Recruitment",
    summary: "YSSE is looking for volunteers for registration, logistics, and guest management.",
    href: "#notice-2",
  },
  {
    id: 3,
    title: "Python Training Program: Batch 3 Schedule",
    date: "2026-10-05",
    category: "Training",
    summary: "The class schedule and venue for Batch 3 of the Python Training Program are finalised.",
    href: "#notice-3",
  },
  {
    id: 4,
    title: "Annual Tech Fair Date Announced",
    date: "2026-10-01",
    category: "Event",
    summary: "The fair takes place in December, with project showcases, talks, and a coding contest.",
    href: "#notice-4",
  },
  {
    id: 5,
    title: "Updated Membership Guidelines",
    date: "2026-09-25",
    category: "Announcement",
    summary: "Membership renewal rules and attendance requirements are updated for the new session.",
    href: "#notice-5",
  },
];

export const categories = ["All", ...new Set(notices.map((n) => n.category))];

export function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
