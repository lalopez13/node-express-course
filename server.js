// The first line gives you access to the express library by searching your node_modules for "express".
const express = require('express');
// The next creates an instance of the express constructor, which we will name "app".
const app = express();


app.listen(8000,function(){
    console.log("server is running")
    })