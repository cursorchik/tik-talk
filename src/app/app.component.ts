import {Component, inject, signal} from '@angular/core';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {ProfileService} from './data/services/profile.service';
import {IProfile} from './data/interfaces/IProfile';
import {RouterOutlet} from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [ProfileCard, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class App
{
	profileService = inject(ProfileService);
	profiles: IProfile[] = [];

	constructor()
	{
		this.profileService.getTestAcount()
			.subscribe((profiles) => {
				console.log(profiles);
				this.profiles = profiles
			})
	}
}
