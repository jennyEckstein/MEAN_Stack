import { Component } from "@angular/core";
import { Message } from './message.model';

@Component({
	selector: 'app-message-list',
	template: `
		<div class="col-md-8 col-md-offset-2">
			<app-message *ngFor="let msg of messages"
				[message]="msg"
				(editClicked)="message.content = $event"></app-message>
		</div>
	`
})

export class MessageListComponent{
	 messages: Message[] = [
    new Message('Note', 'Jenny'),
    new Message('Task', 'Jenny'),
    new Message('Alert', 'Jenny')
    ]
}