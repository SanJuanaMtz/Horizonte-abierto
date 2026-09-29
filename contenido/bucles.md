titulo: Día 19 Bucles
fecha: 2026-05-01
categorias: python
imagen: imagenes/rutina.jpg
imagen_credito: Imagen tomada de Unsplash / Nik
imagen_enlace: https://unsplash.com/es/@helloimnik

## Las acciones que repetimos

En el día a día solemos repetir muchas acciones.

Lavamos nuestros dientes, nuestra cara, aplicamos cremas, bloqueador solar… incluso seguimos pequeñas rutinas antes de salir de casa.

También repetimos tareas en el trabajo o en el hogar.

Todo esto forma parte de una secuencia de acciones que nos llevan a un resultado.

---

En programación ocurre algo similar.

Podemos repetir acciones utilizando bucles o *loops*.

Un bucle nos permite ejecutar un bloque de código varias veces sin tener que escribirlo una y otra vez.

---

En Python, uno de los más utilizados es el bucle `for`, que nos permite iterar sobre una secuencia:

```python
for variable in secuencia:
instrucciones
```

---

También existe el bucle `while`, que repite un bloque de código mientras se cumpla una condición:

```python
while condicion:
instrucciones
```

---

Sin embargo, con `while` debemos ser cuidadosos.

Si la condición nunca deja de cumplirse, el programa puede caer en un bucle infinito.

---

Para tener más control, contamos con algunas instrucciones adicionales:

- `break` → permite salir del bucle antes de que termine
- `continue` → salta a la siguiente iteración
- `pass` → no hace nada, pero nos ayuda a dejar un espacio reservado en el código

---

Al final, los bucles nos permiten automatizar tareas.

Desde recorrer datos, hasta repetir procesos que hacemos todos los días.

---

Y creo que ahí es donde se vuelve interesante:

cuando algo que repetimos constantemente…

podemos enseñarle al programa a hacerlo por nosotros.