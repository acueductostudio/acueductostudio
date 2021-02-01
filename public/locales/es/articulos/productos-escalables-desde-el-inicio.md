---
title: 'Piensa tu producto escalable desde el inicio'
subtitle: 'Los desarrollos de software que no se preparan para su expansión, limitan a sus negocios exponiéndose a considerables pérdidas de recursos.',
author: 'Rodrigo Salmerón'
date: '2021-02-28'
---

El alcance de los desarrollos digitales no tiene límite. Disponibles **en** todo el planeta y **para** todo el planeta, estas plataformas permiten modelos de negocios poco accesibles para los negocios tradicionales, pues son modelos por autonomasia escalables. Esta es su principal promesa: la escalabilidad, por eso los llaman negocios de alto impacto. A diferencia de su crecimiento, la escalabilidad de un negocio es la posibilidad de incrementar sus utilidades **sin** incurrir en costos significativos -de vender más sin gastar más- y puede ser la diferencia entre el éxito o no de su incursión en los canales digitales.

Aplicar este concepto a los modelos digitales es un ejercicio bastante sencillo. No son necesarias nuevas sucursales, nuevos empleados o agentes de venta para facturar el doble que el trimestre anterior. Además, si los bienes a comerciar son digitales, ni siquiera aparecen nuevos retos de logística al aumentar la demanda. Sin embargo, **los negocios capaces de escalar requieren de plataformas y desarrollos tecnológicos que puedan expandirse junto con ellos.**

## Producto Mínimo Viable - MVP

A pesar de ser una inversión inestimable para todo tipo de negocio, los desarrollos de software son caros, y los buenos desarrollos, aún más. Pocos se los pueden permitir, e incluso para los que pueden son vistos como operaciones delicadas. Aquí entra el concepto del Producto Mínimo Viable –MVP por sus siglas en inglés–. La idea se popularizó hace más de una década y se ha vuelto un estándar en el valle californiano, primer punto de referencia de nuestra vertical. El concepto implica desarrollar únicamente las funciones esenciales que un producto digital necesita para salir al mercado, permitiendo así evaluar la viabilidad del modelo de negocio, recibir retroalimentación de usuarios reales y probar su valor para inversionistas. Además, reduce considerablemente el _time to market_ del producto *–*medida que se ha vuelto crucial en vista de la competencia voraz de los mercados actuales–.

Sin embargo, la implementación de un MVP sin una sólida estrategia de expansión puede entorpecer la plataforma en el largo plazo. Ya sea requiriendo cambios mayores al _codebase_ del proyecto o incluso volviendo inútil el desarrollo original. Ahora, sabemos que la habilidad de una plataforma de expandirse debe ser fundamental en su desarrollo, la pregunta es ¿cómo prepararse? Para ello, es vital comenzar con un trabajo de exploración que plantee la visión inicial, pero también que permita identificar los elementos, agentes y relaciones que el proyecto final requerirá.

[Ilustración MVP vs producto final]

## Identifica tu endgame

Ya que la estrategia es anticipar la expansión del proyecto y asegurar que su arquitectura le permita expandirse, se comienza por reflexionar y analizar los límites posibles del proyecto. Esta exploración debe ser lo más amplia posible y sus requerimientos varían de proyecto a proyecto, pero como reglas generales se debe contemplar: su expansión geográfica, sus funcionalidades finales y todos los agentes que pueden estar involucrados.

### Globalización

Hasta dónde puede crecer la plataforma. ¿Es un desarrollo con alcance global? ¿Continental? ¿Solo es posible operar en algunos países debido a sus regulaciones o geografía? Esto depende de muchos factores, pero la exploración debe ignorar explícitamente elementos financieros o logísticas actuales y enfocarse en posibilidades a largo plazo. Si se tienen todos los recursos posibles, ¿Dónde se puede operar? ¿Debe poderse elegir otro país? ¿Deben soportarse múltiples idiomas?

### Funciones finales

Esta dirección parece ser la más fácil y comúnmente es la más desarrollada, pero es importante llevarla aún más lejos y contemplar cómo puede evolucionar la propuesta de valor cuando se tienen cientos de miles y después millones de usuarios. Aquí hay que considerar cómo puede evolucionar la comunicación, que conexiones pueden hacerse entre los usuarios, qué data se podría analizar y qué se podría hacer con esa data –aunque este es un tema gigantesco que requiere de su propio artículo–. A pesar de las diferencias entre proyectos, una pregunta útil en todos es: ¿qué elementos se pueden integrar con otras plataformas para volver el producto más completo, eficaz y ahorrar esfuerzo cognitivo a los usuarios?

### Agentes involucrados

Identifica todos los tipos de usuarios posibles que, en el futuro, podrían interactuar con tu plataforma además de los _usuarios finales_ –tus Personas, los usuarios a quienes resuelves un problema–. Aún cuando no sean necesarios para arrancar, o que sus roles puedan llevarse acabo por otros departamentos, o -en un inicio- un equipo de administración más reducido. Esta lista debe contemplar, por ejemplo:

