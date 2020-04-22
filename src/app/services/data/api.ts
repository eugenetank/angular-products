import { AuthData } from '../../models/auth-data.model';
import { Observable } from 'rxjs';

interface Api {
  userRegister: (username: string, password: string) => Observable<AuthData>;
  userAuthenticate: (username: string, password: string) => Observable<AuthData>;
}

export default Api;

