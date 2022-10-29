import { Request, Response } from "express"
import { Phrase } from "../models/Phrase"

export const ping = (req: Request, res: Response) => {
    res.status(200).json({pong: true})
}

export const random = (req: Request, res: Response) => {

    let nRand: number = Math.floor(Math.random() * 1000)

    res.status(200).json({number: nRand})
}

export const nome = (req: Request, res: Response) => {

    let nome: string = req.params.nome

    res.status(200).json({nome: nome})
}

export const createPhrase = async (req: Request, res: Response) => {

    let author: string = req.body.author
    let txt: string = req.body.txt

    let newPhrase = await Phrase.create({
        author: author,
        txt: txt
    })

    let result = {
        id: newPhrase.id,
        author: newPhrase.author,
        txt: newPhrase.txt
    }
    
    res.status(200).json({data: result})
}
