import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SpeicherService } from './services/SpeicherService.service';
import { AuthentifizierungsService } from './services/AuthentifizierungsService.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomepageComponent
    ],
    providers: [ SpeicherService, AuthentifizierungsService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
