import { Router } from 'express'
import { sign } from "jsonwebtoken";

const AuthController = Router()

AuthController.post('/signin', async (req, res) => {
  let { password } = req.body

  if( password !== process.env.ADMIN_PASSWORD)
    return res.json({ result: 0 })
  
  let token = sign({ iat: Math.floor(Date.now() / 1000) }, process.env.APP_KEY, { expiresIn: '12h' })
  return res.json({ result: 1, token })
})


export default AuthController