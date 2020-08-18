 import { verify } from "jsonwebtoken";

 export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader)
    return res.status(403).json({ error: 'No access token' })
  
  const token = authHeader.split(' ')[1]
  try {
    if(!verify(token, process.env.APP_KEY))
      return res.status(403).json({ error: 'Invalid access token' })
  } catch (err) {
    return res.status(403).json({ error: 'Invalid access token' })
  }

  return next()
 }