titulo: Generador Codigo QR Version 4
fecha: 2026-08-06
categorias: python
imagen: imagenes/generadorV4.png
imagen_credito: Imagen tomada como evidencia del programa realizado
imagen_enlace: 

### De un QR bonito a una herramienta real (Versión 4)

Mi código QR ya era un éxito… o al menos, para el nivel estético que estaba buscando.

Tenía los colores de mi marca, el logotipo en el centro y una apariencia mucho más profesional que la primera versión.

Todo parecía perfecto.

Hasta que me di cuenta de un problema importante.

El código solo funcionaba para una red social, porque apuntaba a un único enlace.

Y en el mundo real, eso no era suficiente para mi negocio.

Necesitaba que las personas pudieran elegir entre varios destinos: Instagram, WhatsApp, mi portafolio, el menú de servicios y otros enlaces importantes.

Fue entonces cuando entendí que el problema ya no era el diseño del QR.

El problema era la estrategia.

### Cambiando la estrategia

En lugar de seguir apuntando el QR a un enlace estático externo, decidí construir una página web propia utilizando Flask y desplegarla gratuitamente en la nube mediante Render.

Nunca había utilizado Render antes y, siendo honesta, fue una de las partes más divertidas del proyecto.

Descubrir que podía publicar mi propio sitio web sin costo y conectarlo directamente con GitHub me hizo sentir que el proyecto estaba dando un paso mucho más serio.

### La arquitectura del proyecto

Desarrollé una pequeña aplicación web utilizando Python, HTML y CSS.

Personalicé la interfaz con los colores de mi marca y organicé el proyecto alrededor de un archivo principal llamado `app.py`, que contiene la aplicación Flask.

La idea era sencilla:

- crear una página con todos mis enlaces importantes,
- publicar esa página en internet,
- y hacer que el código QR apuntara a esa dirección pública.

De esa forma, un solo QR podría llevar a múltiples destinos.

### Preparando la aplicación para producción

Para que la aplicación pudiera ejecutarse correctamente en la nube, preparé el proyecto utilizando un servidor WSGI llamado Gunicorn y definí todas las dependencias en un archivo `requirements.txt`.

Después subí el proyecto completo a GitHub y lo conecté con Render.

En Render configuré un servicio web con los siguientes parámetros:

- Runtime: `Python 3`
- Build Command: `pip install -r requirements.txt`
- Start Command: `gunicorn app:app`

### El resultado final

Una vez desplegada la aplicación, obtuve una dirección pública similar a:

`https://mi-linktree.onrender.com`

Entonces generé una nueva versión del código QR, esta vez en alta resolución y con el logotipo central, apuntando a mi propia página web.

Y creo que ahí fue cuando el proyecto dejó de sentirse como un ejercicio de Python.

Ya no era solo un código QR bonito.

Era una herramienta real, conectada a internet, alojada en la nube y lista para imprimirse en tarjetas de presentación o folletos.

### Lo que más me gustó de esta versión

La versión 1 me enseñó a generar un QR.

La versión 2 me enseñó a personalizarlo.

La versión 3 me enseñó a integrar identidad de marca.

Y la versión 4 me enseñó algo mucho más grande:

cómo conectar Python, HTML, CSS, GitHub y un servicio de despliegue para construir una solución completa.

Y honestamente, esa sensación de ver una idea propia funcionando en internet no tiene precio.
