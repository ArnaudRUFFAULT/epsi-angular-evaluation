import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from "./quiz/quiz.component";
import { ScoreComponent } from "./score/score.component";

const routes: Routes = [
    {path: "quiz", component: QuizComponent},
    {path: "quiz/score", component: ScoreComponent},
    {path: "", pathMatch: 'full' , redirectTo: '/'}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }