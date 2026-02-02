import {Component, inject} from '@angular/core';
import {Profile} from '../../data/types/Profile';
import {ProfileService} from '../../data/services/profile.service';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.html',
	styleUrl: './search-page.scss',
	imports: [ProfileCard]
})
export class SearchPage
{
	profiles: Profile[] = [];
	profileService = inject(ProfileService);

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
