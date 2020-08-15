/*********************************************** 
 * 
 * this is the file that you will need
 * to add your public routes 
 *
*******************************************/

import express from 'express';
import { get } from 'mongoose';
import path from 'path'

const Route = express.Router();


Route.get(['/', '/dashboard', '/signin'] , (req , res)=>{
    res.render('index')
})

Route.get('/download/:target', (req, res) => {
    let target = req.params.target

    return res.download(path.join(__dirname, '../public/uploads/repacks', `${target}`))
})


export default Route;