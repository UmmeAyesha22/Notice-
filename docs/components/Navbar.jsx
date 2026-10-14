const links = ["Home", "About", "Programs", "Events", "Notices", "Contact"];

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="wrap">
        {links.map((label) => (
          <li key={label}>
            <a href={"#" + label.toLowerCase()} aria-current={label === "Notices" ? "page" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
