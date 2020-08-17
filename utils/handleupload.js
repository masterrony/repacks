import { join } from 'path'

export const handleUpload = (files, isEdit, title) => {
  let result = {
    result: 0,
    image: null,
    file: null,
    message: ''
  }

  const imageDir = 'images'
  const fileDir = 'repacks'
  
  let uploadResult = {}

  if(!!isEdit) {
    if(!files) {
      result = { ...result, result: 1 }
      return result
    }

    if(!!files.image) {
      uploadResult = uploadFile(files.image, imageDir, title)
      if(!uploadResult.result) {
        result = { ...result, message: uploadResult.message }
        return result
      }
      result = { ...result, result: 1, image: uploadResult.name }
    }

    if(!!files.file) {
      uploadResult = uploadFile(files.file, fileDir, title)
      if(!uploadResult.result) {
        result = { ...result, result: 0, message: uploadResult.message }
        return result
      }
      result = { ...result, result: 1, file: uploadResult.name, repacked_size: files.file.size }
    }

    return result
  } else {
    if(!files || Object.keys(files).length <= 1) {
      result = { ...result, message: 'You must upload both image and file'}
      return result
    }

    uploadResult = uploadFile(files.image, imageDir, title)
    if(!uploadResult.result) {
      result = { ...result, message: uploadResult.message }
      return result
    }
    result = { ...result, result: 1, image: uploadResult.name }
    
    uploadResult = uploadFile(files.file, fileDir, title)
    if(!uploadResult.result) {
      result = { ...result, result: 0, message: uploadResult.message }
      return result
    }
    result = { ...result, result: 1, file: uploadResult.name, repacked_size: files.file.size }

    return result
  }
}

const uploadFile = (file, dir, title) => {
  let newName = title + Date.now() + file.name
  let dest = join(__dirname, 'public/uploads', dir, newName)

  if(dest.indexOf('images') > 0) {
    if(file.mimetype.indexOf('image') < 0)
      return { result: 0, message: 'Image must be image file' }
  } else if(dest.indexOf('repacks') > 0) {
    if(file.mimetype.indexOf('zip') < 0)
      return { result: 0, message: 'File must be zip file' }
  }

  file.mv(dest, (err) => {
    if(!!err)
      throw err
  })

  return { result: 1, name: newName }
}