import express, { Request, Response } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import apiRoutes from './routes/api'
import { sequelize } from './instances/pg'

dotenv.config()

const server = express()

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

server.use('/api', apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404)
    res.json({error: "url não encontrada"})
})

server.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT}`)

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})
