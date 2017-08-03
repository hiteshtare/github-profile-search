import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from "../../providers/github-service/github.service";
import { User } from "../../models/user.interface";
import { Repository } from "../../models/respository.interface";

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;

  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private githubServiceProvider: GithubServiceProvider) {
  }

  getUserInformation(): void {
    this.githubServiceProvider.getUserInformation(this.username).subscribe((resp: User) => {
      this.user = resp;
    });

    this.githubServiceProvider.getRepositoryInformation(this.username).subscribe((resp: Repository[]) => {
      this.repositories = resp;
    });

    // this.githubServiceProvider.getMockUserInformation(this.username).subscribe((resp: User) => {
    //   this.user = resp;
    // });

    // this.githubServiceProvider.getMockRepositoryInformation(this.username).subscribe((resp: Repository[]) => {
    //   this.repositories = resp;
    // });
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');

    if (this.username)
      this.getUserInformation();
  }

}
