const Phrase = require("../models/Phrase") 

const apiController = {

    async ping (req, res) {
        res.status(200).json({pong: true})
    },

    async random (req, res) {

        let nRand = Math.floor(Math.random() * 1000)
    
        res.status(200).json({number: nRand})
    },

    async nome (req, res) {

        let nome = req.params.nome
    
        res.status(200).json({nome: nome})
    },

    async createPhrase (req, res) {

        let author = req.body.author
        let txt = req.body.txt
    
        let newPhrase = await Phrase.create({
            author: author,
            txt: txt
        })
    
        let result = {
            id: newPhrase.id,
            author: newPhrase.author,
            txt: newPhrase.txt
        }
        
        res.status(201).json({data: result})
    },

    async listPhrases (req, res) {

        const list = await Phrase.findAll()

        res.status(200).json({data: list})
    },

    async getPhrase (req, res) {

        let id = req.params.id

        const phrase = await Phrase.findByPk(id)

        if(phrase==null){
            res.status(200).json({data: "Frase não existe/ou id invalido"})
            return
        }

        res.status(200).json({data: phrase})
    }

}

module.exports = apiController
