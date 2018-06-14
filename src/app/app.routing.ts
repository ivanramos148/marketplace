import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes =
[
	{ path: '', component: HomeComponent},
	{path: 'search',component: SearchComponent},
	{path: 'upload', component: UploadComponent},
	{path: 'details/:id', component: DetailsComponent},
	{path: 'Login', component: UsersComponent},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
