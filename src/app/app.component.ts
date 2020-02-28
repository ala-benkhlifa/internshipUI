import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  providers;

  constructor(private http: HttpClient) {
  }

  getProviders() {
    this.providers = this.http.get(`${environment.baseURL}/providers`);
  }

  ngOnInit() {
    this.getProviders();
  }

}
