import {Component, inject} from '@angular/core';
import {IProfile} from '../../data/interfaces/IProfile';
import {ProfileService} from '../../data/services/profile.service';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.html',
	styleUrl: './search-page.scss',
	imports: [ProfileCard]
})
export class SearchPage {
	profileService = inject(ProfileService);
	profiles: IProfile[] = [];

	constructor()
	{
		this.profileService
			.getTestAcount()
			.subscribe((profiles) => {
				console.log('Profiles loaded:', profiles);
				this.profiles = [...profiles]
			})
	}
}
