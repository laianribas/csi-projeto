import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div>
      <div>
        <aside className="main-sidebar sidebar-dark-primary">
          <div className="sidebar">
            <div className="form-inline">
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item menu-open">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-address-card" />
                    <p>
                      Setor
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-user-friends" />
                    <p>
                      Funcionário
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-phone" />
                    <p>
                      Chamado
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-briefcase" />
                    <p>
                      Cargo
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>

    </div>

  )

}

export default Menu