import { Routes, RouterModule } from '@angular/router';

// import {AboutComponent} from './about/about.component';
 import { AdminComponent } from './admin/admin.component';
 import { AddAssessmentComponent } from './admin/add-assessment/add-assessment.component';
 import { UpdateAssessmentComponent } from './admin/update-assessment/update-assessment.component';
 import {SubmodulesComponent} from './admin/submodules/submodules.component';
import {UpdateSubmodulesComponent} from './admin/submodules/update-submodules/update-submodules.component';
import {AddSubmodulesComponent} from './admin/submodules/add-submodules/add-submodules.component';
import {ParametersComponent} from './admin/submodules/parameters/parameters.component';
import {AddParametersComponent} from './admin/submodules/parameters/add-parameters/add-parameters.component';
import {UpdateParametersComponent} from './admin/submodules/parameters/update-parameters/update-parameters.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component'
import {HomePageComponent} from './home-page/home-page.component'

const appRoutes: Routes = [
  
   { path: 'admin-home/admin/addAssessment', component: AddAssessmentComponent},
  { path: 'admin-home/admin/updateAssessment/:subject', component: UpdateAssessmentComponent},
   { path: '', component: HomePageComponent },
   { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin-home/admin/:subject/:sub/:param/:weight/update/:scoreRemaining', component: UpdateParametersComponent},  
   { path: 'admin-home/admin/:subject/:sub/addparameters/:scoreRemaining', component: AddParametersComponent},
   { path: 'admin-home/admin/:subject/addsubmodule', component: AddSubmodulesComponent},
   { path: 'admin-home/admin/:subject/:sub', component: ParametersComponent},
   { path: 'admin-home/admin/:subject/:sub/update', component: UpdateSubmodulesComponent},
   
   { path: 'admin-home/admin/:subject', component: SubmodulesComponent },
   { path: 'admin-home/admin', component: AdminComponent}
  

   
   
  
  // { path: 'displayBook/:id', component: BookComponent}
];

export const routing = RouterModule.forRoot(appRoutes);