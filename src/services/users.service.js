import apiClient from '../helpers/apiClients';
class UserService {
    getAllUsers = () => apiClient().get('users');
}

export default new UserService();