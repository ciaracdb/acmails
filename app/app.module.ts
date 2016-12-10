import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {RouterModule}   from '@angular/router';
import {HttpModule}    from '@angular/http';

import {AppComponent} from './components/app.component';
import {MailsComponent} from './components/mails.component'

import {IMAPService} from './services/IMAPService'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: MailsComponent
            },
        ])
    ],
    declarations: [
        AppComponent,
        MailsComponent,
    ],
    providers: [
        IMAPService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
