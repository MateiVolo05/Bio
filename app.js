import express from "express"
import router from "./routes/Router.js"

const app=express()
const port=process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/',router)

app.listen(port,()=>{
    console.log("Working")
})