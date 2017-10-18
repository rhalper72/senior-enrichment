
//FILE IS NOT CURRENTLY BEING USED. FIGURE OUT WHERE TO PUT THE ERROR HANDLING (API?) AND GET RID OF THIS FILE.
const router = require('express').Router();


router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));

router.use(function (req, res){
    res.status(404).end();
})

module.exports = router;
