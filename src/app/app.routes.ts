import { Routes } from '@angular/router';
import { Dashboard } from './menu-principal/dashboard/dashboard';
import { App } from './app';
import { GestionUsuario } from './menu-principal/gestion-usuario/gestion-usuario';
import { GestionProductos } from './menu-principal/gestion-productos/gestion-productos';
import { GestionCompras } from './menu-principal/gestion-compras/gestion-compras';
import { GestionVentas } from './menu-principal/gestion-ventas/gestion-ventas';
import { GestionCaja } from './menu-principal/gestion-caja/gestion-caja';
import { Reportes } from './menu-principal/reportes/reportes';
import { Login } from './login/login';
import { MenuPrincipal } from './menu-principal/menu-principal';

export const routes: Routes = [

    {
        path: 'Dashboard',
        component: MenuPrincipal,
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'Seguridad',
                component: GestionUsuario
            },
            {
                path: 'Productos',
                component: GestionProductos
            },
            {
                path: 'Compras',
                component: GestionCompras
            },
            {
                path: 'Ventas',
                component: GestionVentas
            },
            {
                path: 'Caja',
                component: GestionCaja
            },
            {
                path: 'Reportes',
                component: Reportes
            }
        ]
    },
    {
        path: '',
        component: Login
    },
];
