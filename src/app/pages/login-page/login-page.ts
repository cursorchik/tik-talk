import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../data/services/auth.service';
import {delay, from, map, take, tap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
	imports: [
		ReactiveFormsModule
	],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage
{
	auth: AuthService = inject(AuthService);
	router: Router = inject(Router);

	form = new FormGroup({
		username	: new FormControl<string|null>(null, Validators.required),
		password	: new FormControl<string|null>(null, Validators.required)
	});

	onSubmit()
	{
		if (this.form.valid)
		{
			//@ts-ignore
			this.auth.login(this.form.value)
			.subscribe((response) =>
			{
				this.router.navigate(['']).then();
				console.log(response);
			});
		}
	}
}
