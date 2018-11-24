import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable()
export class SpeicherService {
    private imgPath = '/assets/img/';

    public constructor() {
    }

	// Lädt die Personendaten aus dem localStorage
    public ladePerson(): Person {
        let person: Person = null;

        /* hier Code ergänzen, nur dummy-Implementierung! */
        
        let personS: string = localStorage.getItem('person');
        if(personS !== null && personS !== '')
        {
            try
            {
                let personJS:any = JSON.parse(personS);
                person = new Person(personJS.name, personJS.picturePath, personJS.birthdate,personJS.bornIn, personJS.profession, personJS.username, personJS.password);
            }catch(e)
            {
                console.error('Fehler beim Parsen' + e);
            }
        }else
        {
            person = new Person(
				'Bart Simpson',
				this.imgPath + 'bart.jpeg',
				'2003-12-24',
				'Hollywood',
                'Sohn',
                'Hugo',
                '123'
		    );
        }	
        return person;
    }

	// Speichert die übergebenen Personendaten im localStorage
    public speicherePerson(person: Person): void {
        try {
            /* hier Code ergänzen */      
            localStorage.setItem('person', JSON.stringify(person));
        } catch (e) {
            console.error("SpeicherService.speicherePerson: error: " + e);
        }
    }
}
