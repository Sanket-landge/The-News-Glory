import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //NewsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=787caa6419a9491490a09559d7a51e27";

  //TechNewsApiUrl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=787caa6419a9491490a09559d7a51e27";

  //BusinessNewsApiUrl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=787caa6419a9491490a09559d7a51e27"

  //EntertainmentApiUrl
  entertainmentApiUrl =  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=787caa6419a9491490a09559d7a51e27";

  //topHeading function
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  //technews function
  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  //businessnews function
  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }

  //entertainmentnews function
  entertainmentNews():Observable<any>{
    return this._http.get(this.entertainmentApiUrl);
  }
}
