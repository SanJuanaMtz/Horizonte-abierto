titulo: Día 43 SQL Injection
fecha: 2026-08-27
categorias: sql
imagen: imagenes/sql-injection.jpg
imagen_credito: Imagen tomada de Unsplash / Markus Spiske
imagen_enlace: https://unsplash.com/es/@markusspiske

Las bases de datos son herramientas fundamentales en la vida real.

Gran parte de la información que almacenan pertenece a clientes, usuarios, empresas o proveedores de servicios, por lo que mantenerla segura es una de las responsabilidades más importantes de quienes desarrollan y administran estos sistemas.

Pero la seguridad no solamente consiste en impedir que alguien acceda a una base de datos.

También debemos asegurarnos de que las operaciones realizadas sobre ella sean consistentes y que la información no termine en un estado incorrecto.

### Cuando varias operaciones ocurren al mismo tiempo

Cuando dos o más personas, procesos o aplicaciones trabajan sobre la misma base de datos, pueden surgir problemas de concurrencia.

Una operación podría modificar información mientras otra intenta utilizarla, generando resultados inesperados si no existe un mecanismo que controle estos cambios.

Para esto existen las **transacciones**.

En SQL podemos utilizar:

- `BEGIN TRANSACTION` para iniciar una transacción.
- `COMMIT` para guardar permanentemente los cambios cuando todo ha salido correctamente.
- `ROLLBACK` para revertir los cambios realizados dentro de la transacción si ocurre algún problema.

Podríamos imaginarlo como una especie de borrador.

Realizamos varias modificaciones, comprobamos que todo esté correcto y, solamente entonces, confirmamos los cambios.

Si algo falla, podemos volver al estado anterior.

Pero los problemas de seguridad no terminan aquí.

---

## SQL Injection

Uno de los riesgos más conocidos al trabajar con bases de datos es la **inyección SQL**.

Este tipo de vulnerabilidad aparece cuando una aplicación incorpora información proporcionada por un usuario dentro de una consulta SQL de manera insegura.

El problema ocurre cuando la aplicación permite que esa información sea interpretada como parte del código SQL en lugar de tratarla únicamente como un dato.

Por ejemplo, una consulta construida directamente con información del usuario podría terminar siendo manipulada para modificar su comportamiento.

Por eso debemos evitar construir consultas concatenando directamente los valores recibidos.

Una alternativa mucho más segura es utilizar **consultas parametrizadas**.

Por ejemplo:

```python
rows=db.execute("SELECT COUNT(*) FROM users WHERE username = ? AND password = ?",username,password
)
```

Aquí los `?` funcionan como marcadores de posición.

Los valores de `username` y `password` se proporcionan como parámetros separados de la consulta, evitando que el contenido introducido por el usuario sea interpretado directamente como código SQL.

Esto es muy diferente a construir algo como:

```python
query="SELECT * FROM users WHERE username = '"+username+"'"
```

En este último caso estamos incorporando directamente la entrada del usuario dentro de la consulta, lo que puede abrir una puerta a ataques de inyección.

### La seguridad también está en los pequeños detalles

Utilizar consultas parametrizadas es solamente una parte de una estrategia de seguridad.

También debemos considerar:

- validar correctamente la información recibida;
- utilizar el principio de **mínimo privilegio** para los permisos de la aplicación;
- proteger las credenciales;
- evitar exponer información innecesaria;
- manejar correctamente los errores;
- mantener actualizadas las herramientas y dependencias.

Una base de datos puede contener información extremadamente valiosa, pero su seguridad no comienza cuando alguien intenta atacarla.

Comienza mucho antes.

Comienza cuando escribimos la primera línea de código que interactuará con ella.

Y esto me recuerda algo que he aprendido mientras avanzo en programación: **una buena práctica no solamente hace que nuestro código funcione; también ayuda a evitar que ese mismo código se convierta en una vulnerabilidad.**

Porque cuando trabajamos con datos reales, un pequeño error puede dejar de ser solamente un error.

Puede convertirse en un problema para alguien más.