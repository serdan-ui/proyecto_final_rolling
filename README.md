<p align="center">
  <a href="https://i.ibb.co/z7JnsPg/Zero-Tech-Purple.png">
    <img src="https://i.ibb.co/z7JnsPg/Zero-Tech-Purple.png" alt="logo" width="400" height="175">
  </a>
</p>

<h1 align="center">Gaming Store</h1>

<h4 align="center">
  Una web que te intruducirá al mundo de los videojuegos.
  <br>
</h4>

# ZeroTech

Es una web dedicada principalmente al Gaming, incluyendo ventas de componentes, consultoría avanzada por equipos, reparación general de dispositivos y más.


## Instalación 🛠️
1 -  Comenzarémos por clonar ambos repositorios:
- FrontEnd: https://github.com/sergiorosales9/proyecto_final_rolling
- BackEnd: https://github.com/sergiorosales9/BackendProyectofinal
 
2 - Luego usaremos el comando `npm install` en consola, para instalar todas las dependencias que el proyecto requiere.

3 - Ejecuta la web mediante el comando `npm start` (tanto en tu proyecto FrontEnd como en el BackEnd).

### Listo! Ya tienes una previsualización de la web ZeroTech.


## Sobre su Desarrollo
La web de ZeroTech fué construida con las siguientes librerías y framework:
- [ReactJS](https://es.reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Slick](https://react-slick.neostack.com/)
- [React-Credit-Cards](https://www.npmjs.com/package/react-credit-cards)
- [React-Hook-Form](https://react-hook-form.com/)
- [Sweet Alert 2](https://sweetalert2.github.io/)

## Nuestro Equipo!
[![](https://avatars3.githubusercontent.com/u/17089396?v=4&s=80)](https://github.com/sergiorosales9) | [![](https://avatars3.githubusercontent.com/u/3198597?v=4&s=80)](https://github.com/maudrani) | [![](https://avatars1.githubusercontent.com/u/1343250?v=4&s=80)](https://github.com/ni-romero) | [![](https://avatars3.githubusercontent.com/u/3198597?v=4&s=80)](https://github.com/rochyscarlata 
-|-|-|-
[@sergiorosales9](https://github.com/sergiorosales9) | [@maudrani](https://github.com/maudrani) | [@ni-romero](https://github.com/ni-romero) | [@rochyscarlata](https://github.com/rochyscarlata)

## Estructura del Proyecto
(se evitaron directorios repetitivos para evitar el largo de la estructura)

```text
├── public
│   ├── image
│   │   ├── Products
│   │   │   ├── auriculares
│   │   │   │   ├── Logitech G332
│   │   └── Zero-Black.svg
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Admin
│   │   │   ├── Admin.js
│   │   │   ├── AgregProd.js
│   │   │   ├── Drag.js
│   │   │   ├── Graficos.js
│   │   │   ├── modal.js
│   │   │   ├── Productos.js
│   │   │   ├── style.css
│   │   │   ├── TurnosPanel.js
│   │   │   ├── Usuarios.js
│   │   │   └── Ventas.js
│   │   ├── Layout
│   │   │   ├── BtnCart.js
│   │   │   ├── Fotter.js
│   │   │   ├── Header.js
│   │   │   ├── HeaderStatic.js
│   │   │   └── styles.css
│   │   ├── Login
│   │   │   ├── Login.js
│   │   │   ├── LoginContainer.js
│   │   │   ├── Sidebar.js
│   │   │   └── styles.css
│   │   ├── Main
│   │   │   ├── MainPanels
│   │   │   │   ├── NewsPanel.css
│   │   │   │   └── NewsPanel.js
│   │   │   ├── Carrousel.js
│   │   │   ├── main-styles.css
│   │   │   ├── Main.js
│   │   │   ├── Mostrador.js
│   │   │   ├── styles.css
│   │   │   └── ZeroDisclaimer.js
│   │   ├── PageService
│   │   │   ├── PageService.js
│   │   │   └── styles.css
│   │   ├── PaginaDePago
│   │   │   ├── PaginaCompra.js
│   │   │   ├── PagoExitoso.js
│   │   │   ├── PagoPendiente.js
│   │   │   ├── PagoRechazado.js
│   │   │   ├── Payment.js
│   │   │   └── style.css
│   │   ├── PerfilUsuario
│   │   │   ├── PerfilUsuario.js
│   │   │   └── style.css
│   │   ├── Register
│   │   │   ├── FormRegister.js
│   │   │   ├── Register.js
│   │   │   └── styles.css
│   │   ├── routes
│   │   │   ├── PrivateAdmin.js
│   │   │   ├── PrivateRoute.js
│   │   │   └── RestrictedRoutes.js
│   │   ├── ShoppingCart
│   │   │   ├── 1 DB
│   │   │   │   └── cupones.js
│   │   │   ├── assets
│   │   │   │   └── cool-background.svg
│   │   │   ├── CartDetail
│   │   │   │   ├── lista-productos.js
│   │   │   │   ├── product-card.js
│   │   │   │   ├── ShoppingCart.js
│   │   │   │   └── styles.css
│   │   │   ├── PaymentDetail
│   │   │   │   ├── card-credit.js
│   │   │   │   ├── card-paypal.js
│   │   │   │   ├── payment-detail.js
│   │   │   │   └── styles.css
│   │   │   ├── ShippingDetail
│   │   │   │   ├── card-opcionales.js
│   │   │   │   ├── generador-paises.js
│   │   │   │   ├── ShippingDetail.js
│   │   │   │   └── styles.css
│   │   │   ├── cupon-detail.js
│   │   │   ├── cupon-launch.js
│   │   │   ├── resumen-compra.js
│   │   │   ├── shopping-checkout.js
│   │   │   └── styles.css
│   │   ├── Turn
│   │   │   ├── BodyTurn.js
│   │   │   ├── FormBuy.js
│   │   │   ├── FormComercial.js
│   │   │   ├── FormsRepair.js
│   │   │   ├── FormTurn.js
│   │   │   ├── ListTurn.js
│   │   │   ├── modalInfoTurno.js
│   │   │   ├── styles.css
│   │   │   └── Turn.js
│   │   └── util
│   │       └── axiosInstance.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── Mouse.jpg
│   ├── serviceWorker.js
│   └── setupTests.js
```
---------------------------------

Esperamos disfrutes de la web!
<br>
<br>
ZeroTech Team.
