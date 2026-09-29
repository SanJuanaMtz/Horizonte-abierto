titulo: Día 39 Funciones en SQL
fecha: 2026-08-14
categorias: sql
imagen: imagenes/libros.jpg
imagen_credito: Imagen tomada de Unsplash / Gülfer ERGİN
imagen_enlace: https://unsplash.com/es/@gulfergin_01

### Cuando buscar ya no es suficiente: funciones en SQL

Conocer las herramientas que nos proporciona SQL para realizar consultas nos ayuda a mejorar nuestras búsquedas.

Comandos como `WHERE`, `LIKE`, `ORDER BY` o `LIMIT` nos permiten filtrar, ordenar y controlar la información que obtenemos.

Sin embargo, cuando trabajamos con bases de datos reales, buscar no siempre es suficiente.

Imaginemos una biblioteca enorme. Encontrar un libro es útil, pero a veces queremos responder preguntas más específicas:

- ¿Cuántos libros hay de un género?
- ¿Cuál es el más reciente?
- ¿Cuál es el más antiguo?
- ¿Cuántos autores diferentes existen?
- ¿Cuál es el promedio de páginas por libro?

Ahí es donde entran las funciones de SQL.

Estas funciones nos permiten analizar la información y obtener resultados mucho más detallados sin tener que revisar registro por registro.

### Algunas funciones muy utilizadas

SQL incluye muchas funciones, pero estas son algunas de las más comunes:

`AVG` → calcula un promedio.

`COUNT` → cuenta registros.

`DISTINCT` → elimina duplicados.

`LOWER` → convierte texto a minúsculas.

`UPPER` → convierte texto a mayúsculas.

`MAX` → obtiene el valor más alto.

`MIN` → obtiene el valor más bajo.

### Contar registros

Por ejemplo, si tenemos una tabla llamada `favorites` y queremos saber cuántas personas eligieron el lenguaje C, podemos escribir:

`SELECT COUNT(*) FROM favorites WHERE language = 'C';`

Aquí `COUNT(*)` cuenta todas las filas que cumplen la condición establecida por `WHERE`.

### Encontrar valores máximos y mínimos

También podríamos querer saber cuál es la edad más alta registrada en una tabla de usuarios:

`SELECT MAX(age) FROM users;`

O la más baja:

`SELECT MIN(age) FROM users;`

### Calcular un promedio

Si deseamos conocer el promedio de edad de los usuarios:

`SELECT AVG(age) FROM users;`

Esto es especialmente útil cuando trabajamos con estadísticas o análisis de datos.

### Evitar duplicados

A veces una tabla contiene valores repetidos. Si queremos ver únicamente los lenguajes diferentes registrados, usamos:

`SELECT DISTINCT language FROM favorites;`

Ahora cada lenguaje aparecerá una sola vez.

### Trabajar con texto

Las funciones `LOWER` y `UPPER` nos ayudan a normalizar texto.

Por ejemplo:

`SELECT UPPER(name) FROM users;`

Mostrará todos los nombres en mayúsculas.

Y:

`SELECT LOWER(name) FROM users;`

Los mostrará en minúsculas.

### Lo interesante empieza al combinarlas

Estas funciones son poderosas por separado, pero se vuelven mucho más útiles cuando las combinamos con otras herramientas de SQL.

Por ejemplo:

`SELECT COUNT(*) FROM users WHERE city = 'Monterrey';`

Aquí estamos usando una función (`COUNT`) junto con un filtro (`WHERE`) para responder una pregunta muy específica.

### Más que buscar, entender los datos

Hasta ahora he sentido que SQL tiene dos niveles.

El primero es encontrar información.

El segundo es entender la información.

Las funciones nos ayudan a pasar de “muéstrame los datos” a “dime qué significan esos datos”.

Aquí las bases de datos dejan de ser una colección de registros para convertirse en una herramienta para descubrir patrones, cantidades y relaciones dentro de la información. Es decir, en este punto comenzamos a interpretar la colección.