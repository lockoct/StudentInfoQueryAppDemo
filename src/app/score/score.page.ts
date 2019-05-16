import { Component, OnInit } from '@angular/core';
import { ScoreInfo } from '../score';
import { ScoreService } from '../score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  grade: number = 0;
  term: number = 1;
  scores: ScoreInfo[];

  termChange():void {
    
  }

  gradeChange(g: number):void {
    this.grade = g;
  }

  getScores(): void{
    this.scoreService.queryScoreInfos(this.term, this.grade).subscribe(scores => this.scores = scores);
  }

  constructor(
    private scoreService: ScoreService
  ) { 

  }

  ngOnInit() {
    this.getScores();
  }

}
