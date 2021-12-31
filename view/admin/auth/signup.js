const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  if(errors){console.log(errors)};
  return layout({
    content: `
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="row bg-light rounded " style="background-image: url(/large-triangles.svg); margin-top: 90px;">
            <form method="POST">
              <h1 class="title d-flex justify-content-center" style="font-family: 'Courier New', Courier, monospace;">
                Sign Up</h1>
              <div class="field d-flex flex-column">
                <label class="label fs-4" style="font-family: sans-serif">Full name</label>
                <input class="input d-flex flex-column border border-info rounded-pill  " placeholder="Full name"
                  name="name" />
              </div>
              <div class="field d-flex flex-column">
                <label class="label fs-4" style="font-family: sans-serif">Email</label>
                <input class="input d-flex flex-column border border-info rounded-pill" placeholder="Email"
                  name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field d-flex flex-column">
                <label class="label fs-4" style="font-family: sans-serif">Password</label>
                <input class="input d-flex flex-column border border-info rounded-pill" placeholder="Password"
                  name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <div class="field d-flex flex-column">
                <label class="label fs-4" style="font-family: sans-serif">Password Confirmation</label>
                <input class="input d-flex flex-column border border-info rounded-pill"
                  placeholder="Password Confirmation" name="passwordConfirmation" type="password" />
                <p class="help is-danger">${getError(
                  errors,
                  'passwordConfirmation'
                )}</p>
              </div>
              <div class="d-flex justify-content-center">
                <button class="button btn-success rounded-pill">Submit</button>
              </div>
            </form>
            <a href="/signin" class=" text-decoration-none"><span class="text-dark">Have an account? Sign In</span></a>
          </div>
        </div>
      </div>
    `
  });
};
