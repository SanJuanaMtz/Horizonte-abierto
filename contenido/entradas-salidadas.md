titulo: Día 32 Entradas y Salidas
fecha: 2026-06-16
categorias: python
imagen: imagenes/entra-sal.jpg
imagen_credito: Imagen tomada de Unsplash / Christina @ wocintechchat.com M
imagen_enlace: https://unsplash.com/es/@wocintechchat

Actualmente interactuamos con la tecnología de formas que hace algunos años parecían imposibles.

Hablamos con asistentes virtuales, realizamos búsquedas en segundos y utilizamos herramientas de inteligencia artificial para obtener información casi de manera instantánea.

Pero detrás de todas estas tecnologías existe algo mucho más básico: la comunicación.

Para que un programa pueda ayudarnos, primero necesita recibir información. Y una vez que la procesa, necesita devolvernos una respuesta.

En Python, esta interacción se realiza mediante la entrada y salida de datos.

Para obtener información del usuario durante la ejecución de un programa, podemos utilizar la función `input()`. Esta función muestra un mensaje en pantalla y espera a que el usuario ingrese un valor.

```python
nombre = input("Ingresa tu nombre: ")
edad = input("Ingresa tu edad: ")

print("Hola, " + nombre + "!")
print("Tienes " + edad + " años.")
```

La función `input()` siempre devuelve una cadena de texto. Si necesitamos trabajar con números, debemos convertir esos datos utilizando funciones como `int()` o `float()`.

Por ejemplo:

```python
edad = int(input("Ingresa tu edad: "))
```

Por otro lado, para mostrar información utilizamos la función `print()`, que permite enviar mensajes a la consola.

Una forma muy cómoda de mostrar información es mediante las *f-strings*, que permiten insertar variables directamente dentro de una cadena de texto.

```python
nombre = "Juan"
edad = 25

print(f"Hola, mi nombre es{nombre} y tengo{edad} años.")
```

Aunque hoy estamos acostumbrados a conversar con aplicaciones, asistentes virtuales e inteligencias artificiales, toda interacción entre una persona y un programa sigue basándose en la misma idea:

Primero proporcionamos información.

Después recibimos una respuesta.

Y aunque algunas respuestas lleguen en milisegundos y otras requieran más tiempo, toda comunicación comienza exactamente igual: con una pregunta y una respuesta esperando ser compartida.