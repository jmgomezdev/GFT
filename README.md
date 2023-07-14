# Proyecto Front-End Inditex

Este proyecto consiste en la creación de una mini-aplicación para escuchar podcasts musicales. La aplicación tiene tres vistas principales:

1. Vista principal
2. Detalles de un podcast
3. Detalles de un capítulo de un podcast

La aplicación es una Single Page Application en React, por lo que la navegación se realiza siempre en el cliente, sin refrescar completamente el documento principal en ningún momento.

## Modos de la aplicación

La aplicación tiene dos modos:

1. Modo de desarrollo: en este modo, los assets se sirven sin minimizar (pueden estar concatenados si se quiere).
2. Modo de producción: en este modo, los assets se sirven concatenados y minimizados.

## Características técnicas

En este proyecto he empleado las siguientes tecnologías y herramientas:

- **TypeScript**: Como lenguaje principal para aprovechar las ventajas del tipado estático. TypeScript proporciona un entorno de desarrollo más robusto, facilitando la detección de errores en tiempo de compilación.
- **Tailwind CSS** y **CSS Modules**: Empleados para la estilización de los componentes, permitiendo un diseño personalizado y modular. Tailwind CSS proporciona utilidades de bajo nivel para construir diseños ágilmente, mientras que CSS Modules permite encapsular los estilos a nivel de componente.
- **Vite**: Lo he utilizado como entorno de desarrollo por su rapidez y eficiencia. Vite ofrece un rápido tiempo de recarga en caliente y un rendimiento de compilación optimizado, lo que mejora la experiencia de desarrollo.
- **Prettier** y **ESLint**: Implementados para mantener la consistencia y calidad del código. Prettier se encarga de formatear el código para que siga un estilo consistente, mientras que ESLint ayuda a identificar y corregir problemas en el código.
- **React Testing Library** y **Vitest**: Usados para realizar pruebas unitarias, asegurando la funcionalidad de los componentes de React. React Testing Library permite interactuar con los componentes como lo haría el usuario final, mientras que Vitest proporciona un entorno de pruebas optimizado para Vite.

## Ejecución de la aplicación

Instalar dependencias:

```bash
yarn install
```

Lanzar la aplicación en modo desarrollo:

```bash
yarn dev
```

Generar la build de proyecto:

```bash
yarn build
```

Previsualizar la build generada:

```bash
yarn preview
```

Ejecutar test unitarios:

```bash
yarn test
# o con un servidor web para visualizarlos
yarn testui
```

## Mejoras

Posibles mejoras del proyecto:

- **Renderizado en servidor**: Se podría usar Next.js para cachear las peticiones a la API a nivel de servidor, además de poder generar el HTML estático. Otra opción para este último punto sería emplear Astro con componentes de React o otro cualquiera.
- **Librerías de _fetching_**: El uso de React Query podría dar la oportunidad de controlar más fácilmente y _out the box_ las peticiones en segundo plano y cacheo a mayores del localStorage. Otra opción sería emplear SWR para gestionar las peticiones.
- **Implementar test e2e**: Se podrían aumentar las pruebas mediante test de integración en cypress, así quedarían cubiertas las páginas del proyecto

---

[PDF con la descripción del proyecto](https://drive.google.com/file/d/1DJQoM8TqA9koCzzUQ8fpi74bQGtn9yhO/view?usp=sharing)
