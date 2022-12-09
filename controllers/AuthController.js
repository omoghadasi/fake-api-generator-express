module.exports = new class AuthController {

  login() {}

  registerView(req,res) {
    let title="سریع، کارآمد و سازنده "
    res.render('panel/authentication/layouts/overlay/sign-up',{title});
  }

};
