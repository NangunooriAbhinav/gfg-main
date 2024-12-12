export default function Header() {
  return (
    <nav id="navbar-wrap" className="">
      <div id="navbar">
        <div data-aos="fade-down" id="logo" className="reverse">
          <div
            className="mobile-btn"
            style={{ fontSize: 30, cursor: "pointer", fontWeight: "bold" }}
          >
            <i className="fa-solid fa-bars fa-lg" />
          </div>
          <div className="logo">
            <img src="/logo-small.png" />
          </div>
        </div>
        <div id="links" data-aos="fade-down">
          <a href="#top-loc">About Us</a>
          <a href="#events-loc">Events</a>
          <a href="#team-loc">Team</a>
          <a href="/quiz">Lethal Bytes</a>
        </div>
      </div>
    </nav>
  );
}
