titulo: Generador Codigo QR Version 1
fecha: 2026-07-20
categorias: python
imagen: imagenes/generador-V1.png
imagen_credito: Imagen tomada como evidencia del programa realizado
imagen_enlace: 

Hace unos meses decidí mandar a imprimir mis primeras tarjetas como asesora de viajes. Mientras veía distintos diseños, me di cuenta de que casi todas tenían un código QR.

Al principio pensé en utilizar alguna página que lo generara por mí. Sin embargo, la mayoría ofrecía códigos dinámicos que dejaban de funcionar después de cierto tiempo o requerían una suscripción para mantenerlos activos.

Esa solución no terminaba de convencerme.

Fue entonces cuando me surgió una pregunta:

**¿Sería capaz de crear uno por mi cuenta utilizando Python?**

La respuesta me sorprendió.

Gracias a Python, generar un código QR básico es mucho más sencillo de lo que imaginaba.

## El corazón del proyecto

Para esta primera versión utilicé la librería `qrcode`, una de las más utilizadas por la comunidad de Python para generar códigos QR.

Su trabajo consiste en transformar la información que queremos compartir —como una dirección web— en la matriz de puntos que después puede interpretar la cámara de un teléfono.

## El código base

```python
import qrcode

def generar_qr_basico(url, nombre_archivo="codigo_qr.png"):
    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=4
    )

    qr.add_data(url)
    qr.make(fit=True)

    imagen = qr.make_image(fill_color="black", back_color="white")
    imagen.save(nombre_archivo)

    print(f"¡QR generado con éxito y guardado como '{nombre_archivo}'!")

generar_qr_basico("https://github.com")
```

## ¿Qué hace exactamente?

Aunque el código es pequeño, detrás ocurren varias cosas interesantes.

Primero se configura el código QR indicando algunos parámetros importantes.

- `version` determina el tamaño del código QR.
- `box_size` controla el tamaño de cada cuadro.
- `border` agrega un margen que facilita que los lectores puedan reconocerlo correctamente.

Después añadimos la información que queremos almacenar.

En este caso, una dirección web.

Finalmente, la librería genera la imagen y la guarda automáticamente como un archivo `.png`.

---

Este proyecto me recordó algo que me gusta mucho de la programación.

Muchas veces utilizamos herramientas todos los días sin detenernos a pensar cómo funcionan.

Los códigos QR parecían algo complejo.

Sin embargo, al entender las herramientas adecuadas, descubrí que detrás existe una lógica bastante accesible.

Y creo que esa es una de las cosas más satisfactorias de aprender programación: dejar de ver la tecnología como una caja negra y empezar a comprender cómo está construida.