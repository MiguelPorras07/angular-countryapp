import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/components/contact/contact.component';

/* definicion de las rutas, viene de angular router */
const routes: Routes = [
  // {
  //   path: '', //segmento del URL que nosotros ocupamos para mostrar en el home page
  //   component: HomePageComponent, //qué componente es el que se va a mostrar
  // },
  {
    path: 'about', //segmento del URL que nosotros ocupamos para mostrar en el home page
    component: AboutPageComponent //qué componente es el que se va a mostrar
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
    /* la primera parte del import es el path como string donde se encuentra ese modulo que quiero cargar de manera estatica,
    es decir, ./countries/'modulo principal' ( countries.module ) , luego viene punto(.) y then con el modulo, y de ese modulo vas a cargar el
    countries module*/
  },
  {
    path: '**', //comodin que funciona para redirigir
    redirectTo: 'countries' //cualquier ruta que no sea HOME o ABOUT, va a redireccionar a home.
  },
]

@NgModule({  //necesitamos hacer una importacion
  imports: [
    RouterModule.forRoot( routes ),  /*Este modulo depende de si es el primer router o es el segundo,
    si es el principal, nos damos cuenta porque es el que se encuentra en el root de la carpeta del proyecto,
    si es el primer router y es el principal, se utiliza .forRoot() y llamamos la definicion de las rutas, cuando
    se este trabajando con otro modulos como countries, etc., esos serían con el formato .forChild.
    Algo debe estar conectado en el app.module.ts para que Angular sepa qué hacer, por tanto se exportará*/
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
