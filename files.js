var express = require("express"),
    fs = require("fs"),
    multer = require('multer'),
    router = express.Router(),
    path = process.cwd();
    
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path+'/storage/');
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now()+ '-' + file.originalname);
  }
});

var upload = multer({
  storage: storage
}).single('userFile');

router.route('/')
    .get(function (req, res) {
        res.sendFile(path + '/public/file.html');
    }).post(upload,function(req, res){
        /*fs.rename(req.files.userFile.path, path+'/storage'+req.files.userFile.fileName,function(err){
            if(err) console.error(err);
        });*/
         res.send("ok");
        console.log(req.file);
       
    });

module.exports = router;