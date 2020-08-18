import { join } from 'path'
import { unlink, existsSync, fstat } from "fs";
import { ExpansionPanel } from '@material-ui/core';

const imageDir = 'images'
const fileDir = 'repacks'
const uploadDir = join(__dirname, '../public/uploads')

export const handleUpload = (files, isEdit, title) => {
  let result = {
    result: 0,
    image: null,
    file: null,
    message: ''
  }
  
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
      result = { ...result, message: 'You must upload both image and file.'}
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

export const deleteFile = ({ file, image }, cb) => {
  const filePath = join(uploadDir, fileDir, file)
  const imagePath = join(uploadDir, imageDir, image)

  if(existsSync(filePath)) 
    unlink(filePath, err => {
      if(!!err) return cb(0)
      if(existsSync(imagePath))
        unlink(imagePath, err => {
          if(!!err) return cb(0)
          return cb(1)
        })
    })
}

const uploadFile = (file, dir, title) => {
  let newName = title + Date.now() + file.name
  newName = newName.trim()
  let dest = join(uploadDir, dir, newName)

  if(dest.indexOf('images') > 0) {
    if(file.mimetype.indexOf('image') < 0)
      return { result: 0, message: 'Image must be image file.' }
  }

  file.mv(dest, (err) => {
    if(!!err)
      throw err
  })

  return { result: 1, name: newName }
}