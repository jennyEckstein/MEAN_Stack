import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
})

export class MessageInputComponent implements OnInit{
	message: Message;

	constructor(private messageService: MessageService){}

	onSubmit(form: NgForm){
		console.log(form);
		/*if (typeof form === "undefined"){
			this.message.content = "BIG FAIL";
		}else{*/
		if(typeof this.message !== "undefined"){
			//Edit
			console.log("Message " + form.value.context);
			this.message.content = form.value.context;
			console.log("edit " + this.message);
			this.message = null;
		}else{

			const message = new Message(form.value.content, 'Mark');
		this.messageService.addMessage(message)
			.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
			console.log("save " + this.message);
		}	
		//}	
		form.resetForm();
	}

	onClear(form: NgForm){
		this.message = null;
		form.resetForm();
	}

	ngOnInit(){
		this.messageService.messageIsEdit.subscribe(
				(message: Message) => this.message = message
			);
	}
	
}