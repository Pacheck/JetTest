import Operator from '../model/operator';

class OperatorController { 

    async store(request, response){
        try{
            await Operator.create(req.body)
            .then(res => response.status(201).json({ message: 'Resource created! '}))
        }catch(err){
            response.status(400).json({ message: 'Error' })
        }
    }

    async index(request, response){
        await Operator.find({})
        .then(res => res.status(201).json({ message: 'Content created! '}))
        .catch(err => err.status(400).json({ message: 'Content not found' }));
    }

    async delete(request, response){
        await Operator.deleteOne({})
        .then(res => response.status(200).json({ message: 'Resource deleted!' }))
        .catch(err => response.status(400).json({ message: 'Content error'}));
    }

    async update(request, response){
        await Operator.updateOne({})
        .then(res => response.status(200).json({ message: 'Resource updated! '}))
        .catch(err => response.status(204).json({ message: 'No content found '}));
    }
}

export default new OperatorController();