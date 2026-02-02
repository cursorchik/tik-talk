import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../types/Profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService
{
	http: HttpClient = inject(HttpClient);
	baseApiUrl: string = 'https://icherniakov.ru/yt-course/';

	getTestAcount()
	{
		return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
	}
}
