import { Router } from 'express'
import fileUpload from 'express-fileupload'
import { getAll, getById, addOne, edit, deleteOne } from '../model/actions/RepackModel'
import { handleUpload, deleteFile } from '../utils/handleFile'
import { verifyToken } from '../utils/verifyToken'

const MainController = Router()

MainController.use(fileUpload())

MainController.get('/', async (req, res) => {
  let { keyWord } = req.query

  let repacks = await getAll(keyWord)
  return res.json({ repacks })
})

MainController.get('/:id', async (req, res) => {
  let repack = await getById(req.params.id)
  return res.json({ repack })
})

MainController.post('/', verifyToken,async (req, res) => {
  let data = req.body

  let fileUploadResult = await handleUpload(req.files, data.id, data.title)

  if(!fileUploadResult.result)
    return res.json({   
      result: 0,
      message: fileUploadResult.message
    })

  data.image = fileUploadResult.image
  data.file = fileUploadResult.file
  data.repacked_size = fileUploadResult.repacked_size

  if(!!data.id)
    return edit(data, result => {
      return res.json({ result })
    })

  return addOne(data, result => {
    return res.json({ result })
  })
})

MainController.delete('/', verifyToken, (req, res) => {
  let { target } = req.body

  return deleteOne(target, result => {
    if(!result)
      return res.json({ result })

    let { file, image } = result
    deleteFile({ file, image }, (result) => {
      return res.json({ result })
    })
  })
})


export default MainController