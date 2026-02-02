import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {TokenResponse} from '../types/Auth';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService
{
	http: HttpClient = inject(HttpClient);
	cookie: CookieService = inject(CookieService);
	baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/';

	token: string | null = null;
	refresh_token: string | null = null;

	isAuth() : boolean
	{
		if (!this.token) this.token = this.cookie.get('token');

		return !!this.token;
	}

	login(payload: { username: string, password: string })
	{
		const fd = new FormData();
		fd.append('username', payload.username);
		fd.append('password', payload.password);
		return this.http.post<TokenResponse>(
			`${this.baseApiUrl}token`,
			fd,
		).pipe(
			tap((response) =>
			{
				this.token = response.access_token;
				this.refresh_token = response.refresh_token;

				this.cookie.set('token', this.token);
				this.cookie.set('refresh_token', this.refresh_token);
			})
		);
	}
}
