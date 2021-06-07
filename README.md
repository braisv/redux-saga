# Saga Users

_Sencilla aplicación mobile-first utilizando como base la API [Reqres](https://reqres.in/) para autentificación y consulta de usuarios._



## Instalación 🔧

Para instalar todas las dependencias, será necesario ejecutar el siguiente comando en la consola:

```
yarn
```

## Despliegue 📦

Para desplegar en local el proyecto, será necesario ejecutar el siguiente comando en la consola:

```
yarn start
```

En caso de utilizar el login social de Facebook o Goole, será necesario alojarse en el puerto 3000 y añadir una clave de cliente válida en el fichero .env con las variables REACT_APP_GOOGLE_CLIENT_ID y REACT_APP_FACEBOOK_CLIENT_ID.

### Netlify 🍺

El proyecto también está desplegado en Netlify, tan solo hace falta hacer click [AQUÍ](https://saga-users-tech.netlify.app/) :)

## Ejecución de las pruebas ⚙️

Para ejecutar las pruebas, será necesario ejecutar el siguiente comando en la consola:

```
yarn test
```

## Construido con 🛠️

* [React](https://es.reactjs.org/docs/getting-started.html) - El framework web usado
* [Redux](https://es.redux.js.org/) - Manejador de estado de la aplicación
* [Saga](https://redux-saga.js.org/) - Para gestionar los _side effects_ en Redux
* [Styled-Components](https://styled-components.com/docs) - Librería para estilizar los componentes
* [Axios](https://axios-http.com/docs/intro) - Para gestionar las peticiones HTTP al servidor por medio de promesas
* [Testing-Library](https://testing-library.com/docs/) - Utilidades para pruebas de código
* [ESLint](https://eslint.org/docs/user-guide/getting-started) - Herrramienta de _linting_ para generar código limpio
* [Prettier](https://prettier.io/docs/en/index.html) - Herramienta para dar formato al código y unificarlo
* [Husky](https://typicode.github.io/husky/#/) - Usado para ejecutar _Git Hooks_ y asegurarnos la limpieza y testeo de código
* [Lint-staged](https://github.com/okonet/lint-staged) - Usado para ejecutar los lints antes de realizar el commit a git

