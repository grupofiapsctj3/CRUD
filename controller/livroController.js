import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros (req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com Sucesso!", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ messsage: `${erro.message} - falha ao cadastrar livro.`})
        }
                      
    };

    static async listaLivroPorID (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ messsage: `${erro.message} - falha ao encontrar livro.`})
        }
    };

    static async updateLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({messsage: "Livro Atualizado!"});
        } catch (erro) {
            res.status(500).json({ messsage: `${erro.message} - falha ao atualizar livro.`})
        }
    }

    static async deleteLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({messsage: "Livro excluido!"});
        } catch (erro) {
            res.status(500).json({ messsage: `${erro.message} - falha ao excluir livro.`})
        }
    }
};

export default LivroController;

