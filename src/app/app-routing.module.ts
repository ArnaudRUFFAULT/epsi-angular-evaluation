import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component";

const routes: Routes = [
    {path: "test", component: TestComponent},
    {path: "", pathMatch: 'full' , redirectTo: ''}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }