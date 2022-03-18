//buat fungsi cek jika object kosong
function isEmpty(obj){
    return !obj || Object.keys(obj).length === 0;

}

module.exports = (req, res, next) => {
    //kl obj req.body nya kosong kita bakalan skip middleware ini
    if (isEmpty(req.body)) next('route');


    //kalo obj req.body gk kosong kita nampilin body request
    console.log("Body: ",req.body);
    next();
};