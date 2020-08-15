import { Router } from 'express'

const AuthController = Router()

AuthController.post('/signin', async (req, res) => {
  let { password } = req.body

  if( password == process.env.ADMIN_PASSWORD)
    return res.json({ result: 1 })
  
  return res.json({ result: 0 })
})


export default AuthController