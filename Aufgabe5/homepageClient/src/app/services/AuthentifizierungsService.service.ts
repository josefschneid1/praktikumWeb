import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Person } from '../models/Person';

@Injectable()
export class AuthentifizierungsService {
    // Achtung: '/rest' ist wichtig für die Umleitung an den Apache-Server!
    // der Rest des Pfades kann variieren...
    private baseURL = '/rest';

    public constructor(private http: Http) {
    }

    public authentifiziere(benutzername: string, passwort: string): Promise<boolean> {
        const body = '{' +
            '\"benutzername\": \"' + benutzername + '\", ' +
            '\"passwort\": \"' + passwort + '\"' +
            '}';
        return this.http.post(this.baseURL + 'login', body)
        .toPromise()
        .then(() => true)       // http status code == 200 => true
        .catch(() => false);    // http status code != 200 => false
    }
}
