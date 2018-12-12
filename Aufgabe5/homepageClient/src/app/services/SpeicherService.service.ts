import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Person } from '../models/Person';

@Injectable()
export class SpeicherService {
    // Achtung: '/rest' ist wichtig für die Umleitung an den Apache-Server!
    // der Rest des Pfades kann variieren...
    private baseURL = '/rest';

    public constructor(private http: Http) {
    }

    public ladePerson(): Promise<Person> {
        return this.http.get(this.baseURL + 'person')
        .toPromise()
        .then(response => {
            const responseJson = response.json();
            const person: Person = new Person(responseJson.name,
                responseJson.picturePath,
                responseJson.birthdate,
                responseJson.bornIn,
                responseJson.profession);

            return person;
        })
        .catch(this.handleError);
    }

    public speicherePerson(person: Person): Promise<Person> {
        return this.http.put(this.baseURL + 'person', person)
        .toPromise()
        .then(() => person)
        .catch(this.handleError);
    }

    public login(benutzername: string, passwort: string): Promise<boolean> {
        const body = '{' +
            '\"benutzername\": \"' + benutzername + '\", ' +
            '\"passwort\": \"' + passwort + '\"' +
            '}';
        return this.http.post(this.baseURL + 'login', body)
        .toPromise()
        .then(() => true)
        .catch(() => false);
    }

    public handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
