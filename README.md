# AdulTech: Alfabetización Digital para Adultos Mayores

## Propósito del Proyecto
AdulTech es una aplicación web diseñada para cerrar la brecha digital, instruyendo a personas adultas mayores en el uso de herramientas digitales básicas como WhatsApp, Gmail, llamadas telefónicas y la reproducción de videos en YouTube. El proyecto se enfoca en la **simplicidad, accesibilidad y claridad** para garantizar una experiencia de aprendizaje sin frustraciones.

## Características Principales
* **Interfaz Intuitiva:** Diseño limpio con botones grandes y un flujo de navegación sencillo, pensado para usuarios con poca o nula experiencia digital.
* **Guías Paso a Paso:** Cada módulo incluye texto descriptivo, una imagen ilustrativa y, en el caso de YouTube, un video tutorial para una comprensión integral.
* **Accesibilidad:** Funciones clave como el **ajuste del tamaño de la letra** y la **narración por voz** del contenido (`SpeechSynthesis`) hacen que la aplicación sea usable para personas con dificultades visuales o que prefieren una guía auditiva.
* **Tecnología Ligera:** Desarrollado íntegramente con **HTML, CSS y JavaScript** (Vanilla), sin el uso de frameworks o bases de datos, lo que permite que el proyecto sea **autónomo y "plug-and-play"**.

## Estructura del Proyecto
El proyecto está organizado en una estructura de carpetas clara y lógica para facilitar su uso y mantenimiento.
```

adultech\_codigo\_completo/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── bola.png
│   │   ├── error.png
│   │   ├── gmail1.png
│   │   ├── llamada1.png
│   │   └── whatsapp1.png
│   └── js/
│       └── script.js
└── index.html

```

##  Cómo Usar AdulTech
1.  **Descargar:** Clona o descarga el repositorio completo en tu equipo.
2.  **Abrir:** Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3.  **Usar:** Haz clic en los botones de la interfaz para explorar las diferentes guías.

No se requiere ningún servidor web. El proyecto funciona de forma local y **sin conexión a internet**, a excepción del video de YouTube que requiere conectividad.

##  Autor
* **Angelo Acevedo**

## Notas Adicionales
* Este proyecto fue diseñado con el objetivo de ser lo más accesible posible. Las imágenes se muestran con rutas relativas correctas para funcionar tanto en un servidor web como al abrir el archivo localmente.
* La funcionalidad de video utiliza un `iframe` para consumir el contenido directamente desde YouTube, lo que permite que la aplicación sea extremadamente ligera y eficiente en el uso del espacio de disco.
```
