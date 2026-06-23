import Express from "express";
import { errorHandler } from "./middleware/errorHandler.ts";
import router from "./router/items.ts";
import { migrate } from "./config/migrate.ts";
import "dotenv/config";



const app = Express()
const PORT = process.env.PORT || 3000

//middleware
app.use(Express.json())

migrate()


//Routes
app.get('/health',(_req, res)=>{
    res.json({status:"OK"})
})
app.use('/items',router)

//error haldler
app.use(errorHandler)
app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})


export default app