import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeOverrideComponent } from './components/override/override.component';

const routes: Routes = [
  {
    path: '',
    component: TimeOverrideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
