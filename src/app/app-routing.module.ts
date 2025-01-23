import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverrideComponent } from './components/override/override.component';

const routes: Routes = [
  {
    path: '',
    component: OverrideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
