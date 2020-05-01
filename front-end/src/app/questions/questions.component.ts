import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  constructor(private apiSvc: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    this.apiSvc.getQuestions(quizId).subscribe( (res) => {
      this.questions = res;
    });
    this.apiSvc.getNewQuestion().subscribe(question => {
      this.questions.push(question);
    });
  }
}
