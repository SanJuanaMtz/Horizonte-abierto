titulo: Día 22 Tuplas
fecha: 2026-05-07
categorias: python
imagen: imagenes/tuplas.jpg
imagen_credito: Imagen tomada de Unsplash / Amanz
imagen_enlace: https://unsplash.com/es/@amanz

Cuando estudiamos listas, es inevitable recordar los arrays que vimos anteriormente en C.

Ambas estructuras nos permiten organizar varios datos en un mismo lugar.

Sin embargo, al seguir avanzando en Python, aparece otra estructura interesante: las tuplas.

---

Una tupla es una colección ordenada de elementos.

Su principal característica es que es **inmutable**, lo que significa que, una vez creada, no puede modificarse.

Sus elementos se escriben entre paréntesis y separados por comas.

Por ejemplo:

```python
punto = (3, 4)print(punto[0])print(punto[1])
```

---

Podemos acceder a sus elementos de forma similar a las listas, utilizando índices.

La diferencia está en que no podemos agregar, eliminar o modificar elementos una vez que la tupla existe.

---

Eso puede parecer una limitación.

Pero en realidad resulta útil cuando trabajamos con datos que no deberían cambiar.

Por ejemplo:

- coordenadas
- configuraciones
- valores constantes dentro de un programa

---

Aunque no pueden modificarse, sí contamos con algunas herramientas para trabajar con ellas:

- `count()` → cuenta cuántas veces aparece un elemento
- `index()` → devuelve la posición de un elemento
- `len()` → indica cuántos elementos contiene

---

Creo que las tuplas muestran algo interesante sobre Python.

No todas las estructuras están pensadas para modificarse.

Algunas existen precisamente para conservar el orden y la estabilidad de ciertos datos.

Y después de venir de C, resulta curioso encontrar estructuras que priorizan esa seguridad.