import "./Header.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href={"/"}><img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/48/ffffff/external-film-art-and-design-studio-xnimrodx-lineal-xnimrodx-2.png" alt="Logo"/></a>
        </div>
        <div className="user">
        <a className="notification" href="/"><img src="https://img.icons8.com/material-sharp/28/ffffff/bell.png" alt="Thông báo"/></a>
          <a href={"/user"}><img src="https://img.icons8.com/ios-glyphs/34/ffffff/user--v1.png" alt="User"/></a>
        </div>
      </div>
    </div>
  );
}
export default Header;
