import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CondosComponent } from '../condos/condos.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'condos',  
        component: CondosComponent
    },
    { 
        path: 'not-found',  
        component: NotFoundComponent
    },
    { 
        path: '**', 
        redirectTo: '/not-found'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }