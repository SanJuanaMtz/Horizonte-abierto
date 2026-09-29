titulo: Día 23 Diccionarios
fecha: 2026-05-08
categorias: python
imagen: imagenes/agenda.jpg
imagen_credito: Imagen tomada de Unsplash / Brett Jordan
imagen_enlace: https://unsplash.com/es/@brett_jordan

Hoy en día casi todos tenemos un teléfono.

Y aunque lo usamos para muchas cosas, una de sus funciones más básicas sigue siendo la comunicación.

Para lograrla, normalmente buscamos un contacto dentro de nuestra lista.

Sabemos a quién queremos encontrar, buscamos su nombre y obtenemos su número.

---

En Python existe una estructura que funciona de forma parecida: los diccionarios.

Un diccionario organiza información en pares de **clave y valor**.

Es decir, cada dato tiene una referencia única que nos permite encontrarlo rápidamente.

---

Por ejemplo:

```python
persona = {"nombre": "Juan",    "edad": 25,    "ciudad": "Madrid"}
```

Aquí:

- `"nombre"` es una clave
- `"Juan"` es su valor

---

Para acceder a un valor, utilizamos su clave:

```python
print(persona["nombre"])print(persona["edad"])
```

---

También podemos usar métodos como `get()`, que permite obtener valores de forma segura incluso si la clave no existe.

Además, los diccionarios incluyen herramientas útiles como:

- `keys()` → muestra las claves
- `values()` → muestra los valores
- `items()` → muestra pares clave-valor
- `update()` → actualiza información

---

Algo interesante es que los diccionarios no están pensados para almacenar datos de forma ordenada.

Su propósito es otro:

facilitar búsquedas rápidas a partir de una referencia.

---

Creo que esta estructura deja algo claro.

No siempre importa cómo se guardan los datos.

A veces lo verdaderamente importante es qué tan rápido podemos encontrarlos.

Y después de venir de C, resulta interesante ver cómo Python simplifica mucho este tipo de organización.