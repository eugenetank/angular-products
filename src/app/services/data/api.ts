import { AuthData } from '../../models/auth-data.model';
import { Observable } from 'rxjs';


export enum APIList {
  Smk = 'SMK',
}

export interface Api {
  userRegister: (username: string, password: string) => Observable<AuthData>;
  userAuthenticate: (username: string, password: string) => Observable<AuthData>;
}



