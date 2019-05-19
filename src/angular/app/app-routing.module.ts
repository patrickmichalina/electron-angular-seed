import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const useHash = navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
