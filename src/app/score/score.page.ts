import { Component, OnInit } from '@angular/core';
import { ScoreInfo } from '../score';


@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  grade: number = 0;
  term: number = 1;
  //假数据，页面展示用
  scores: ScoreInfo[] = [
    {course: "操作系统理论与实践", credit: 3, score: 83},
    {course: "软件工程理论与实践", credit: 3, score: 78},
    {course: "监护设计", credit: 3, score: 95},
    {course: "数字媒体后期制作", credit: 3, score: 92},
    {course: "PHP网站开发", credit: 3, score: 86},
    {course: "数字媒体项目实践", credit: 4, score: 84}
  ];

  termChange():void {
    console.log(this.term);
  }

  gradeChange(g: number):void {
    this.grade = g;
  }

  constructor() { 


  }

  ngOnInit() {
  }

}
