import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from "../../models/user.interface";
import { USER_LIST } from '../../mocks/user.mock';
import { Repository } from "../../models/respository.interface";
import { REPOSITORY_LIST } from "../../mocks/repository.mock";

@Injectable()
export class GithubServiceProvider {

  private baseUrl = "https://api.github.com/users";
  private reposUrl = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError);
  }


  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError);
  }

  /*
    Finding the User in USER_LIST,equal to the username passed in.
    Returning the results as an Observable.
    */
  getMockUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  /*
  Finding the Respositories from within REPOSITORY_LIST,equal to the username passed in.
  Returning the results as an Observable.
  */
  getMockRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  private logData(response: Response) {
    console.log(response)
  }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.json().error || "Server error!");
  }

}
