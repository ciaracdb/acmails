import {Component} from '@angular/core';

@Component({
    selector: 'mails',
    templateUrl: 'templates/mails.html'
})

export class MailsComponent {
    constructor() {
        let SmtpClient = require('emailjs-smtp-client');
        var client = new SmtpClient();
    }
}
