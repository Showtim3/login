var express=require('express');
var app=express();
var path=require('path');
const login=require('./db').login;
const Op=require('./db').Op;


app.set("view engine", "pug");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/signup', async(req,res) => {
    await login.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        number: req.body.number
    })
    res.sendFile(path.join(__dirname+'/proceed.html'));
})


app.get('/',function(req,res){
    console.log("Request on /add detected");
    res.sendFile(path.join(__dirname+'/signup.html'));
});


app.post('/login', function(req,res) {
    console.log('Request on post /login detecetd');
    res.sendFile(path.join(__dirname+'/login.html'));
        console.log("After");
});

app.get('/login', (req,res) =>{
    
    res.sendFile(path.join(__dirname+'/login.html'));
});


app.post('/loginf', async (req,res) =>{
    var username1=req.body.username;
    var password1=req.body.password;
    console.log("FInal username : " + username1 + "password "+ password1);
    
    const values=await login.findAll({
        where:{
            [Op.or]:[{username:username1},{email:username1}],
            password:password1
        }
    });
    
//    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
    var data=JSON.stringify(values);
    var output=JSON.parse(data);
    console.log(output);
  //  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");

    //console.log(output[0].username);
    var pass=output[0];
    res.render('index',{
        vari : pass
    })
   
});





app.listen(5555,() =>{
    console.log("Server listening on 5555");
    
})