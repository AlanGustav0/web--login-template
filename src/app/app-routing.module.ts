import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch:'full',
  },
  {
    path:'welcome',
    loadChildren:() => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path:'login',
    loadChildren:() => import('./signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path:'cadastro',
    loadChildren:() => import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
