import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Question} from '../model/question';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  question = new Question();
  subscription: Subscription;
  constructor(private apiSvc: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.question.quizId = this.route.snapshot.paramMap.get('quizId');
    this.subscription = this.apiSvc.getSelectedQuestion().subscribe((q: Question) => {
      this.question = q;
    });
  }

  onSubmit() {
    if (this.question.id) {
        this.apiSvc.putQuestion(this.question);
    }
    else {
      this.apiSvc.postQuestion(this.question);
    }
    this.resetQuestion();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  resetQuestion() {
    this.question = new Question();
  }
}
