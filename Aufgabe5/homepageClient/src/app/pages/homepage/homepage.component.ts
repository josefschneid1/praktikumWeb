import { Component, OnInit } from '@angular/core';
import { SpeicherService } from '../../services/SpeicherService.service';
import { AuthentifizierungsService } from '../../services/AuthentifizierungsService.service';
import { Person } from './../../models/Person';

declare var jQuery: any;

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
    public me: Person;
    public birthdateAsString: string;
    public steckBriefGesperrt: boolean;
    public lastBirthdate: string;
    public fehlermeldung: string = '';

    // Dialog-Attribute
    public username: string;
    public password: string;

    public constructor(private speicherService: SpeicherService, 
            private authentifizierungsService: AuthentifizierungsService) {
        this.me = new Person('', '', '', '', '');
        this.speicherService.ladePerson().then((person: Person) => {
            this.me = person;
            this.lastBirthdate = this.me.birthdate;
            this.username = '';
            this.password = '';
            this.fehlermeldung = '';
            this.steckBriefGesperrt = true;
        });
    }

    public login(): void {
        this.fehlermeldung = '';

        this.authentifizierungsService.authentifiziere(this.username, this.password).then((success) => {
            if (success) {
                this.steckBriefAendern();
                jQuery('#loginDialog').modal('hide');
            } else {
                this.fehlermeldung = 'Fehlerhafte Login-Daten!';
            }
        });
    };

    public cancelLogin(): void {
        jQuery('#loginDialog').modal('hide');
        this.fehlermeldung = '';
    }

    public steckBriefAendern(): void {
        // birthdate überprüfen
        if (this.me.birthdate === null || this.me.birthdate === '') {
            this.me.birthdate = this.lastBirthdate; // gültigen Wert herstellen
        } else {
            this.lastBirthdate = this.me.birthdate;
        }

        if (!this.steckBriefGesperrt) {
            this.steckBriefGesperrt = true;
            this.speicherService.speicherePerson(this.me).then(() => {});
        } else {
            this.steckBriefGesperrt = false;
        }
    }

    ngOnInit(): void {
    }
}
