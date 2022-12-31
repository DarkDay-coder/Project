const multer = require('multer');

const ALLOWED_EXTS = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'bmp', 'webp'];

const diskStorage = multer.diskStorage({
   destination: (req, file, cb) => {
      let path = process.env.UPLOAD_PATH;
      cb(null, path);
   },
   filename: (req, file, cb) => {
      let name = Date.now() + file.originalname;

      cb(null, name);
   },
});
const imageFilter = (req, file, cb) => {
   let ext = file.originalname.split('.');
   ext = ext[ext.length - 1]; // JPG
   if (ALLOWED_EXTS.includes(ext.toLowerCase())) {
      cb(null, true);
   } else {
      cb({ msg: 'Invalid File format', status: 400 }, null);
   }
};
const fileUploader = multer({
   storage: diskStorage,
   fileFilter: imageFilter,
   limits: {
      fileSize: 100000,
      files: 20,
   },
});

module.exports = fileUploader;
