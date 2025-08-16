// Archivo de Contenido para la Presentación
// Para editar el texto de una diapositiva, solo modifica el objeto correspondiente aquí.

const slideContent = [
  // Lámina 1 - MODIFICADA
  {
  layout: 'layout-center-focus', // Cambiado a 'layout-center-focus' para centrar todo el contenido.
  title: '¡Bienvenidos a Consolidación 360°!',
  subtitle: 'Gasto Inteligente, Inversiones Efectivas', // Este texto se centrará.
  // La propiedad 'content' se elimina.
  image: 'assets/images/slide-1.jpeg', // La imagen se colocará debajo del texto.
  background: '' 
  },
  // Lámina 2
   {
    layout: 'layout-default', // Usamos un layout base para control total
    title: 'Mi Empresa Crece: Nuestra Esencia',
    content: `
      <p style="text-align: center; max-width: 80%; margin: 0 auto 30px auto;">
         <strong>Metodología probada</strong>.
      </p>

      <div class="slide-2-custom-columns">
        
        <div class="column-left">
          <img src="assets/images/slide-2.1.png" alt="Logo Mi Empresa Crece" class="logo-final">
          <h3 class="quote-final">"Construimos empresas sólidas y sostenibles."</h3>
        </div>
        
        <div class="column-right">
          <img src="assets/images/slide-2.jpeg" alt="Empresas en construcción" class="image-final">
        </div>

      </div>
    `
    // Ya no se usan las propiedades 'image' o 'image2'
  },
  // Lámina 3
  {
  layout: 'layout-infographic',
  title: 'Tu Programa de Transformación',
  // Se elimina el texto que estaba antes del icon-grid para permitir el centrado vertical.
  content: '<div class="icon-grid"><div class="icon-item"><i class="fas fa-users"></i><p>Equipo</p></div><div class="connector">&rarr;</div><div class="icon-item"><i class="fas fa-chart-line"></i><p>Ventas</p></div><div class="connector">&rarr;</div><div class="icon-item"><i class="fas fa-coins" style="color: var(--accent-color);"></i><p><strong>Inversión</strong></p></div></div>'
  },
  // Lámina 4
  {
    layout: 'layout-split',
    title: 'Sus Guías en este Viaje',
    content: '</strong>.</p><div style="text-align: center; margin-top: 40px; font-size: 1.2em; font-weight: bold;">Sesión Grupal &rarr; Implementación &rarr; Sesión Individual &rarr; Ajuste</div>',
    image: 'assets/images/slide-4.jpeg',
    image2: 'assets/images/slide-4.png'
  },
  // Lámina 5
  {
    layout: 'layout-default',
    title: 'Reglas del Juego y Dinámica',
    content: '<p>Establecer un marco de Responsabilidad y compromiso. No son reglas, son los <strong>cimientos para construir juntos</strong>.</p><ul class="infographic-list" style="margin-top: 50px;"><li><i class="fas fa-video"></i> <div><strong>Cámara encendida = Compromiso</strong><br>Estar presente y conectado con el grupo.</div></li><li><i class="fas fa-microphone-lines"></i> <div><strong>Participación activa = Proactividad</strong><br>Tu aprendizaje depende de tu involucramiento.</div></li><li><i class="fas fa-lightbulb"></i> <div><strong>Mente abierta = Crecimiento</strong><br>Dispuesto a desaprender y adoptar nuevos métodos.</div></li><li><i class="fas fa-clock"></i> <div><strong>Puntualidad = Respeto</strong><br>Valoramos tu tiempo y el de los demás.</div></li></ul>'
  },
  // Lámina 6
{
    layout: 'layout-default', // Usamos un layout flexible para control total
    title: 'Objetivos de Hoy: Tu Kit de Herramientas',
    content: `
      
      <div class="slide-6-three-columns">
        
        <div class="text-column">
          <h3><i class="fas fa-tools" style="color: var(--secondary-color);"></i> Herramientas Duras</h3>
          <ul>
            <li>El "termómetro" del Flujo de Caja Libre</li>
            <li>El sistema de Filtros 4+1</li>
            <li>La "calculadora" de ROI anualizado</li>
            <li>El Mapa de Riesgos</li>
          </ul>
        </div>

        <div class="text-column">
          <h3><i class="fas fa-brain" style="color: var(--secondary-color);"></i> Mindset del Arquitecto</h3>
          <ul>
            <li>Disciplina</li>
            <li>Confianza basada en datos</li>
            <li>Visión estratégica</li>
          </ul>
        </div>

        <div class="image-column">
          <img src="assets/images/slide-6.jpeg" alt="Kit de Herramientas">
        </div>

      </div>
    `
    // La propiedad 'image' se elimina porque la imagen ya está dentro de 'content'
  },
  // Lámina 7
  {
    layout: 'layout-center-focus',
    title: 'El Mapa de Conceptos (El "Porqué")',
    content: '<p>Presentar la Estrategia teórica en un solo vistazo. El mapa debe mostrar visualmente cómo el <strong>Marco 4+1</strong> resuelve los problemas frecuentes de inversión en PYMES, partiendo siempre del <strong>Flujo de Caja Libre</strong>.</p>',
    image: 'assets/images/slide-7.jpeg'
  },
  // Lámina 8
  {
    layout: 'layout-center-focus',
    title: 'Nuestra Ruta de Implementación (El "Cómo")',
    content: '<p>Traducir la teoría en un plan de acción concreto: el <strong>Flujo Consultivo</strong>. Se muestra el viaje paso a paso que realizarán durante las actividades.</p>',
    image: 'assets/images/slide-8.jpeg'
  },
  // Lámina 9 - Título Bloque 2
  {
    layout: 'layout-center-focus',
    title: 'BLOQUE 2: TALLER DE CONSTRUCCIÓN',
    background: 'var(--primary-color)',
    titleColor: 'white'
  },
  // Lámina 10
  {
    layout: 'layout-split',
    title: 'Actividad 1: Diagnóstico de Honestidad Radical',
    content: '<p><strong>Meta:</strong> Exponer los patrones de decisión actuales para crear una necesidad genuina de cambio.</p><h3>Instrucciones:</h3><ol><li>Abre tu Workbook - Ejercicio 1.</li><li>Sé <strong>brutalmente honesto</strong>. Este es un espejo, no un examen.</li><li>Reflexiona y anota: ¿Cuál es el hábito N°1 que más se repite en tus decisiones financieras?</li></ol>',
    image: 'https://placehold.co/500x350/eeeeee/333333?text=Visual+Ejercicio+1'
  },
   // Lámina 11
  {
    layout: 'layout-split',
    title: 'Actividad 2: Del Hábito al Método',
    content: '<p><strong>Meta:</strong> Convertir la conciencia del problema en un <strong>compromiso activo</strong> y un plan de acción.</p><h3>Instrucciones:</h3><ol><li>Ve al Ejercicio 2 de tu Workbook.</li><li>Para cada "Hábito de Riesgo", define tu "Primer Paso para Implementar" la buena práctica.</li><li>Crea un puente claro entre el problema y la solución.</li></ol>',
    image: 'https://placehold.co/500x350/eeeeee/333333?text=Visual+Ejercicio+2'
  },
  // Lámina 12
  {
    layout: 'layout-default',
    title: 'Actividad 3: El Muro de Contención',
    content: '<p><strong>Meta:</strong> Crear "reglas del juego" por escrito que actúen como un muro entre las finanzas del negocio y las personales.</p><div class="content-wrapper" style="display:flex; gap: 20px; margin-top: 40px;"><div style="flex:2;"><h3>Instrucciones:</h3><ol><li>En el Ejercicio 3, pon límites claros para proteger tu negocio y tu patrimonio.</li><li>Define tu <strong>Salario de Director</strong> basado en el valor de mercado.</li><li>Establece tu <strong>Política de Dividendos</strong>.</li></ol></div><div style="flex:1;"><img src="https://placehold.co/400x300/eeeeee/333333?text=Visual+Ejercicio+3" alt="Ejercicio 3"></div></div>'
  },
  // Lámina 13
  {
    layout: 'layout-split',
    title: 'Actividad 4: Midiendo mi Oxígeno Real',
    content: '<p><strong>Meta:</strong> Dotarte de una herramienta simple para medir la salud real de tu negocio, basada en <strong>hechos (caja)</strong>.</p><h3>Instrucciones:</h3><ol><li>Vamos al Ejercicio 4. Usarás tus <strong>estados de cuenta bancarios</strong>.</li><li>Calcula tu FCL Base.</li><li>Realiza el "Simulador de Vuelo": ¿Qué pasaría si tus ventas cayeran un 20%?</li></ol>',
    image: 'https://placehold.co/500x350/eeeeee/333333?text=Visual+Ejercicio+4'
  },
  // Lámina 14
  {
    layout: 'layout-center-focus',
    title: 'Elige Tu Proyecto Clave',
    content: '<p><strong>Meta:</strong> Enfocar la energía en una <strong>decisión real y de alto impacto</strong>.</p><h2 style="margin-top: 50px; color: var(--accent-color);">¿Cuál es la decisión clave que debes tomar ahora?</h2>',
    image: 'assets/images/slide-14.jpeg'
  },
  // Lámina 15
  {
    layout: 'layout-default',
    title: 'Actividad 5: El Laboratorio de Decisión',
    content: '<p><strong>Meta:</strong> Experimentar el poder de la toma de decisiones estructurada.</p><div class="content-wrapper" style="display:flex; gap: 20px; margin-top: 40px;"><div style="flex:2;"><h3>Instrucciones:</h3><ol><li>Con tu proyecto clave en mente, ve al Ejercicio 5.</li><li>Pasa tu proyecto por cada uno de los <strong>5 filtros</strong> y emite un veredicto de "SÍ/NO".</li></ul></div><div style="flex:1;"><img src="https://placehold.co/400x300/eeeeee/333333?text=Visual+Ejercicio+5" alt="Ejercicio 5"></div></div>'
  },
  // Lámina 16
  {
    layout: 'layout-split',
    title: 'Actividad 6: Del Papel a la Acción',
    content: '<p><strong>Meta:</strong> Asegurar que la claridad obtenida se traduzca en <strong>acción medible</strong>.</p><h3>Instrucciones:</h3><ol><li>Si tu decisión fue "SÍ", ve al Ejercicio 6.</li><li>Define tus <strong>acciones inmediatas (7 días)</strong>.</li><li>Establece tus <strong>hitos clave (30 días)</strong> y tus <strong>objetivos (90 días)</strong>.</li></ol>',
    image: 'assets/images/slide-16.jpeg'
  },
  // Lámina 17
  {
    layout: 'layout-split',
    title: 'Actividad 7: El Argumento Irrefutable',
    content: '<p><strong>Meta:</strong> Equiparte con una herramienta de comunicación para presentar y defender tus decisiones con <strong>total confianza</strong>.</p><h3>Instrucciones:</h3><ol><li>Llegamos al entregable final: el Ejercicio 7.</li><li>Consolida toda la información en este formato de <strong>una página</strong>.</li><li>Fírmalo para formalizar tu compromiso.</li></ol>',
    image: 'assets/images/slide-17.jpeg'
  },
  // Lámina 18 - Título Bloque 3
  {
    layout: 'layout-center-focus',
    title: 'BLOQUE 3: CIERRE Y LLAMADO A LA ACCIÓN',
    background: 'var(--secondary-color)',
    titleColor: 'white'
  },
  // Lámina 19
  {
    layout: 'layout-default',
    title: 'De Reaccionar a Construir',
    content: '<p>El problema no es la falta de oportunidades, sino la falta de un <strong>sistema para evaluarlas</strong>.</p><ul class="infographic-list" style="margin-top: 40px; font-size: 1.1em;"><li><i class="fas fa-water"></i> <div><strong>Incertidumbre de liquidez</strong> &rarr; <strong>Flujo de Caja Libre</strong>.</div></li><li><i class="fas fa-dollar-sign"></i> <div><strong>Gastos sin evaluación</strong> &rarr; <strong>Prima de Riesgo del 20%</strong>.</div></li><li><i class="fas fa-question-circle"></i> <div><strong>Miedo a lo desconocido</strong> &rarr; <strong>Matriz de Riesgo</strong>.</div></li><li><i class="fas fa-random"></i> <div><strong>Mezcla de finanzas</strong> &rarr; <strong>Marco 4+1</strong>.</div></li></ul>'
  },
  // Lámina 20
  {
    layout: 'layout-center-focus',
    title: 'Tu PYME Merece un Arquitecto,<br>no un Apostador',
    content: '<p style="color: white; margin-top: 40px;">El futuro de tu negocio ya no depende de la suerte, la intuición o la presión del momento. <strong>La primera decisión empieza ahora.</strong></p>',
    background: 'https://placehold.co/1200x800/2c3e50/ffffff?text=',
    titleColor: 'white'
  },
  // Lámina 21
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.',
    content: '<div style="margin-top: 50px;"><h3>Próximos Pasos:</h3><ul style="list-style: none; padding-left: 0; text-align: center;"><li style="margin-bottom: 15px;"><strong>Implementación:</strong> Usa tu Plan de 90 días como tu guía.</li><li style="margin-bottom: 15px;"><strong>Sesión Individual:</strong> Agendaremos tu sesión uno a uno.</li><li style="margin-bottom: 15px;"><strong>Comunidad:</strong> Comparte tus éxitos y desafíos.</li></ul><p style="margin-top: 80px;">[Logo de la Empresa y Datos de Contacto]</p></div>'
  }
];
