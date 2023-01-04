import Menu from "./Menu";
import ToggleButton from "./ToggleButton";
import Link from 'next/link';
export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand" href="/#">
              Toko Ikan
            </a>
          </Link>
          <ToggleButton />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-lg gap-lg-0 gap-2">
              <Menu title="Beranda" active />
              <Menu title="Keunggulan" />
              <Menu title="Fitur Aplikasi" />
              <Menu title="Testimonial" />
            </ul>
            <ul className="navbar-nav mx-auto text-lg gap-lg-0 gap-2">
              <li className="nav-item my-auto">
              <Link href="/">
                <a
                  className="btn btn-download ms-lg-2"
                  href="/#"
                  role="button"
                >
                  Download
                </a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
