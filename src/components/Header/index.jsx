import logoSvg from "../../assets/svg/logo-blog.svg";
import searchSvg from "../../assets/svg/search-icon.svg";

export const Header = () => {
  return (
    <>
      <header className="flex-space-between">
        <div className="logo">
          <img src={logoSvg} alt="logo-blog" />
        </div>
        <div className="search">
          <img src={searchSvg} alt="search-icon" className="search-icon" />
          <input
            type="text"
            name="search"
            className="input-search"
            placeholder="Buscar artigos, podcasts, destaques..."
          />
        </div>
        <ul className="menu">
          <li>
            <a href="#" className="nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};
