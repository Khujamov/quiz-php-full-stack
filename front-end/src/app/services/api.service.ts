import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Question} from '../model/question';
import {Quiz} from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  questionUrl: string;
  quizUrl: string;
  private selectedQuestion = new Subject<Question>();
  private selectedQuiz = new Subject<Quiz>();
  private newQuiz = new Subject<Quiz>();
  private newQuestion = new Subject<Question>();
  constructor(private http: HttpClient) {
    this.questionUrl = 'http://localhost:8000/api/questions';
    this.quizUrl = 'http://localhost:8000/api/quizzes';
  }


  // Question
  selectQuestion(question: Question) {
    this.selectedQuestion.next(question);
  }

  getSelectedQuestion() {
    return this.selectedQuestion.asObservable();
  }

  getQuestions(quizId) {
    return this.http.get(`${this.questionUrl}/${quizId}`);
  }

  postQuestion(question: Question) {
    this.http.post(this.questionUrl, question)
      .subscribe((res) => {
        this.addNewQuestion(res as Question);
      });
  }

  putQuestion(question: Question) {
    this.http.put(`${this.questionUrl}/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getNewQuestion() {
    return this.newQuestion.asObservable();
  }

  addNewQuestion(question: Question) {
    return this.newQuestion.next(question);
  }

  // Quiz
  selectQuiz(quiz: Quiz) {
    this.selectedQuiz.next(quiz);
  }

  getSelectedQuiz() {
    return this.selectedQuiz.asObservable();
  }

  getQuizzes() {
    return this.http.get(this.quizUrl);
  }

  postQuiz(quiz: Quiz) {
    this.http.post(this.quizUrl, quiz)
      .subscribe((res) => {
        this.addNewQuiz(res as Quiz);
        console.log(res);
      });
  }

  putQuiz(quiz: Quiz) {
    this.http.put(`${this.quizUrl}/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getNewQuiz() {
    return this.newQuiz.asObservable();
  }

  addNewQuiz(quiz: Quiz) {
    return this.newQuiz.next(quiz);
  }
}
