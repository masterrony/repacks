import Repack from '../schemas/Repack'

export const getAll = async keyWord => {
  let repacks = []
  if(!keyWord)
    repacks = await Repack.find({})
  else
    repacks = await Repack.find({ title: { "$regex": keyWord, "$options": "i" } })

  return repacks
}

export const getById = async (id) => {
  let repack = await Repack.findById(id)
  return repack
}

export const addOne = ({ 
  title, 
  tags, 
  companies, 
  languages, 
  detail,
  original_size, 
  repacked_size,
  image,
  file 
}, cb) => {
  let repack = new Repack({
    title,
    tags,
    companies,
    languages,
    detail,
    original_size,
    repacked_size,
    image,
    file
  })
  
  repack.save( err => {
    if(!!err) return cb(0)
    return cb(1)
  })
}

export const edit = async ({
  id,
  title,
  tags,
  companies,
  languages,
  detail,
  original_size,
  repacked_size,
  image,
  file
}, cb) => {
  let repack = await Repack.findById(id)

  repack.title = title
  repack.tags = tags
  repack.companies = companies
  repack.languages = languages
  repack.detail = detail
  repack.original_size = original_size
  if(!!image)
    repack.image = image
  if(!!file) {
    repack.repacked_size = repacked_size
    repack.file = file
  }

  repack.save(err => {
    if(!!err) return cb(0)
    return cb(1)
  })
}

export const deleteOne = (id, cb) => {
  Repack.findByIdAndRemove(id, err => {
    if(!!err) return cb(0)
    return cb(1)
  })
}