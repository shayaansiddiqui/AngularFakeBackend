import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵElement, ɵValue} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {fakeBackendProvider} from "../helpers/fakebackend.interceptor";
import {first} from "rxjs";
import {AccountService} from "../_services/account.service";
import {AlertService} from "../_services/alert.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [
		// provider used to create fake backend
		fakeBackendProvider
	]
})
export class LoginComponent implements OnInit {

	form!: FormGroup;
	loading = false;
	submitted = false;


	constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private accountService: AccountService, private alertService: AlertService) {
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.form.invalid) {
			return;
		}

		this.loading = true;
		this.accountService.login(this.form.controls['username'].value, this.form.controls['password'].value)
			.pipe(first())
			.subscribe({
				next: () => {
					// get return url from query parameters or default to home page
					const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
					this.router.navigateByUrl(returnUrl);
				},
				error: (error: any) => {
					this.alertService.error(error);
					this.loading = false;
				}
			});
	}

	private checkLogin(username: ɵValue<ɵElement<string, null>> | undefined, password: ɵValue<ɵElement<string, null>> | undefined): boolean {
		console.log(username);
		console.log(password);
		if ((username === 'shayaan') && (password === 'password')) {
			return true;
		}
		return false;
	}
}
