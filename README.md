# Ruta Gastronómica en Benidorm

Este proyecto es una aplicación web detallada que presenta una selección de los mejores rincones culinarios de Benidorm. Ha sido desarrollado utilizando el **UOC Boilerplate v3.13.0**, un entorno de desarrollo moderno basado en Parcel para optimizar el flujo de trabajo frontend.

## ¿De qué trata este proyecto?

La aplicación muestra **9 de los establecimientos más destacados** para comer en Benidorm: desde marisquerías tradicionales hasta las barras de "pintxos" más innovadoras del casco antiguo. El objetivo es ofrecer una experiencia de usuario fluida que invite a descubrir la cultura local.

## Características principales

* **Diseño Mediterráneo**: Interfaz visualmente atractiva con una paleta de colores inspirada en la Costa Blanca (azules profundos y amarillos dorados).
* **Arquitectura Modular**: El contenido se organiza mediante "fichas" individuales (`src/views/fichas/`) que se insertan en la página principal utilizando `posthtml-include`.
* **Estilos Dinámicos**: Implementación de Sass (SCSS) para la gestión centralizada de variables de color y tipografías.
* **Mapa Interactivo**: Integración de la librería Leaflet para generar un mapa dinámico con la ubicación exacta de cada parada.

## Dependencias Utilizadas

En este proyecto se han integrado las siguientes librerías externas:

* FontAwesome v7.2.0
* Leaflet v1.9.4
* Translate v3.0.1

## Cómo empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1. Requisitos previos

Asegúrate de tener instalado **Node.js** (versión 18.x o superior).

### 2. Instalación

Clona el repositorio y accede a la carpeta:

```bash
git clone https://github.com/usuario/ruta-gastronomica-benidorm.git
cd ruta-gastronomica-benidorm
```

Instala todas las dependencias:

```bash
npm install
```

### 3. Desarrollo

Inicia el servidor local con recarga en vivo:

```bash
npm run dev
```

## Especificaciones Técnicas (Stack)

| Tecnología | Descripción |
|------------|-------------|
| **Sass (SCSS)** | Compilación y preprocesamiento de estilos con variables. |
| **PostCSS** | Autoprefijado para compatibilidad entre navegadores. |
| **Babel/SWC** | Transpilación de JS moderno para soporte de navegadores antiguos. |
| **PostHTML** | Inclusión de componentes HTML parciales. |
| **Sharp** | Optimización automática de imágenes (PNG, JPG, etc.). |

## Estructura de Carpetas

```
src/
├── assets/
│   ├── images/   # Recursos visuales (separador.png, favicon...)
│   └── styles/   # SCSS (_variables.scss, layouts/_home.scss)
├── views/        # Fragmentos HTML (Nav, Footer, Fichas)
└── index.html    # Punto de entrada principal
```

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta el servidor de desarrollo en localhost:1234. |
| `npm run build` | Crea la versión de producción optimizada en la carpeta /dist. |
| `npm run clean` | Limpia los archivos temporales y la carpeta /dist. |

---

Este proyecto ha sido desarrollado siguiendo las pautas académicas de la **UOC (Universitat Oberta de Catalunya)**.
