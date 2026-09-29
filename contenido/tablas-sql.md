titulo: Día 37 Tablas en SQL
fecha: 2026-07-27
categorias: sql
imagen: imagenes/tablas.jpg
imagen_credito: Imagen tomada de Unsplash / Mikhail Pushkarev
imagen_enlace: https://unsplash.com/es/@dismilated

## Lo que Blockbuster me recordó sobre las tablas en SQL

Hace unos días, mientras cuidaba a mis sobrinos y limpiaba la casa, uno de ellos encontró una vieja película en DVD.

Al verla, no pude evitar recordar aquellas tardes en las que íbamos a Blockbuster.

Recorríamos cada pasillo mirando portadas, leyendo sinopsis y eligiendo cuál película llevaríamos a casa.

Era una experiencia sencilla, pero emocionante.

Recuerdo que cada estante estaba organizado por género y, dentro de cada sección, las películas seguían un orden alfabético.

Con el tiempo, Blockbuster desapareció, el local se convirtió en una tienda de telas y las plataformas de *streaming* cambiaron por completo nuestra forma de ver películas.

Sin embargo, mientras sostenía aquel DVD, pensé en algo curioso.

Ese sistema de organización se parece mucho a la forma en que trabajamos con bases de datos.

En SQL, la información se organiza en **tablas**.

Cada tabla almacena un tipo de información y cada registro cuenta con un identificador único que permite diferenciarlo de los demás.

Imaginemos una base de datos para una tienda de películas.

Podríamos tener una tabla llamada **Películas**, donde cada película tendría un identificador único, además de información como su título, año o género.

También podríamos tener otra tabla llamada **Estantes**, donde cada estante tendría su propio identificador y representaría una ubicación dentro de la tienda.

Entonces surge la pregunta:

**¿Cómo sabe una película en qué estante está?**

Ahí es donde aparecen las **llaves foráneas**.

La tabla de películas puede guardar el identificador del estante al que pertenece. De esa manera, ambas tablas quedan relacionadas sin necesidad de repetir la misma información una y otra vez.

Así, cuando buscamos una película por su nombre, la base de datos puede identificar exactamente en qué estante se encuentra gracias a esa relación.

Quizás explicado de esta manera parezca un proceso largo.

Pero cuando añadimos una interfaz, toda esa complejidad queda oculta para el usuario.

Nosotros simplemente escribimos el nombre de la película y, en cuestión de segundos, obtenemos el resultado.

Eso es precisamente lo que más me gusta de las bases de datos.

Detrás de una búsqueda aparentemente sencilla existe una estructura cuidadosamente organizada que permite encontrar información entre miles o incluso millones de registros.

Al final, una base de datos no es muy diferente de aquel Blockbuster que visitaba de niña.

Solo que, en lugar de recorrer pasillos llenos de películas, ahora recorremos tablas llenas de información.

<aside>

**HAS LLEGADO AL FINAL!**

---

Gracias por leer este post, puedes revisar los demas en:

Blog Archive

</aside>