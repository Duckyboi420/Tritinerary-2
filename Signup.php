<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <title>Tritinerary | Signup</title>
</head>
<body>
  <div class="header text-center text-primary fs-1 p-4">TRITINERARY</div>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
            alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>

            <div class="form-outline mb-4">
              <label class="form-label">Name</label>
                <input type="text" name="Name" class="form-control form-control-lg" placeholder="Name" required>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="inputEmail3">Username</label>
              <input type="email" id="inputEmail3" class="form-control form-control-lg"
                placeholder="Username" required>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="inputPassword3">Password</label>
              <input type="password" id="inputPassword3" class="form-control form-control-lg"
                placeholder="Password" required>
            </div>
  
            <div class="form-outline mb-4">
              <label for="inputPassword3" class="form-label">Confirm Password</label>
                <input type="password" name="CPassword" class="form-control form-control-lg" placeholder="Confirm Password" id="inputPassword3" required>
            </div>
            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Signup</button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Already have an Account? <a href="Login.php"
                  class="link-danger"> Login</a></p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p class="text-center text-muted">Tritinerary</p>
    </footer>
</body>
</html>