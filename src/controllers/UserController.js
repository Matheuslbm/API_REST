import User from '../models/User';

class UserController {
  async store(req, res) {
    const novoUser = await User.create({
      nome: 'Bruna',
      email: 'bruna@gmail.com',
      password: '1234567',
    });
    res.json(novoUser);
  }
}

export default new UserController();
