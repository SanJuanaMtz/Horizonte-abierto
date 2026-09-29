titulo: Día 31 Excepciones Personalizadas
fecha: 2026-06-05
categorias: tecnologia python
imagen: imagenes/excepcion.jpg
imagen_credito: Imagen tomada de Unsplash / Vitaly Gariev
imagen_enlace: https://unsplash.com/es/@silverkblack

## Excepciones personalizadas

Cada persona es diferente.

Aunque podamos compartir gustos, experiencias o formas de pensar, siempre existen pequeños detalles que nos distinguen unos de otros.

La tecnología ha aprendido a adaptarse a estas diferencias.

Hoy podemos personalizar nuestros teléfonos, aplicaciones, perfiles y herramientas para que se ajusten mejor a nuestras necesidades.

Y, curiosamente, algo similar ocurre en programación.

No todos los errores son iguales.

Existen errores comunes que los lenguajes ya contemplan y manejan por nosotros, pero también existen situaciones específicas de cada programa que requieren soluciones particulares.

Aquí es donde entran las excepciones personalizadas.

En Python podemos crear nuestras propias excepciones cuando queremos representar errores específicos de nuestra aplicación.

Para ello, normalmente creamos una clase que hereda de la clase base `Exception`.

Sin embargo, antes de llegar a ese punto, también podemos utilizar directamente la excepción genérica para manejar situaciones que queremos controlar.

Por ejemplo:

```python
def funcion():
    if condicion:
        raise Exception("Descripción del error")

try:
    funcion()
except Exception as e:
    print(f"Error: {str(e)}")
```

En este ejemplo, la función evalúa una condición.

Si esta se cumple, se genera una excepción mediante la instrucción `raise`.

Posteriormente, el bloque `except` captura el error y nos permite reaccionar ante él sin que el programa termine abruptamente.

Lo interesante es que podemos ir más allá y crear excepciones adaptadas a nuestras propias necesidades, haciendo que los errores sean más descriptivos y fáciles de identificar.

Después de todo, si cada programa tiene objetivos distintos, también puede tener problemas distintos.

Y así como la personalización ayuda a que la tecnología se adapte mejor a las personas, las excepciones personalizadas ayudan a que nuestros programas manejen mejor las situaciones particulares para las que fueron diseñados.