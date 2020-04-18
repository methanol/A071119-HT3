import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { Routes } from './config';
import { WorkspaceComponent } from './workspace/workspace.component';


const routes: Route[] = [
  { 
    path: Routes.WORKSPACE, 
    component: WorkspaceComponent 
  },
  { 
    path: Routes.LOGIN, 
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  }, 
  { 
    path: Routes.SIGNUP, 
    loadChildren: () => import('./sign/sign.module').then(mod => mod.SignModule),
  },
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
