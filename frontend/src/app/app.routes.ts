import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
	{ path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
	{ path: 'sobre-mi', component: About },
	{ path: 'proyectos', component: Projects },
	{ path: 'contacto', component: Contact },
	{ path: '**', redirectTo: 'sobre-mi' }
];