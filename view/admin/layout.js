module.exports = ({ homeNav, content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>note-app</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <!-- <link src="/css/main.css" rel="stylesheet"> -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      </head>
      <body>
        <header class="">
          <nav class="navbar navbar-expand-lg bg-dark position-fixed top-0 start-0 end-0">
            <div class="container-fluid">
                <a href="/home" class="bg-dark text-decoration-none"><h3 class="text-light">note-pad</h3></a>
            ${homeNav}
            </div>
          </nav>
        </header>
        <div class="container-fluid min-vh-100" style="background-image: url(/protruding-squares.svg);">
            ${content}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
        </script>
      </body>
    </html>
  `;
};
