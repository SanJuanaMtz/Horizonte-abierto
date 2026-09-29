titulo: Día 40 Café, pan y tablas que se encuentran
fecha: 2026-08-17
categorias: sql
imagen: imagenes/pan-y-cafe.jpg
imagen_credito: Imagen tomada de Unsplash / Camara Negra
imagen_enlace: https://unsplash.com/es/@camaranegra

Cuando los días son tan frescos que el mismo aire se siente agradable en el rostro, no puedo dejar de pensar en lo delicioso que huele el café.

Y casi inmediatamente aparece otra cosa en mi mente: el pan.

En México tenemos una relación bastante especial con el café y el pan. Es una combinación sencilla, pero perfecta para acompañar una mañana tranquila.

Y quizá sea precisamente eso lo que me hizo pensar en SQL.

Las combinaciones pueden mejorar aquello que ya tenemos.

Un café es bueno.

Un pan es bueno.

Pero juntos pueden convertirse en algo mucho mejor.

En SQL ocurre algo parecido cuando necesitamos trabajar con información que se encuentra distribuida en diferentes tablas.

Ahí aparecen los `JOIN`.

## Cuando dos tablas se encuentran

Recordemos que las bases de datos relacionales suelen dividir la información en diferentes tablas.

Esto nos permite mantener nuestros datos organizados, pero también significa que, en determinadas ocasiones, necesitaremos consultar información que se encuentra en más de una tabla.

Los `JOIN` nos permiten precisamente eso: **combinar registros relacionados de dos o más tablas utilizando una condición en común.**

Generalmente esta relación se establece mediante identificadores o llaves.

Por ejemplo, imaginemos que tenemos una tabla llamada `shows` y otra llamada `genres`.

Podríamos relacionarlas mediante un identificador:

```sql
SELECT *
FROM shows
JOIN genres
ON shows.id = genres.show_id
WHERE shows.id = 63881;
```

Aquí estamos indicando que queremos unir ambas tablas cuando el `id` del programa coincida con el `show_id` registrado en la tabla de géneros.

Después filtramos el resultado para obtener únicamente la información correspondiente al programa cuyo identificador es `63881`.

De esta manera podemos consultar información que originalmente se encontraba separada.

## Combinar para encontrar relaciones

Lo interesante de los `JOIN` es que no necesitamos guardar toda la información en una sola tabla.

Podemos mantener diferentes conjuntos de datos organizados y después relacionarlos cuando necesitemos consultarlos.

Es como tener diferentes piezas de información que, por separado, tienen sentido, pero que al encontrarse nos permiten obtener una imagen mucho más completa.

Y quizá por eso me gusta tanto esta parte de SQL.

Primero aprendemos a guardar los datos.

Después aprendemos a buscarlos.

Y ahora estamos aprendiendo a **relacionarlos**.

Un poco como el café y el pan.

Cada uno puede disfrutarse por separado, pero juntos tienen algo especial.

Aunque, siendo honesta, probablemente esta analogía nació porque todavía no había desayunado. 😂