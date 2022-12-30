import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./secure/account/dashboard/dashboard.component";
import {AuthGuard} from "./helpers/auth.guard";
import {HomeComponent} from "@app/home/home.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
	{ path: 'account', loadChildren: accountModule },

	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
