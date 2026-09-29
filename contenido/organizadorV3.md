titulo: Día 30 Organizador Version 3.0
fecha: 2026-05-27
categorias: python tecnologia
imagen: imagenes/organizadorV3.png
imagen_credito: Imagen tomada como evidencia del programa realizado
imagen_enlace: 

## Construyendo un organizador de archivos con interfaz en Python: de una idea simple a una herramienta funcional

A veces una necesidad sencilla termina convirtiéndose en un proyecto mucho más completo de lo que imaginábamos.

Todo comenzó con algo cotidiano: quería una forma más práctica de organizar archivos automáticamente sin tener que moverlos manualmente cada vez.

La idea inicial era bastante simple:

crear una herramienta que clasificara archivos según su tipo y que además fuera cómoda de usar.

Con Python terminé desarrollando una versión funcional con interfaz gráfica, y durante el proceso aprendí bastante sobre automatización, estructura de código y cómo convertir una idea pequeña en una herramienta real.

## El objetivo del proyecto

La meta era construir una herramienta que pudiera:

- seleccionar una carpeta desde una interfaz visual
- detectar automáticamente el tipo de archivo
- mover cada archivo a su carpeta correspondiente
- crear carpetas automáticamente si no existen
- mostrar un registro de movimientos dentro de la aplicación

Quería evitar depender de la terminal y hacer que el flujo fuera visual y sencillo.

## Tecnologías utilizadas

Para este proyecto utilicé:

- **Python 3**
- **Tkinter**
- **os**
- **shutil**

### ¿Por qué Tkinter?

Porque permite crear interfaces gráficas directamente con Python y fue ideal para este tipo de automatización.

Además me ayudó a practicar una parte del lenguaje que no había explorado tanto: crear herramientas que puedan interactuar visualmente con el usuario.

---

## Primera parte: definir categorías

Lo primero fue crear las reglas de organización.

Definí un diccionario donde cada carpeta contiene las extensiones que debe recibir:

```python
CARPETAS= {
"Documents": [".pdf",".docx",".txt"],
"Pictures": [".jpg",".jpeg",".png"],
"Compressed": [".zip",".rar"]
}
```

Esto hizo mucho más simple la clasificación.

Por ejemplo:

- `.pdf` → Documents
- `.jpg` → Pictures
- `.zip` → Compressed

Y además volvió mucho más fácil agregar nuevas categorías en el futuro.

---

## Segunda parte: seleccionar una carpeta desde la interfaz

Después agregué el botón para abrir el explorador de archivos:

```python
def seleccionar_carpeta():
global carpeta_seleccionada
carpeta_seleccionada = filedialog.askdirectory()
```

Esto evita escribir rutas manualmente y hace más cómoda la experiencia.

También actualicé una etiqueta dentro de la ventana para mostrar qué carpeta fue seleccionada.

Ese detalle me gustó bastante porque hace que el usuario siempre sepa sobre qué carpeta está trabajando.

---

## Tercera parte: recorrer archivos automáticamente

Después llegó la lógica principal.

La aplicación revisa todos los archivos de la carpeta:

```python
for archivo in os.listdir(carpeta_seleccionada):
```

Luego valida que realmente sea un archivo:

```python
if os.path.isfile(ruta_archivo):
```

Y obtiene su extensión:

```python
extension = os.path.splitext(archivo)[1].lower()
```

Convertir a minúsculas ayudó bastante porque evita errores con extensiones como `.JPG` o `.PNG`.

---

## Cuarta parte: mover archivos automáticamente

Cuando el programa encuentra coincidencia:

- crea la carpeta si no existe
- mueve el archivo
- registra el cambio

```python
os.makedirs(destino, exist_ok=True)

shutil.move(
ruta_archivo,
os.path.join(destino,archivo)
)
```

Ejemplo práctico:

Antes:

```python
Downloads/
    report.pdf
    photo.jpg
    files.zip
```

Después:

```python
Downloads/
    Documents/report.pdf
    Pictures/photo.jpg
    Compressed/files.zip
```

---

## Quinta parte: mostrar actividad dentro de la aplicación

Una de las mejoras que más me gustó fue agregar un pequeño registro visual.

Cada archivo movido aparece en pantalla:

```python
log_text.insert(
tk.END,
f"Moved:{archivo} →{carpeta_destino}\n"
)
```

Esto ayuda a:

- verificar qué ocurrió
- revisar resultados
- detectar errores
- hacer más clara la interacción

---

## Validaciones y mensajes

También añadí mensajes para mejorar la experiencia.

Si no se selecciona carpeta:

```python
messagebox.showwarning(...)
```

Y cuando termina:

```python
messagebox.showinfo(...)
```

Son detalles pequeños, pero ayudan mucho a que la herramienta se sienta más completa.

---

## Cómo fue evolucionando

Algo que me gustó de este proyecto fue ver cómo cada versión aportó algo diferente.

### Versión 1

La idea base.

Crear una automatización funcional.

### Versión 2

Reorganizar el código.

Hacerlo más limpio y más fácil de escalar.

### Versión 3

Agregar interfaz visual.

Mejorar el flujo de uso.

Y convertirlo en una herramienta más práctica.

La tercera versión fue el momento donde sentí que dejó de ser solo una prueba y empezó a parecer una herramienta real.

---

## Lo que aprendí

Este proyecto me ayudó a practicar:

- estructuras de datos
- automatización con Python
- manipulación de archivos
- funciones
- validaciones
- Tkinter
- experiencia de usuario básica

Pero también me recordó algo importante:

a veces avanzar poco a poco funciona mejor que intentar construir todo de una sola vez.

Cada mejora pequeña terminó enseñándome algo diferente.

---

## Qué sigue

Ahora que ya existe una base estable, tengo varias ideas para seguir mejorándolo:

- guardar historial
- agregar filtros por más extensiones
- mejorar el diseño visual
- generar reportes
- permitir personalizar categorías

Y eso es algo que me gusta mucho de programar:

una idea puede empezar siendo pequeña y crecer conforme tú también vas aprendiendo.

Este organizador comenzó como una necesidad práctica.

Terminó siendo una herramienta funcional.

Y en el proceso me ayudó a aprender bastante más de Python de lo que esperaba.