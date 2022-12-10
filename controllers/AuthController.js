const config = require("../config");
const Controller = require(`${config.path.controllers}/Controller`);
module.exports = new class AuthController extends Controller {

  login() { }

  registerView(req, res) {
    let title = "سریع، کارآمد و سازنده "
    res.render('panel/authentication/layouts/overlay/sign-up', { title });
  }

  register(req, res) {
    this.model.User({
      email: req.body.email,
      password: req.body.password
    }).save(err => {
      if (err) {
        return res.json(err)
      }
      res.redirect('/panel');
    })
  }

  emailAvailability(req, res) {
    let email = req.params.email;
    this.model.User.findOne({ email }, function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        if (docs) {
          res.json({
            availability: false,
            message: 'این ایمیل از قبل در سایت ثبت نام کرده است.',
            success: true
          })
        } else {
          res.json({
            availability: true,
            message: 'این ایمیل تاکنون در سایت ثبت نام نکرده است',
            success: true
          })
        }
      }
    });

  }

};
