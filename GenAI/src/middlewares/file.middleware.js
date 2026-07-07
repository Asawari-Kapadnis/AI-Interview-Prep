const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize:2*1024*1024 //3mb
    }
})

module.exports = upload