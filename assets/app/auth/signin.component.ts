import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: 'app-signuin',
	templateUrl: './signin.component.html'
})

export class SigninComponent {
	myForm: FormGroup;

	onSubmit(){
		console.log(this.myForm);
		this.myForm.reset();
	}

	ngOnInit(){
		this.myForm = new FormGroup({
			email: new FormControl(null, [
					Validators.required//,
					//Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
				]),
			password: new FormControl(null, Validators.required)

		});
	}
}