Presentación: Sesión C - Gasto Inteligente, Inversiones EfectivasEste repositorio contiene el código fuente de la presentación web interactiva para la "Sesión C: Gasto Inteligente, Inversiones Efectivas". El proyecto está construido con Reveal.js y está diseñado para ser fácilmente actualizable y desplegable.✨ Estructura del ProyectoEl proyecto está organizado de forma modular para separar el contenido de la estructura y la lógica, facilitando su mantenimiento./
|-- index.html          # Esqueleto principal de la presentación.
|-- content.js          # ¡IMPORTANTE! Aquí vive todo el texto de las diapositivas.
|-- /assets/
|   |-- /css/
|   |   |-- custom.css  # Estilos visuales personalizados.
|   |-- /js/
|   |   |-- main.js     # Lógica que construye las diapositivas dinámicamente.
|   |-- /images/
|       |-- (Imágenes de la presentación)
|-- README.md           # Este archivo.
🚀 Cómo Actualizar el ContenidoLa principal ventaja de esta estructura es que no necesitas tocar el código HTML para cambiar los textos.Para modificar cualquier título, subtítulo o contenido de las diapositivas, sigue estos pasos:Abre el archivo content.js.Busca la diapositiva que deseas editar dentro del array slideContent. Cada elemento del array corresponde a una diapositiva.Modifica los valores de las propiedades title, subtitle o content según necesites.Guarda el archivo.Sube los cambios a tu repositorio de GitHub (git push). Netlify detectará el cambio y actualizará la presentación automáticamente.🛠️ DespliegueEste sitio está configurado para un despliegue continuo y automático a través de Netlify.Repositorio: Conectado a este repositorio de GitHub.Publicación: Cualquier cambio subido a la rama main (o la rama principal que configures) disparará un nuevo despliegue en Netlify, actualizando el sitio en segundos.No se requiere ninguna configuración de build. Netlify sirve los archivos estáticos directamente.