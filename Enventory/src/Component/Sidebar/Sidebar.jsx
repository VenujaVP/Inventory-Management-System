import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dropdown"></div>
      <ul>
        <li className="active">
          <i className="ri-dashboard-3-fill"></i> <span>Dashboard</span>
        </li>
        <li>
        <i className="ri-product-hunt-fill"></i> <span>Products</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Categories</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Orders</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Customers</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Suppliers</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Inventory Tracking</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Billing & Invoices</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Reports</span>
        </li>
        <li>
          <i className="ri-dashboard-3-fill"></i> <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
