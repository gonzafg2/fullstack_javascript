# Fullstack Javascript Base

_Fullstack Javascript Base is a test project intended to be used as a basis for future work based on Javascript both on the server (backend) and on the client (frontend)._  || 
_Fullstack Javascript Base es un proyecto de prueba destinado a ser utilizado como base para futuros trabajos que tengan de base Javascript tanto en el servidor (backend) como en el cliente (frontend)._

<!-- _You can enter from this link:_ ||
_Puedes ingresar desde este link:_

[https://miapp.digital/colors](https://miapp.digital/colors) 

![](https://raw.githubusercontent.com/gonzafg2/ColorsApp/master/colorsapp.png) -->

<!-- ``` -->
## Starting || Comenzando 🚀
_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._ || 
_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre requirements || Pre-requisitos 📋

_Before installing the project you must have Node JS installed on your local machine and also a text editor for development_ || 
_Antes de instalar el proyecto debes tener instalado Node JS en tu máquina local y además un editor de texto para el desarrollo_

**Text Editor || Editor de texto** _(Visual Studio Code)_
<!-- ``` -->
[https://code.visualstudio.com/](https://code.visualstudio.com/)
<!-- ``` -->

**Node JS** _(LTS version)_
[(Docs)](https://nodejs.org/)

<br />

#### You must also have Loopback4 and Vue previously installed. || También debes tener instalado previamente Loopback4 y Vue.

<br />

**LoopBack 4**
[(Docs)](https://loopback.io/doc/en/lb4/Getting-started.html#create-a-new-project)
```
npm install -g @loopback/cli
```

**Vue JS y Vue CLI**
[(Docs)](https://vuejs.org/)

```
$ npm install -g vue
$ npm install -g @vue/cli
$ npm install -g @vue/cli-service-global
```
### Installation || Instalación 🔧
_Before installing, verify that you have correctly installed Node JS, npm, LoopBack 4 and Vue, as follows:_ ||
_Antes de realizar la instalación verifica que tengas instalado correctamente Node JS, npm, LoopBack 4 y Vue, de la siguiente forma:_
```
$ node --version
@vue/cli 4.3.1 (Something like this should look like a result || Algo así debería verse como resultado)
```
```
$ npm --version
6.14.5 (Something like this should look like a result || Algo así debería verse como resultado)
```
```
$ lb4 --version
@loopback/cli version: 2.17.2 (Something like this should look like a result || Algo así debería verse como resultado)
```
```
$ vue --version
@vue/cli 4.3.1 (Something like this should look like a result || Algo así debería verse como resultado)
```
### To install the project you must download it as zip or clone it from this address: || Para instalar el proyecto debes descargarlo como zip o clonarlo desde esta dirección:
<!-- ``` -->
[https://github.com/gonzafg2/fullstack_javascript](https://github.com/gonzafg2/fullstack_javascript)
<!-- ``` -->

_After this you must install the node modules as follows. Run this command inside the root folder of the project_ || 
_Luego de esto debes instalar los módulos de node de la siguiente forma. Ejecuta este comando dentro de la carpeta raíz del proyecto_
```
$ npm install or yarn install
```
_This will install all the dependencies necessary to run the application on your computer._ || 
_Esto instalará todas las dependencias necesarias para correr la aplicación en tu equipo._

_After this, a folder called "node_modules" will be created._ || 
_Luego de esto, se creará una carpeta llamada "node_modules"._

_If everything went correctly you can see the app by executing the following commands:_ || 
_Si todo salió correctamente puedes ver la app ejecutando los siguientes comandos:_

<br />

### Database MySQL in a Docker container || Base de datos MySQL en un contenedor Docker.

_To run the Database Docker's container || Para correr el contenedor Docker de la Base de datos:_
```
$ npm run db
```

_To run the Backend || Para correr el Backend:_
```
$ npm run dev-api
```
<br />

### Database Oracle in a External Machine || Base de datos Oracle en una Máquina Externa.

_To run the Backend || Para correr el Backend:_
```
$ npm run dev-api-oracle
```

<br />

### Frontend 
_To run the Frontend || Para correr el Frontend:_
```
$ npm run dev-app
```

<br />

### Docker

_Stop all Docker's container: || Para detener todos los contenedores Docker:_
```
$ npm run docker-stop
```

<br />

_This will create a local server for the Database, the Backend and the Frontend, which you can access by entering one of these addresses: _ (They may be different on your computer) || 
_Esto creará un servidor local para la Base de Datos, el Backend y el Frontend, al cual puedes acceder ingresando a alguna de estas direcciones:_ (Pueden ser diferentes en tu equipo)

_Frontend_
```
DONE  Compiled successfully in 9051ms 

  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.1.81:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
``` 

_Backend_
```
$ node -r source-map-support/register .
Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
```

## Loopback4

1. For create app (backend) || Para crear una app (backend)
```
lb4 app
```

2. Create a DataSource || Crear una fuente de datos.
```
lb4 datasource
? Datasource name: db
? Select the connector for db:
❯ In-memory db (supported by StrongLoop) 
  In-memory key-value connector (supported by StrongLoop) 
  IBM Object Storage (supported by StrongLoop) 
  IBM Db2 (for Linux, Unix, Windows) (supported by StrongLoop) 
  IBM i (Db2 for i) (supported by StrongLoop) 
  IBM Db2 for z/OS (supported by StrongLoop) 
  IBM DashDB (supported by StrongLoop) 
  IBM MQ Light (supported by StrongLoop) 
  IBM Cloudant DB (supported by StrongLoop) 
  Couchdb 2.x (supported by StrongLoop) 
  IBM WebSphere eXtreme Scale key-value connector (supported by StrongLoop) 
  Cassandra (supported by StrongLoop) 
  gRPC (supported by StrongLoop) 
  Redis key-value connector (supported by StrongLoop)
  MongoDB (supported by StrongLoop) 
  MySQL (supported by StrongLoop) 
  PostgreSQL (supported by StrongLoop) 
  Oracle (supported by StrongLoop) 
  Microsoft SQL (supported by StrongLoop) 
  OpenAPI (supported by StrongLoop) 
  REST services (supported by StrongLoop)
  SOAP webservices (supported by StrongLoop) 
  Couchbase (provided by community) 
  Neo4j (provided by community) 
  Twilio Connector (provided by community) 
  Kafka (provided by community) 
  SAP HANA (provided by community) 
  ElasticSearch (provided by community) 
  z/OS Connect Enterprise Edition (supported by StrongLoop) 
  other
(Move up and down to reveal more choices)


  create src/datasources/db.datasource.ts
  update src/datasources/index.ts

Datasource Db was created in src/datasources/
```

 ### _Important_: The LoopBack project must be built with npm run build or yarn build to transpile the datasource files to /dist/datasources/*.ts. || El proyecto debe hacer un built con npm run build o yarn build para transpilar los archivos del datasource a /dist/datasource/*.

<br/>

_Then you have two options: (1) Generate a model. Or (2) Discover a model in database automatically._ || _Luego tienes dos opciones: (1) Generar un modelo de datos. O (2) Descubrir un modelo en una base de datos automáticamente._

3. (1) Generate a Model:
```
lb4 model
? Model class name: todo
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? No
Model Todo will be created in src/models/todo.model.ts

Let's add a property to Todo
Enter an empty property name when done

? Enter the property name: id
? Property type: number
? Is id the ID property? Yes
? Is id generated automatically? No
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Todo
Enter an empty property name when done

? Enter the property name: title
? Property type: string
? Is it required?: Yes
? Default value [leave blank for none]:

Let's add another property to Todo
Enter an empty property name when done

? Enter the property name: desc
? Property type: string
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Todo
Enter an empty property name when done

? Enter the property name: isComplete
? Property type: boolean
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Todo
Enter an empty property name when done

? Enter the property name:

   create src/models/todo.model.ts
   update src/models/index.ts

Model Todo was created in src/models/
```

3. (2) Discover a Model:
```
lb4 discover (for all tables available)

--dataSource: Put a valid datasource name here to skip the datasource prompt

--views: Choose whether to discover views. Default is true

--all: Skips the model prompt and discovers all of them

--outDir: Specify the directory into which the model.model.ts files will be placed. Default is src/models

--schema: Specify the schema which the datasource will find the models to discover

```

4. Create a Repository:
```
lb4 repository
? Seleccione el origen de datos (Use arrow keys)
❯ XxxxxxDatasource


--datasource : (Optional) name of a valid datasource already created in src/datasources

--model : (Optional) name of a valid model already created in src/models

--id : (Optional) name of the property serving as ID in the selected model. If you supply this value, the CLI will not try to infer this value from the selected model file.

--repositoryBaseClass : (Optional) (Default: DefaultCrudRepository) name of the base class the repository will inherit. If no value was supplied, DefaultCrudRepository will be used.

Create a Repository class as follows: /src/repositories/${modelName}.repository.ts

or

Update /src/repositories/index.ts to export the newly created Repository class.
```

5. Create a Controller:
```
lb4 controller [options] [<name>]

Empty Controller - An empty controller definition

or 

REST Controller with CRUD Methods - A controller wired up to a model and repository definition, with pre-defined CRUD methods.

```

6. Go to [http://localhost:3000/explorer](http://localhost:3000/explorer/) for see the endpoints.

<br />

## Deployment || Despliegue 📦

__In construction... || En construcción..._
<!-- _Puedes hacer deploy ejecutando el siguiente comando en tu terminal:_
```
$ npm run build
```
_Lo que dará como resultado la creación de una carpeta llamada "dist", con los archivos necesarios y minificados para la ejecución en producción._
```
``` -->

## Building with... || Construido con.. 🛠️

_The following technologies have been used in this project:_ ||
_En este proyecto se han utilizado las siguientes tecnologías:_

* [HTML5 y CSS3](https://www.w3.org/) - Como lenguajes de etiquetas y estilos.
* [VueJS](https://vuejs.org/) - El framework web escrito en javascript más versátil, simple y amigable de usar.
* [Vue-CLI](https://cli.vuejs.org/) - Herramienta para complementar Vue JS.
* [Vue-Router](https://router.vuejs.org/) - Herramienta para complementar Vue JS.
* [NodeJS y npm](https://nodejs.org/) - Manejador de dependencias.
* [LoopBack 4](https://loopback.io/) - Framework basado en Express JS especializado en API's y microservicios.
* [Axios](https://github.com/axios/axios) - Utilizado para realizar llamadas a una API de forma sencilla, basado en promesas.
<!-- * [Bootstrap-Vue](https://bootstrap-vue.org/) - Framework para CSS adaptado a las etiquetas de Vue JS. -->
<!-- * [Vue Clipboard](https://www.npmjs.com/package/vue-clipboards) - Usado para realizar el copiado de un elemento al ser clickeado. -->
<!-- * [Heroku](https://www.heroku.com) - Usado para hacer deploy y como hosting de la aplicación. -->

<!-- ## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests. -->

<!-- ## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags). -->

## Author || Autor ✒️

<!-- _Por ahora hay un sólo autor:_ -->

* **Gonzalo Fleming** <!-- - *Desarrollo Inicial* --> - [gonzafg2](https://github.com/gonzafg2)

<!-- También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.  -->

## License || Licencia 📄

This project is under the MIT License - see the [LICENSE](https://github.com/gonzafg2/fullstack_javascript/blob/main/LICENSE) file for details || 
Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](https://github.com/gonzafg2/fullstack_javascript/blob/main/LICENSE) para detalles

## Expressions of Gratitude || Expresiones de Gratitud 🎁

__In construction... || En construcción..._

<!-- * Puedes comentar a otros sobre este proyecto. 📢
* O invitarme una cerveza 🍺 o un café ☕. 
* O también dar las gracias públicamente 🤓.
* Etc. -->



---
⌨️ with ❤️ for [Gonzalo Fleming](https://github.com/gonzafg2) 😊