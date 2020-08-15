/*********************************************** 
 * 
 * this is the file that you will need
 * to add your api routes 
 *
*******************************************/
'use strict';
import express from 'express';
import RepackController from '../controller/RepackController'
import AuthController from '../controller/AuthController'

const Api = express.Router();

//welcome page
Api.get('/' , (req, res)=>{
  res.json([{
    id : new Date()
  }])
})

// repack api
Api.use('/repack', RepackController)

// auth api
Api.use('/auth', AuthController)


export default Api;