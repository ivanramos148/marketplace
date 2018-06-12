import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes =
[
	{
	  path: '',
 	  component: HomeComponent
	},
	{
		path: 'upload',
		component: UploadComponent
	},
	{
		path: 'details/:id',
		component: DetailsComponent
	},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
