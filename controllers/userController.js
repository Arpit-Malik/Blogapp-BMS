const user = require('../models/userModel');
const bcrypt  = require('bcrypt');

const loadLogin = async(req,res)=>{
    try{


        res.render('login');
    }catch(error){
        console.log(error.message);
    }
}

const verifyLogin = async(req,res)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;

        const userData = await user.findone({email:email});

        if(userData){
            console.log(userData);

           const passwordMatch =  await bcrypt.compare(password,userData.password);

           if(passwordMatch){
            req.session.user_id = userData._id;
            req.session.user_admin = userData._admin;
              if(userData.is_admin == 1){
                res.redirect('./dashboard');
              }

           }
           else{
            res.redirect('./profile');

           }

        }
        else{
            res.render('login',{message:"Email and password is incorrect"});
        }


    }catch(error){
        console.log(error.message);
    }
}

const profile = async(req,res)=>{
    try{


        res.render('hii profile here');
    }catch(error){
        console.log(error.message);
    }
}

module.exports = {
    loadLogin,
    verifyLogin
}