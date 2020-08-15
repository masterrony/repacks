export const ServerUrl = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/' : '/'
export const ApiUrl = `${ServerUrl}api/`
export const ImageUrl = `${ServerUrl}uploads/images/`
export const DownloadUrl = `${ServerUrl}download/`
