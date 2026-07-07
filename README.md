# Propuesta de un kiosco de salud inteligente para la Comarca Ngäbe Buglé

Proyecto de investigación de la Universidad Tecnológica de Panamá, Centro Regional de Veraguas, Facultad de Ingeniería en Sistemas Computacionales.

Este trabajo propone el diseño conceptual de un kiosco de salud inteligente, autónomo y alimentado con energía solar, orientado a apoyar el diagnóstico temprano de enfermedades en comunidades de difícil acceso de la Comarca Ngäbe Buglé, Panamá. Es una propuesta de diseño a nivel documental: no se construyó un prototipo físico ni se validó en campo.

## El problema

En la Comarca Ngäbe Buglé, llegar a un centro de salud puede tomar horas o incluso días. El traslado de un paciente hasta la instalación más cercana tiene un costo promedio cercano a B/. 80,00, y la comarca cuenta con apenas 3,3 médicos y enfermeras por cada 10.000 habitantes, muy por debajo de la recomendación de 25 para zonas de difícil acceso. Entre 2018 y 2022 la mortalidad general se mantuvo entre 302,9 y 348,8 por cada 100.000 habitantes, con enfermedades infecciosas y crónicas prevenibles entre las principales causas.

## La propuesta

Un kiosco autónomo capaz de:

- Medir signos vitales mediante sensores biométricos.
- Escuchar los síntomas del paciente y transcribirlos a texto.
- Capturar imágenes dermatológicas cuando hay una posible lesión.
- Procesar toda la información de forma local, sin depender de una conexión constante.
- Generar una orientación clínica preliminar.
- Conectar al paciente con personal médico remoto mediante Starlink cuando el caso lo requiere.

El sistema se organiza en seis subsistemas: suministro energético, conectividad satelital, unidad de cómputo, sensores y captura clínica, interfaz de usuario, y software con modelos de lenguaje y visión.

## Tecnologías consideradas

- **BioMistral-7B**, para el análisis de síntomas y datos clínicos estructurados.
- **EfficientNet-B4**, para la clasificación de imágenes dermatológicas.
- **Whisper**, para la transcripción de voz.
- **NVIDIA Jetson Orin Nano Super**, como unidad de cómputo local.
- **TensorRT-LLM**, como motor de inferencia.
- **BITalino**, MLX90614 y módulos de presión arterial y SpO2, para la captura de signos vitales.
- **Starlink**, para la conectividad satelital.
- Paneles solares con controlador MPPT y baterías LiFePO4, para el suministro energético.

## Metodología

La investigación es de tipo documental o bibliográfica y de alcance descriptivo. Se basó en revisión de artículos científicos, reportes técnicos y fichas de componentes en fuentes como IEEE Xplore, Google Scholar, arXiv y PubMed, sin experimentación ni recolección de datos primarios.

## Costos estimados

El subtotal de hardware por kiosco ronda los 3.294 USD, con un total estimado de aproximadamente 3.623 USD al incluir gabinete, cableado, conectores y montaje. A esto se suma un gasto recurrente del plan Starlink de unos 50 USD mensuales. Los precios son referenciales, consultados en junio de 2026, y no constituyen una cotización formal.

## Limitaciones

Esta es una propuesta conceptual, no un sistema construido ni probado. Antes de cualquier implementación real haría falta:

- Calibrar y validar cada sensor contra equipos de referencia clínica.
- Someter las salidas de los modelos de lenguaje a validación con personal médico especializado.
- Realizar una prueba piloto en una comunidad, con acompañamiento de personal de salud.
- Calcular con precisión el balance energético diario del sistema fotovoltaico.

Los LLMs médicos, incluido BioMistral-7B, pueden generar información incorrecta o alucinada, por lo que el sistema se concibe como una herramienta de apoyo a la orientación preliminar y no como sustituto del criterio médico profesional.

## Contenido de este repositorio

```
├── articulo/              artículo científico del proyecto, en formato IEEE
└── sitio-web/             sitio de divulgación para público general
    ├── index.html
    ├── style.css
    ├── script.js
    └── img/
```

El sitio de divulgación resume el proyecto en lenguaje accesible, sin tecnicismos innecesarios, para que cualquier persona pueda entender de qué se trata sin leer el artículo completo. Puede publicarse directamente con GitHub Pages, ya que no depende de ningún backend ni proceso de compilación.

## Equipo

- Andrés Paredes
- Eric Núñez
- Mario González

**Asesoría:** Prof. Marvin X. González
**Correcciones:** Rafael Cosme

## Uso de herramientas generativas

Durante el desarrollo del proyecto se usaron ChatGPT y Claude como apoyo en distintas etapas: búsqueda de referencias bibliográficas, orientación sobre la estructura del artículo, resumen y traducción de fuentes, y la construcción del sitio web de divulgación a partir de un prompt elaborado por el equipo. Toda la información generada fue revisada, corregida y contrastada por el equipo antes de integrarla al trabajo final.

## Licencia

Este proyecto se comparte con fines académicos. Si vas a reutilizar el contenido, los datos o el diseño, mencioná la fuente original.
