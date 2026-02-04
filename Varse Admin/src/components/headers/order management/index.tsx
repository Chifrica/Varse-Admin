import './styles.css';
// import { useNavigate } from 'react-router-dom';

const OrderManagementHeader = () => {
  // const navigate = useNavigate();

  const tabs = [
    { label: 'Orders', path: '/orders', active: true },
    { label: 'Vendors', path: '/vendors' },
    { label: 'Riders', path: '/riders' },
    { label: 'Finance', path: '/finance' },
  ];

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header__left">
        <div className="header__brand">
          <span className="header__logo">🚚</span>
          <h2>Varse Admin</h2>
        </div>

        <div className="header__search">
          <input
            type="text"
            placeholder="Search orders, customers, or rider"
          />
        </div>

        <nav className="header__nav">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`header__tab ${tab.active ? 'active' : ''}`}
              // onClick={() => navigate(tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <div className="header__icons">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⚙️</button>
        </div>

        <div className="header__divider" />

        <div className="header__admin">
          <div className="header__admin-info">
            <h3>Admin User</h3>
            <p>Super Admin</p>
          </div>
          <div className="header__profile">👤</div>
        </div>
      </div>
    </header>
  );
};

export default OrderManagementHeader;
