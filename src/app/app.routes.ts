import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { App } from './app';
import { GestionUsuario } from './gestion-usuario/gestion-usuario';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'Seguridad',
        component: GestionUsuario
    }
];
