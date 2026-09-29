titulo: Generador Codigo QR Version 2 y 3
fecha: 2026-07-31
categorias: python
imagen: imagenes/generador-V23.png
imagen_credito: Imagen tomada como evidencia del programa realizado
imagen_enlace: 

## Personalizando mi generador de códigos QR (Versiones 2 y 3)

Después de generar la primera versión de mi código QR, me di cuenta de que cumplía perfectamente su función.

Escanearlo llevaba exactamente al lugar que yo quería.

Sin embargo, había algo que no terminaba de convencerme.

Se veía como cualquier otro código QR.

Y si iba a formar parte de mi tarjeta como asesora de viajes, también debía representar la identidad de mi marca.

Fue entonces cuando decidí crear una segunda versión enfocada no en la funcionalidad, sino en el diseño.

### El primer cambio: los colores

Para comenzar con la personalización incorporé la librería **Pillow (PIL)** junto con `qrcode`.

Esto me permitió tener un mayor control sobre la apariencia de la imagen generada.

Lo primero que cambié fueron los colores.

En lugar del clásico blanco y negro, utilicé los colores de mi marca para que el código QR mantuviera la misma identidad visual que el resto de mis materiales.

Para ello pueden utilizarse colores en formato hexadecimal o mediante valores RGB, dependiendo de la forma en que queramos definirlos.

### Mejorando la calidad de impresión

Otro aspecto que decidí ajustar fue el tamaño de la imagen.

El parámetro `box_size` controla el tamaño de cada módulo del código QR.

Aumentarlo permite generar imágenes con mayor resolución, algo especialmente útil cuando el código será impreso en tarjetas, folletos o cualquier otro material físico.

También mantuve un margen utilizando `border`.

Ese espacio en blanco alrededor del código no es únicamente estético; facilita que las cámaras puedan reconocerlo correctamente al escanearlo.

### El detalle que hacía falta

Aunque los cambios anteriores mejoraban mucho el resultado, seguía sintiendo que faltaba algo.

Quería que, con solo verlo, cualquiera pudiera identificar inmediatamente mi marca.

La respuesta era bastante evidente:

**Agregar mi logotipo en el centro del código QR.**

Pero hacerlo no consistía únicamente en colocar una imagen encima.

### La importancia de la corrección de errores

Los códigos QR incorporan un sistema de redundancia basado en el algoritmo **Reed-Solomon**, lo que les permite seguir funcionando incluso cuando parte de la imagen está dañada o cubierta.

Para aprovechar esa característica configuré el nivel máximo de corrección de errores:

```python
error_correction=qrcode.constants.ERROR_CORRECT_H
```

Este nivel permite recuperar la información incluso si aproximadamente un 30 % del código queda oculto.

Gracias a ello es posible colocar un logotipo en el centro sin afectar el funcionamiento del QR, siempre que el diseño se mantenga dentro de un tamaño razonable.

### Un pequeño consejo

Si decides personalizar un código QR con un logotipo, procura utilizar una imagen sencilla, con buen contraste y, si es posible, con un pequeño borde alrededor.

Eso ayudará a mantener una buena legibilidad durante el escaneo.

### Lo que aprendí

Este proyecto me hizo comprender que desarrollar una aplicación no termina cuando "funciona".

Muchas veces la siguiente etapa consiste en pensar en la experiencia de quien la utilizará.

En este caso, el código QR ya cumplía su función desde la primera versión.

Las siguientes versiones no buscaban hacerlo más funcional, sino convertirlo en una herramienta que también representara mi identidad y la de mi marca.

Y creo que esa diferencia también forma parte del proceso de aprender a desarrollar software.