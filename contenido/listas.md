titulo: Día 21 Listas
fecha: 2026-05-05
categorias: python
imagen: imagenes/listas.jpg
imagen_credito: Imagen tomada de Unsplash / Glenn Carstens-Peters
imagen_enlace: https://unsplash.com/es/@glenncarstenspeters

Hace apenas una semana estábamos recorriendo este camino en C.

Ahora, en Python, muchas cosas comienzan a sentirse familiares.

Y eso es interesante, porque aunque cambie el lenguaje, varios conceptos siguen estando ahí.

Solo cambian la forma en que se presentan.

---

Un buen ejemplo son las listas.

En C trabajábamos con matrices.

En Python tenemos listas, que cumplen una función parecida: almacenar varios valores en una misma estructura.

La diferencia está en que las listas son mucho más flexibles.

Mientras que en C una matriz almacena elementos del mismo tipo, en Python una lista puede contener distintos tipos de datos.

---

Por ejemplo:

```python
frutas = ["manzana","banana","naranja"]

print(frutas[0])
print(frutas[1])
print(frutas[2])
```

---

Algo que vuelve muy prácticas a las listas son sus métodos integrados.

Estos nos permiten modificarlas fácilmente:

- `append()` → agrega un elemento al final
- `insert()` → inserta un elemento en una posición específica
- `remove()` → elimina un elemento
- `pop()` → elimina un elemento por posición
- `sort()` → ordena la lista
- `reverse()` → invierte su orden

---

También existen las **listas por comprensión**.

Estas permiten crear nuevas listas de forma más compacta.

Su sintaxis puede verse así:

```python
nueva_lista = [expresion for elemento in secuencia if condicion]
```

---

Al principio puede parecer una forma extraña de escribir código.

Pero cuando empiezas a entenderla, te das cuenta de que simplifica bastante ciertas tareas.

---

Creo que trabajar con listas deja algo muy claro:

Python busca que resolver problemas sea más directo.

Y después de venir de C, esa diferencia se siente bastante.