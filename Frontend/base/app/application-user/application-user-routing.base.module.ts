import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { AuthGuard } from '@baseapp/auth.guard';

import { ApplicationUserDetailComponent } from '@app/application-user/application-user/application-user-detail/application-user-detail.component';
import { ApplicationUserListComponent } from '@app/application-user/application-user/application-user-list/application-user-list.component';

export const routes: Routes = [

{
     path: 'applicationuserdetail',
     component: ApplicationUserDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     canActivate: [ AuthGuard ],
     data: {
     	label: "APPLICATION_USER_DETAIL",
        breadcrumb: "APPLICATION_USER_DETAIL",
        roles : [					"all"
				]
     }
},
{
     path: 'applicationuserlist',
     component: ApplicationUserListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     canActivate: [ AuthGuard ],
     data: {
     	label: "APPLICATION_USER_LIST",
        breadcrumb: "APPLICATION_USER_LIST",
        roles : [
        			"App Admin",
]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApplicationUserBaseRoutingModule
{
}
