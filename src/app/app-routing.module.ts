import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Routes } from './config';
//import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { WorkspaceComponent } from './workspace/workspace.component'


const routes: Route[] = [
  //{ path: Routes.LOGIN, component: LoginComponent },
  // {
  //   path: Routes.LOGIN,
  //   loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  // },
  //{ path: Routes.SIGNUP, component: SignComponent },
  { path: Routes.WORKSPACE, component: WorkspaceComponent }, //TODO - add workspace guard
  { path: Routes.LOGIN, loadChildren: "./login/login.module#LoginModule"}, 
  { path: Routes.SIGNUP, loadChildren: "./sign/sign.module#SignModule"}, 
  {
    path: '**',
    redirectTo: Routes.SIGNUP
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
