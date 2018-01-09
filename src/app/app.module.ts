import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { routing }  from './app.routing';
import { SubmodulesComponent } from './admin/submodules/submodules.component';
import { NameFilterPipe } from './name-filter.pipe';
import { UpdateAssessmentComponent } from './admin/update-assessment/update-assessment.component';
import { AddAssessmentComponent } from './admin/add-assessment/add-assessment.component';
import { FormsModule } from '@angular/forms';
import { AssessmentsService } from './assessments-service';
import { UpdateSubmodulesComponent } from './admin/submodules/update-submodules/update-submodules.component';
import { AddSubmodulesComponent } from './admin/submodules/add-submodules/add-submodules.component';
import { SubmodulesFilterPipe } from './submodules-filter.pipe';
import { ParametersComponent } from './admin/submodules/parameters/parameters.component';
import { AddParametersComponent } from './admin/submodules/parameters/add-parameters/add-parameters.component';
import { UpdateParametersComponent } from './admin/submodules/parameters/update-parameters/update-parameters.component';
import { ParametersFilterPipe } from './ParametersFilter.pipe';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    SubmodulesComponent,
    NameFilterPipe,
    UpdateAssessmentComponent,
    AddAssessmentComponent,
    UpdateSubmodulesComponent,
    AddSubmodulesComponent,
    SubmodulesComponent,
    SubmodulesFilterPipe,
    ParametersComponent,
    AddParametersComponent,
    UpdateParametersComponent,
    ParametersFilterPipe,
    AdminHomeComponent,
    HomePageComponent,
    
    
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [AssessmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
