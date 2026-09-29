titulo: Día 14 De C a Python
fecha: 2026-04-23
categorias: python c
imagen: imagenes/c-python.jpg
imagen_credito: Imagen tomada de Unsplash /  Zach Graves
imagen_enlace: https://unsplash.com/es/@zgraves

*Disclaimer: Para realizar estas notas y las siguientes de este curso de Python, he añadido un curso extra como apoyo a mi aprendizaje que pueden encontrar en la plataforma de Santander Open Academy. Es un curso gratuito.*

---

Python sigue presentando varias diferencias con respecto a C, y son precisamente estas diferencias las que hacen que la transición se sienta más ligera en muchos aspectos.

Una de las primeras cosas que cambia es la forma en la que escribimos el código.

Además de dejar atrás el punto y coma, también desaparecen las llaves.

En Python, los bloques de código se definen mediante indentación, es decir, usando espacios para estructurar correctamente cada sección.

Por ejemplo:

```
ifcondition:

# Bloque de código si la condición es verdadera
instrucción1
instrucción2

else:

# Bloque de código si la condición es falsa
instrucción3
instrucción4
```

Este cambio hace que el código se vea más limpio, aunque al inicio requiere acostumbrarse.

---

Otra diferencia importante tiene que ver con la memoria.

En C, teníamos que ser muy conscientes de cómo manejábamos la memoria, utilizando herramientas como los punteros.

En Python, esa responsabilidad se abstrae.

No es que los punteros dejen de existir como concepto, sino que el lenguaje se encarga de manejar la memoria automáticamente.

Esto reduce muchos errores comunes, pero también cambia la forma en la que entendemos lo que ocurre “por debajo”.

---

También hay diferencias más simples, pero igual de importantes.

Por ejemplo, los comentarios en Python se escriben utilizando `#`, y es buena práctica usarlos para hacer el código más entendible.

Sin embargo, recordemos que este símbolo en C lo utilizamos para importar las librerías, por lo que en python debemos importarlas de la siguiente forma:

`import cs50`

o podemos solamente importar las funciones que utilizaremos:

```python
from cs50 import get_float, get_int, get_string
```

Python también es sensible a mayúsculas y minúsculas, por lo que `variable`, `Variable` y `VARIABLE` son elementos distintos.

Además, los paréntesis se utilizan para agrupar expresiones, definir funciones y realizar llamadas.

---

En general, Python se siente como un lenguaje más ligero.

Después de trabajar con C, donde cada detalle importa, Python permite enfocarse más en lo que queremos hacer que en cómo gestionamos cada parte del proceso.