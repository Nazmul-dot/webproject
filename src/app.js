const express=require('express');
const { join } = require('path');
const app=express();
const path =require('path');

//public static path
//console.log(path.join(__dirname,'../public'))
const static_path=path.join(__dirname,'../public');
//routing....
app.set('view engine','hbs');

app.use(express.static(static_path))

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})



app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.send('404 error page')
})

app.listen(8000,()=>{
    console.log('listening to the port on 8000')
})