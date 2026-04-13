const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            crypto.randomBytes(16, (err, hash) => {
                if (err) return cb(err);
                const ext = path.extname(file.originalname).toLowerCase();
                cb(null, `${hash.toString('hex')}${ext}`);
            });
        }
    })
};