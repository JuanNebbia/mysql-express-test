import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/index', indexRoutes)
app.use('/api/employees', employeesRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app