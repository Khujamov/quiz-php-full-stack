import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes;
  constructor(private apiSvc: ApiService) { }

  ngOnInit(): void {
    this.apiSvc.getQuizzes().subscribe( (res) => {
      this.quizzes = res;
    });
    this.apiSvc.getNewQuiz().subscribe(newQuiz => {
      this.quizzes.push(newQuiz);
    });
  }

}
