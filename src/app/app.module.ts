import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';   
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ChartModule } from 'primeng/chart';
import { Dialog } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { IftaLabelModule } from 'primeng/iftalabel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { DetailClassesComponent } from './pages/detail-classes/detail-classes.component';
import { ClasseComponent } from './components/classe/classe.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DetailUseusComponent } from './pages/detail-useus/detail-useus.component';
import { DetailNotesComponent } from './components/detail-notes/detail-notes.component';
import { PostNoteComponent } from './components/post/post-note/post-note.component';
import { PostUserComponent } from './components/post/post-user/post-user.component';
import { PostMessageComponent } from './components/post/post-message/post-message.component';
import { AdminPComponent } from './pages/admin-p/admin-p.component';
import { AllNComponent } from './pages/all-n/all-n.component';
import { AllNTComponent } from './pages/all-n-t/all-n-t.component';
import { AllTNComponent } from './pages/all-t-n/all-t-n.component';
import { SelectMComponent } from './components/pop-up/select-m/select-m.component';
import { PostAdminComponent } from './components/post/post-admin/post-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    ClassesComponent,
    DetailClassesComponent,
    ClasseComponent,
    DetailUseusComponent,
    DetailNotesComponent,
    PostNoteComponent,
    PostUserComponent,
    PostMessageComponent,
    AdminPComponent,
    AllNComponent,
    AllNTComponent,
    AllTNComponent,
    SelectMComponent,
    PostAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ToggleSwitch,
    ButtonModule,
    Menu,
    PanelMenu,
    TableModule,
    CommonModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    HttpClientModule,
    MultiSelectModule,
    SelectModule,
    PaginatorModule,
    ChartModule,
    Dialog,
    StepsModule,
    IftaLabelModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    providePrimeNG({ 
      theme: {
          preset: Lara
      }
  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
