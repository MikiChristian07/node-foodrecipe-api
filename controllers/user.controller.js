/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import _ from 'lodash';
import bcrypt from 'bcrypt';
import { UserService } from '../../services/index.services.js';

class UserController {
    async createUser(req, res) {
        // Check if user exists in db
        const existUser = await UserService.findByemail(req.body.email);

        if (!_.isEmpty(existUser)) {
            res.status(404).send({
                success: false,
                body: 'This user account already exists'
            });
        }

        // First hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        /*
        *   Take in the email and password from the body
        *   User data request
        */
        const data = {
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        };

        // If user profile does not exist
        const user = await UserService.create(data);
        return res.status(201).send({
            success: true,
            body: 'Your account has beeen successfully created',
            user
        });
    }

    async loginUser(req, res) {
        // Check if the user exists in the db
        const user = await UserService.findByemail(req.body.email);
        if (_.isEmpty(user)) {
            return res.status(404).send({
                success: false,
                body: 'user does not exist'
            });
        }

        // Verify user password if the password exists
        const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!verifyPassword) {
            return res.status(400).send({ success: false, message: 'email or password is invalid' });
        }

        // Create a token for the user if verified
        const token = user.generateAuthToken();

        return res.status(200).send({
            success: true,
            body: {
                message: 'user logged in successfully',
                token,
                data: user
            }
        });
    }
}

export default new UserController();
