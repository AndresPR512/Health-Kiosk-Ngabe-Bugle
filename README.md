# Kiosco solar de salud para la Comarca Ngäbe Buglé

Sitio de divulgación de un proyecto universitario que propone el diseño conceptual de un kiosco de salud autónomo, alimentado con energía solar y con conectividad satelital, orientado a apoyar el diagnóstico temprano de enfermedades en comunidades de difícil acceso de la Comarca Ngäbe Buglé, Panamá.

Este repositorio contiene la página web que acompaña al artículo científico del proyecto. Es un sitio estático, pensado para explicarle a un público general de qué se trata la propuesta, sin necesidad de leer el paper completo.

**Importante:** esto es una propuesta de diseño a nivel conceptual. No se construyó ningún prototipo físico ni se validó en campo. El sitio lo aclara varias veces porque es parte central del proyecto ser honestos sobre eso.

## Ver el sitio

El sitio está pensado para desplegarse con GitHub Pages. Una vez publicado, quedará disponible en una dirección con esta forma:

```
https://tu-usuario.github.io/nombre-del-repositorio/
```

## Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
└── img/
    ├── diagrama-arquitectura.png
    ├── captura-chatgpt.png
    └── captura-claude.png
```

No hay backend ni proceso de build. Es HTML, CSS y JavaScript puros, listos para abrirse directamente desde el navegador o publicarse tal cual.

## Cómo desplegarlo en GitHub Pages

1. Subí todos los archivos de este repositorio (incluyendo la carpeta `img`) a tu repositorio de GitHub.
2. Andá a **Settings → Pages** dentro del repositorio.
3. En **Source**, elegí la rama donde están los archivos (normalmente `main`) y la carpeta raíz (`/root`).
4. Guardá los cambios. GitHub va a tardar uno o dos minutos en publicar el sitio.
5. La URL final va a aparecer arriba de esa misma sección de configuración.

## Tecnologías usadas

- HTML semántico
- CSS con variables personalizadas (sin frameworks)
- JavaScript nativo, sin librerías externas
- Tipografías Bricolage Grotesque e IBM Plex, cargadas desde Google Fonts

## Contenido del sitio

El sitio resume, en lenguaje simple, las partes principales del artículo original: el problema de acceso a salud en la comarca, la propuesta del kiosco, el marco teórico, la metodología, los materiales, el diseño del sistema, la comparativa de tecnologías, los costos estimados, las limitaciones del proyecto, la forma de trabajo del equipo y el uso que se le dio a herramientas generativas durante el desarrollo.

## Autores

- Andrés Paredes
- Eric Núñez
- Mario González

**Asesoría:** Prof. Marvin X. González
**Correcciones:** Rafael Cosme

Universidad Tecnológica de Panamá, Centro Regional de Veraguas.

## Sobre el uso de herramientas generativas

Durante el desarrollo del proyecto se usaron ChatGPT y Claude como apoyo: para buscar referencias, ordenar la estructura del artículo, resumir fuentes y armar este sitio de divulgación a partir de un prompt elaborado por el equipo. Todo el contenido fue revisado y corregido por el equipo antes de integrarlo. El sitio tiene una sección dedicada a explicar esto con más detalle.

## Licencia

Este proyecto se comparte con fines académicos y de divulgación. Si vas a reutilizar el contenido o el diseño, mencioná la fuente original.
