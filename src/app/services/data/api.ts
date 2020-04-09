import { AuthData } from '../../models/auth-data.model.ts';

interface Api {
  userRegister: (username: string, password: string) => AuthData;
  userAuthenticate: (username: string, password: string) => AuthData;
}

export default Api;

