import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScoreInfo } from './score';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreInfosUrl = 'api/scoreInfos';
  queryScoreInfos(term: number, grade: number): Observable<ScoreInfo[]> {
    let params = new HttpParams().set("term", term.toString()).set("grade", grade.toString());
    return this.http.get<ScoreInfo[]>(this.scoreInfosUrl);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
