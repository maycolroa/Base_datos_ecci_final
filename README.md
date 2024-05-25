# Base_datos_ecci_final
Este repositorio tiene como finalidad mostrar el codigo usado para crear la base de datos de nuestra aplicacion para administrar servidores y el diagrama ER que se planteo con las entidades y atributos es un trabajo inicial donde se decide mostrar las tablas relaciones y funciones de las mismas


 ## Estructura de proyecto Front Backend y sql

Este proyecto tomamos una acquitectura por capas para manejas de manera independiente tanto el Front como el Backend y las sentencias utilizadas para crear y agregar los datos a las tablas. 

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/e74dfd3d-6282-4176-986d-e255faf7d160)

 ## Estructura Backend 

En el backend se tomo la estructura basica de src y se decidio que el punto de entrada a la aplicacion fuera el app.js donde se realizo la configuraciones iniciales puestos cors metodos de conecxion formatos de los para los servisios json 

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/e14eeb96-f0c1-4645-8846-db69a56b3dc2)

Despues se realizo la separacion de carpetas por funcionalidades se manejaron 4 sub-carpetas las cuales son:

-config(configuracion a la base de datos)
![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/9a62b003-516f-4805-a271-94ad2a6c2938)

-controllers(donse se manejo as acciones de get put delete update)
![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/fe705ad2-094e-4629-bcb4-692144a8d4ad)

-routes(rutas de como se van a ejecutar los servicios)
![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/8df7bdbf-724a-447c-a71c-0c10aba43057)

-scripts(archivos para provar los procesos almacenados desde consola)
![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/98f3320c-cfaf-4b91-81d3-886aee674c72)

 ## Estructura Front  

En el front se tomo la estructura basica de src y se decidio que el punto de entrada a la aplicacion fuera el main.jsx donde se realizo la configuraciones iniciales para mandar a llamar todos los componentes y se realizo la arquitectura de componentes con unica funcionalidad se utilizo axions para las peticiones http y booststrap para darle estilos

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/69719059-6857-4ba7-978a-307f1cf261a3)


Despues se realizo la separacion de carpetas por funcionalidades se manejaro una carpeta de componentes que llaman las acciones que se pueden hacer en el crud se muestra a continuacion:

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/92694256-3bb2-4138-8937-86b5c847c45d)


 ## Modelo ER
![Captura de pantalla 2024-05-18 212200](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/46f3f4cd-3015-436e-b899-5549819d14da)


 ## Veridicacion de procesos almacenados 

Se crearon los procedimientos almacenados en la carpeta de scripts a continuacion me muestra el codigo y un ejemplo de su uso 

### createclientes.js

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/5cabcc7b-c178-455f-b3e4-dd0ffd14a920)

![Captura de pantalla 2024-05-25 093504](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/c1965c54-5c04-4b5c-8fa2-31418273e3ef)

### getclientes.js

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/5b9daff7-b1c2-47ff-9c01-24745e0329e9)

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/483ebe0f-1004-40c6-a705-ff19fead4b16)

### getclienteById.js

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/67403127-613f-4b0b-9810-559a06b6a5fa)

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/8678b3cc-eafc-4adf-9b33-06a217309830)

### updateCliente.js

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/787b385d-a087-469d-bf77-5e91b010db86)

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/af8a3370-cece-4329-ad31-b59d8c8d0f81)

### updateCliente.js

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/3234fc35-d48d-4328-8346-b5caeb482878)

![image](https://github.com/maycolroa/Base_datos_ecci_final/assets/85509333/ea2aef45-6677-498b-87d0-d22d43d7f53b)