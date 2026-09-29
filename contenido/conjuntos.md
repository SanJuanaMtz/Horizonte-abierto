titulo: Día 24 Conjuntos
fecha: 2026-08-11
categorias: python
imagen: imagenes/conjuntos.jpg
imagen_credito: Imagen tomada de Unsplash / Andrew Moca
imagen_enlace: https://unsplash.com/es/@mocaandrew

En programación, muchas veces necesitamos organizar información.

Pero no siempre queremos guardar todo tal como llega.

A veces necesitamos quedarnos únicamente con elementos únicos, sin repeticiones.

Ahí es donde entran los conjuntos.

---

Un conjunto es una estructura de datos que permite almacenar colecciones de elementos únicos, como los diccionarios.

A diferencia de las listas o las tuplas, los conjuntos no mantienen un orden específico.

Y a diferencia de las tuplas, sí pueden modificarse.

---

En Python podemos crearlos utilizando llaves `{}` o la función `set()`.

Por ejemplo:

```python
frutas = {"manzana", "banana", "naranja"}
numeros = set([1, 2, 3, 4, 5])
```

---

Algo interesante de los conjuntos es que permiten realizar operaciones matemáticas.

Por ejemplo:

- **Unión (`|`)** → combina elementos
- **Intersección (`&`)** → muestra elementos compartidos
- **Diferencia ()** → muestra lo que está en un conjunto y no en otro
- **Diferencia simétrica (`^`)** → muestra elementos que no comparten

---

También cuentan con métodos útiles como:

- `add()` → agregar elementos
- `remove()` → eliminar elementos
- `discard()` → eliminar sin error si no existe
- `clear()` → vaciar el conjunto

---

Creo que los conjuntos muestran algo interesante sobre Python.

Cada estructura de datos está diseñada para resolver una necesidad distinta.

Las listas mantienen orden.

Las tuplas priorizan estabilidad.

Y los conjuntos buscan unicidad.

---

Después de recorrer tantas estructuras, empiezo a notar algo:

Programar no solo consiste en guardar datos, también es elegir la mejor forma de organizarlos.