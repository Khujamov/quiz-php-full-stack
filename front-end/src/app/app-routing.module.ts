import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {QuestionsComponent} from './questions/questions.component';
import {HomeComponent} from './home/home.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent},
  { path: 'question/:quizId', component: QuestionComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'quiz', component: QuizComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
