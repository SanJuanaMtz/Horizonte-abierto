titulo: Día 41 Indices en SQL
fecha: 2026-08-21
categorias: sql
imagen: imagenes/indices.jpg
imagen_credito: Imagen tomada de Unsplash / Jozsef Hocza
imagen_enlace: https://unsplash.com/es/@hocza

## Los caminos que elegimos para encontrar algo

Hace unos días estuve corriendo mientras admiraba el paisaje en cada momento.

Correr se ha convertido en una de mis actividades favoritas, especialmente porque lo utilizo para mejorar mi condición en el agua.

Aunque, siendo honesta, al principio también tenía otra razón.

Uno de los libros que he leído recomendaba dar ciertos paseos para mantener la fuente de inspiración llena.

Pero de eso hablaremos después.

Mientras admiraba el paisaje y me internaba por un camino rodeado de árboles, recordé mi propio camino documentando el regreso a mi carrera con una intención más consciente.

Aunque, siendo completamente honesta, lo que terminé recordando fueron las estructuras de datos.

Más específicamente, los árboles.

Aquellas estructuras en las que tenemos nodos relacionados entre sí, donde un nodo puede funcionar como padre de otros nodos hijos y cuya organización nos permite realizar determinadas búsquedas de manera mucho más eficiente.

Y entonces me llevé una pequeña sorpresa cuando llegué a los **índices en SQL**.

No recuerdo haber estudiado los índices durante mi carrera, aunque mis recuerdos de aquella época ya están un poco difusos.

Sin embargo, al encontrarlos ahora, la relación con los árboles que estudié en C me resultó bastante familiar.

---

### Los índices en SQL

Un índice nos permite optimizar determinadas consultas sobre una tabla.

Por ejemplo, podemos crear un índice para la columna `title` de la tabla `shows` utilizando:

```sql
CREATE INDEX title_index ON shows (title);
```

Con esto le indicamos a SQLite que cree un índice asociado a esa columna para facilitar determinadas búsquedas.

Internamente, SQLite puede utilizar estructuras de datos especializadas para organizar esta información, como los **B-trees**.

Aunque pueden recordarnos a los árboles binarios que hemos visto anteriormente, los B-trees tienen una diferencia importante: un nodo puede tener más de dos hijos.

Esto permite almacenar y buscar grandes cantidades de información de manera eficiente.

### La optimización también tiene un costo

Sin embargo, crear índices para todo no significa que nuestras consultas serán automáticamente mejores.

Cada índice necesita espacio adicional para almacenarse y también debe mantenerse actualizado cuando agregamos, modificamos o eliminamos información de la tabla.

Es decir, tenemos una especie de intercambio:

**más velocidad de búsqueda a cambio de más espacio y trabajo adicional para mantener el índice.**

Por eso no tendría demasiado sentido indexar absolutamente todas las columnas.

Necesitamos pensar qué información consultamos con mayor frecuencia y dónde realmente vale la pena utilizar un índice.

### Encontrar el camino correcto

Y quizá por eso me gustó encontrarme con este concepto mientras sigo corriendo.

Cuando vemos un camino rodeado de árboles, podemos simplemente recorrerlo.

Pero si queremos llegar más rápido a un lugar determinado, necesitamos encontrar una mejor manera de orientarnos.

Los índices hacen algo parecido con los datos.

No cambian la información que tenemos.

Simplemente nos ayudan a encontrarla de una manera más eficiente.