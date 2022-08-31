import { UserService }  from '../../services/index.services.js';
class UserController{
    async createUser(req, res){

        const data =  { 
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const user = await UserService.create(data);
        return res.status(201).send({
            success: true,
            body: 'Your account has beeen created',
            user
        })
    }
}

export default new UserController();