- Administradores
- Auditores de contenido
- Agentes de venta
- Soporte técnico / servicio al cliente
- Proveedores o intermediarios, por mencionar algunos.

Aunque contar con programadores o arquitectos de software en esta exploración puede ser muy útil, es posible realizarla internamente con el equipo original del proyecto. Sin embargo, es recomendable contar con este equipo en la mesa para la siguiente etapa, ya que el análisis de complejidad de funcionalidades requiere conocimientos de desarrollo.

## Pre-prepara tu desarrollo

Es tiempo de desvestir el proyecto de todo lo no-esencial para llegar al MVP. Las funcionalidades que deben de permanecer en el proyecto son solo las vitales para su correcto funcionamiento, las que apoyen la entrega de su función principal y permitan a los usuarios obtener de él el valor por el que lo consumirán.

Todas las funcionalidades de la aplicación (o grupos de funcionalidades ya que algunas no se pueden separar) se despliegan en una matriz de cuatro cuadrantes. En el eje horizontal se coloca la dificultad de desarrollo o complejidad de implementación y en el eje vertical la relevancia para el proyecto o el valor para el usuario. El MVP tiende a resultar del cuadrante superior izquierdo, con alto valor para los usuarios y una baja complejidad de implementación.

[Ilustración 4 Cuadrantes]

Este mismo ejercicio se puede repetir una vez desarrollado el MVP para dirigir la priorización de funcionalidades a implementar más adelante y esta es la manera más sencilla de fijar el norte del desarrollo. También se puede utilizar para identificar las fases o etapas de desarrollo del producto y asegurar que siempre se está avanzando de forma eficiente para entregar más valor a los usuarios. Sin embargo, recordemos que estamos haciendo un análisis de expansión y escalabilidad, y el cuadrante que tiende a estos conceptos es el superior derecho: gran valor pero mayor complejidad. Para mantener una visión escalable, la pregunta principal en esta etapa es: si el proyecto genera tracción ¿Cuáles y qué tan pronto estas funcionalidades se volverán esenciales?

Integrar una nueva ciudad a tu servicio, un nuevo país o millones de nuevas operaciones diarias puede depender de un par de líneas de código, siempre que dicha expansión se haya anticipado. Tomando en cuenta el análisis anterior y contrastándolo con las funcionalidades que más prontamente podrían ser utilizadas, se pueden identificar los cimientos imprescindibles. El objetivo es categorizar de la mejor forma los modelos de tu proyecto, para aplicarla en la arquitectura de tu base de datos, donde su impacto será el más alto. Aunque, también puede alterar otras áreas como la experiencia de usuario, o hasta el branding.

El ejemplo más básico puede ser un tema de expansión geográfica. Si identificaste que en el futuro puedes integrar múltiples países en tu plataforma, aunque al momento de lanzamiento solo existan una o dos ciudades, la arquitectura de tu software debe considerarlo. Este ejemplo podrá leerse demasiado burdo, pero en Acueducto hemos encontrado múltiples casos donde fueron necesarias costosas migraciones de bases de datos, ajustes a más del 70% de los componentes de una aplicación, o la programación de nuevas herramientas desde cero.

## Valida tu producto

Ya con este planteamiento estratégico preparado, la programación de tu plataforma puede contemplar los requerimientos y funcionalidades iniciales que necesitas para salir al mercado mientras se asegura de no bloquear caminos que serán necesarios en el futuro. Ahora, tu producto está listo para probar su product-market fit y requerirá de una estrategia de lanzamiento, inversión en marketing y adquisición de clientes.

Así completamos el proceso de armado del MVP cumpliendo con lo más importante: **no elevar los costos o tiempos de desarrollo en el futuro** con cambios considerables en el código, reestructuraciones de bases de datos pensadas para proyectos más limitados o cualquier otro cambio violento que pueda poner en riesgo el futuro del proyecto o su viabilidad financiera. Con un esfuerzo pequeño implementado a tiempo, se consigue dejar abierta la puerta para el aprovechamiento de recursos financieros en otras áreas vitales para el desarrollo del proyecto.

Mantener tu negocio vivo durante toda la etapa del Valle de la Muerte de un negocio digital también requiere de gran esfuerzo e inversión y ésta es una forma de prepararse para ella. Al no entorpecer el desarrollo, ni en el presente ni en el futuro, y apoyar al uso adecuado de los recursos del negocio, podrán enfocarse en verdaderamente escalar, impulsar ventas, abrir nuevos mercados, recopilar la data que necesites para iterar y lo más importante: entregar más valor a tus usuarios.

\*_Es importante mencionar que existe el concepto de escalabilidad de software y se refiere a operaciones o tácticas técnicas que refieren tanto al código como la configuración de los servidores donde vive tu plataforma digital. Este artículo refiere a la escalabilidad estratégica, al plan a largo plazo, y al enfoque global que debe contemplar un negocio digital; no a cuestiones de DevOps, implementación de software o estrategias de availability en producción._
