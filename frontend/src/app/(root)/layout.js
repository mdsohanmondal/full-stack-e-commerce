// components/Layout.jsx
import NavBar from '@/components/nav/NavBar';
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
