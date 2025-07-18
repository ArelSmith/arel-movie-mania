const NavigationBar = ({ name = "Arel" }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{name}</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
