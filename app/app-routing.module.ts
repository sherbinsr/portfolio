import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
