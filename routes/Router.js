import express from "express";
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('home')
})
try {
    
} catch (error) {
    
}
router.get('/varice',(req,res)=>{
    res.render('varice')
})
router.get('/arteroscleroza',(req,res)=>{
    res.render('arteroscleroza')
})
router.get('/hipertensiune',(req,res)=>{
    res.render('hipertensiune')
})
router.get('/infarct',(req,res)=>{
    res.render('infarct')
})
router.get('/accident',(req,res)=>{
    res.render('accident')
})
router.get('/aritmia',(req,res)=>{
    res.render('aritmia')
})
router.get('/insuficienta',(req,res)=>{
    res.render('insuficienta')
})

export default router