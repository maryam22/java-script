var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{res.render('blog',{title:' this is blog pqge'})})

module.exports=router;
//mdbbootstrap.com
//strapi


const authtoken =(req,res,next)=>{console.log('hello this is from middleware')
next();}


router.get('/api',authtoken,(req,res)=>{

    res.json({id:1} )
 
 })