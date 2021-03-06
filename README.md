# PaisesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Create a new

```sh
ng new paisesApp
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Module

```sh
ng g m pais
ng g m shared
```

## Component

```sh
ng g c shared/sidebar --skip-tests -is
ng g c pais/pages/porCapital --skip-tests -is
ng g c pais/pages/porPais --skip-tests -is
ng g c pais/pages/porRegion --skip-tests -is
ng g c pais/pages/verPais --skip-tests -is
```

## Service to get pais

```sh
ng g s pais/services/pais --skip-tests
```

## Get interfaces from json

[QuickType](https://app.quicktype.io/ "json or anything to get anything").

## Component reusables

```sh
ng g c pais/components/paisTabla --skip-tests -is
ng g c pais/components/paisInput --skip-tests -is
```
