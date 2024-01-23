# Proyecto 5: E-Commerce "La Dona Gatona" 🍩

Este proyecto contiene la parte del cliente de un e-commerce avocado a la venta de donas.

## Despliegue

Puedes ver el preyecto [dando click en este enlace.](https://lewfulef.github.io/client//)

## Tecnologías incorporadas

- create-react-app (React.js)
- Tailwind CSS (Manejo de estilos)
- Express.js (Node)
- MongoDB
- Cloudinary (Manejo de imágenes)

## Instalación

Para realizar la instalación de este proyecto, es necesario realizar `clone` o `fork` de este repositorio.

Posteriormente, abrir dos terminales. El primero será para tratar `create-react-app` y el otro para `express.js`.

`Terminal 1`
```shell
$ cd client
$ npm install
$ npm run start
```

Para abrir la parte del servidor [ingresando en este enlace.](https://github.com/lewfulef/server//) donde encontrarás el repositorio de dicha parte del proyecto.

Para la instalación del servidor debes realizar un clone o fork del repositorio enlazado arriba 👆. 

`Terminal 2`
```shell
$ cd server
$ npm install
$ npm run dev
```


Una vez hecho esto en cada uno, deberás crear las variables de entorno en cada carpeta.

`./client/.env`

```
REACT_APP_BACKEND_URL="http://localhost:3005"
REACT_APP_MERCADO_PAGO_PUBLIC_KEY='TU-NÚMERO-DE-MERCADOPAGO-PARA-ACTIVAR-PAGOS'
```


`./server/.env`

```
PORT=3005
MONGODB_URI='mongodb://localhost:27017/proyecto-final-guitarras'
SECRET=PALABRASECRETADEBESCAMBIARLA
PROD_ACCESS_TOKEN='TU-NÚMERO-DE-MERCADOPAGO-PARA-ACTIVAR-PAGOS'
```
