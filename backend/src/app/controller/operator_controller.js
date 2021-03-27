import Operator from '../model/operator';

class OperatorController { 

    async store(request, response){
        try{
            await Operator.create(req.body)
            .then(res => response.status(201).send({ message: 'Resource created! '}))
        }catch(err){
            response.status(400).send({ message: 'Error' })
        }
    }

    async index(request, response){
        await Operator.find({})
        .then(res => res.status(201).send({ message: 'Content created! '}))
        .catch(err => err.status(400).send({ message: 'Content not found' }));
    }

    async delete(request, response){
        await Operator.deleteOne({})
        .then(res => response.status(200).send({ message: 'Resource deleted!' }))
        .catch(err => response.status(400).send({ message: 'Content error'}));
    }

    async update(request, response){
        await Operator.updateOne({})
        .then(res => response.status(200).send({ message: 'Resource updated! '}))
        .catch(err => response.status(204).send({ message: 'No content found '}));
    }
}

export default new OperatorController();