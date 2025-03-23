import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebr.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Listof countries</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy;:Copyright{new Date().getFullYear} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
