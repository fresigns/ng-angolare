// ANGULAR: https://angular.io/ 
/* CREO IL MIO PROGETTO:

ng new ng-angolare --directory ./

ng serve 

// MATERIAL: https://material.angular.io/ 

ng add @angular/material

1) Dentro src > app creo la cartella 'components'
aggiungo il componente 'header' 

ng g c components/header
// g c sta per generate component 

faccio tutti i collegamenti ( app.module.ts | app.component.ts )

aggiungo <app-header></app-header> al mio file app.component.html 

2) Creo il Data Service (che ancora è vuoto!!!)

ng g s services/data
// g s sta per generate service

3) dentro il costruttore in 'data.service.ts' collego l'url mockapi:

    readonly DB_URL = 'https://651c7688e904fefd4c086f5d.mockapi.io/recipe';

    constructor(private http: HttpClient) { 
    }

4) creo i miei componenti: 

ng g c components/recipe-add
ng g c components/recipe-detail
ng g c components/recipe-not-found

5) creo la cartella 'model' con il file recipe.ts

ng g c components/recipes-card --standalone
ng g c components/recipes-list --standalone

6) 
ng g p pipes/category-to-string --standalone
ng g p pipes/to-human-date --standalone
ng g d directives/super-button --standalone

*/ 

