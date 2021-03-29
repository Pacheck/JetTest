import Client from '../model/client';

class ClientController {
    async index(request, response){
        try{
            const client = await Client.find({});
            return response.status(200).json(client);
        }catch(err){
            return response.status(400).json({ message: 'Error at showlist' })
        }
    }

    async store(request, response){
        const { body } = request;
        console.log(body)
        try{
            const client = await Client.create(body);
            response.status(201).json(client);
        }catch(err){
            return response.status(400).json({ message: 'Error at store client '})
        }
    }

    async update(request, response){
        const { id } = request.params;
        const { body } = request;
        try {
            const client = await Client.updateOne({ id }, body)
            response.status(200).json(client)
        } catch (err) {
            response.status(204).json({ message: 'No content found '})
        }
    }

    async delete(request, response){
        const { id } = request.params;
        try {
            const client = await Client.deleteOne({ id });
            return response.status(200).json(client);
        } catch (err) {
            return response.status(400).json({ message: 'Error at delete'})
        }
    }
}

export default new ClientController();
