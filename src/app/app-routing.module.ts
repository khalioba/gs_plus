import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { DetailClassesComponent } from './pages/detail-classes/detail-classes.component';

const routes: Routes = [
   // Page de connexion (route par défaut)
   { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
 
   // Chemin '/home', avec des routes enfants
   {
     path: 'home',
     component: HomeComponent,
     children: [
       { path: '', component: DashboardComponent },
       { path: 'classes', component: ClassesComponent },
       { path: 'detailclasses', component: DetailClassesComponent },
     ],
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
