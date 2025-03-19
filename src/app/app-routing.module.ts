import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { DetailClassesComponent } from './pages/detail-classes/detail-classes.component';
import { DetailUseusComponent } from './pages/detail-useus/detail-useus.component';
import { AdminPComponent } from './pages/admin-p/admin-p.component';
import { AllNComponent } from './pages/all-n/all-n.component';
import { AllTNComponent } from './pages/all-t-n/all-t-n.component';
import { AllNTComponent } from './pages/all-n-t/all-n-t.component';
import { authGuard } from './guards/auth.guard';
import { DetailAdminPComponent } from './pages/detail-admin-p/detail-admin-p.component';

const routes: Routes = [
   // Page de connexion (route par défaut)
  //  { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
 
   // Chemin '/home', avec des routes enfants
   { 
     path: '', 
     component: HomeComponent, canActivate: [authGuard] ,
     children: [
       { path: '', component: DashboardComponent, title: 'Home' },
       { path: 'detail_users/:id', component: DetailUseusComponent, title: 'detail éleve' },
       { path: 'classes', component: ClassesComponent, title: 'classes' },
       { path: 'detailclasses/:id', component: DetailClassesComponent, title: 'detail classes' },
       { path: 'prof/:id', component: DetailAdminPComponent, title: 'detail prof' },
       { path: 'Prof', component: AdminPComponent },
       { path: 'note', component: AllNComponent },
       { path: 'trimestre', component: AllTNComponent },
       { path: 'notes/:classId/:subjectId', component: AllNTComponent },
      //  { path: 'notes', component: AllNTComponent },
 
     ],
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
