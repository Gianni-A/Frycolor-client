import React from 'react';

function Signup() {
  return(
    <section id="intro_container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 offset-md-4" id="menu_support">
            <div className="menu_container text-center border rounded">
              <div className="col-md-12">
                <h4 className="mb-4 mt-3">Registro de usuario</h4>
                <form>
                  <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="inputUserName" placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirm password" />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;