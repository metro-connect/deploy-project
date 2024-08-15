import AdminHeader from "./AdminHeader";
import NormalHeader from "./NormalHeader";
import UserHeader from "./UserHeader";

const RoleNav = () => {
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));

  if (admin != null) {
    return <AdminHeader />;
  } else if (customer != null) {
    return <UserHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
