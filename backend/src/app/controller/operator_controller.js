import Operator from '../model/operator';

class OperatorController { 

    async store(req, res){
        await Operator.create(req.body)
        .then(res => res.status().json({ message: '' }))
        .catch(err => res.status().json({ message: '' }))
    }

    async index(req, res){
        await Operator.find({})
        .then(res => res.status(201).json({ message: 'Content created! '}))
        .catch(err => res.status(400).json({ message: 'Could not create content' }));
    }

    async delete(req, res){
        await Operator.deleteOne({})
        .then(res => res.status(200).json({ message: 'Resource deleted!' }))
        .catch(err => res.status(400).json({ message: 'Content error'}));
    }

    async update(req, res){
        await Operator.updateOne({})
        .then(res => res.status(200).json({ message: 'Resource updated! '}))
        .catch(err => res.status(204).json({ message: 'No content found '}));
    }
}

export default new OperatorController();