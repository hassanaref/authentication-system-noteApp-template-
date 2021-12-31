const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container ">
        <div class="d-flex justify-content-center">
          <div class="row bg-light rounded" style="background-image: url(/large-triangles.svg); margin-top: 90px;">
            <form method="POST">
              <h1 class="title d-flex justify-content-center" style="font-family: 'Courier New', Courier, monospace;">Sign in</h1>
              <div class="d-flex flex-column ">
                <label class="label fs-4" style="font-family: sans-serif">Email</label>
                <input required class="input d-flex flex-column border border-info rounded-pill" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field d-flex flex-column">
                <label class="label fs-4" style="font-family: sans-serif;">Password</label>
                <input required class="input  border border-info rounded-pill" placeholder="Password"
                  name="password"
                  type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <div class="d-flex justify-content-center">
                <button class="button btn-success rounded-pill">Submit</button>
              </div>
            </form>
            <a href="/signup" class=" text-decoration-none"><span class="text-dark">Need an account? Sign Up</span></a>
          </div>
        </div>
      </div>
    `
  });
};
