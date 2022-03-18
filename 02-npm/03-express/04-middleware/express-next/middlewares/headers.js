module.exports = (req, res, next) => {
    // tampilkan beberapa data nyang di saring oleh body-parser
    console.log("METHOD: ", req.method);
    console.log("URL path: ", req.path);
    console.log("Headers: ", req.headers);

    //jangan lup bikin next() biar bisa nambahin ke middleware selanjutnya
    next(); 
}