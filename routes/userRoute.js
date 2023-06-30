const express = reqiure("express");
const admin_route = express();

const bodyParser = require('body-parser');
admin_route.use(bodyParser.json());
admin_route.use(bodyParser.urlencoded({extended:true}));

const session = require('express-session');

const config = require('../config/config');
user_route.use(session({
    secret:config.sessionSecret,
    resave:true,
    saveUninitialized:true
}));

admin_route.set('view-engine' , 'ejs');
admin_route.set('views', './views');



admin_route.use(express.static('public'));

const userController = require('../controllers/userController');
const adminLoginAuth = require('../middlewares/adminLoginAuth');




user_route.get('./login',adminLoginAuth.isLogout,userController.loadLogin);
user_route.post('./login',userController.verifyLogin);

user_route.get('./logout',adminLoginAuth.isLogout,userController.loadLogin);

user_route.get('/profile', userController.profile);

module.exports = user_routes;
