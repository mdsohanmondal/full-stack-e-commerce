import Sidebar from '../components/SideBar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="pl-64 py-15">{children}</div>
    </div>
  );
};
export default AdminLayout;
