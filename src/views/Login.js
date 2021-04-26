import React from 'react';

function Login() {
  return (

    <div>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container"><a id="logo-container" href="/login" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/home">Navbar Link</a></li>
          </ul>
          <ul id="nav-mobile" className="sidenav">
            <li><a href="/home">Navbar Link</a></li>
          </ul>
          <a href="/home" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    </div>

  );
}

export default Login;
