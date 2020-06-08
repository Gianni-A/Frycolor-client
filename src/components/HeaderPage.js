import React from 'react';

function HeaderPage() {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 border">
          <p>Logotipo</p>
        </div>
        <div className="col-md-6 border text-right">
          <p>Nombre de usuario</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage;