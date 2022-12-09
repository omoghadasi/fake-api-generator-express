module.exports = new class AuthController {

  login() {}

  registerView(req,res) {
    let title="Fast, Efficient and Productive"
    res.render('panel/authentication/layouts/overlay/sign-up',{title});
  }

};
