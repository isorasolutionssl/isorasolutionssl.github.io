# Evoka Powered by Isora Neurociencia - Perfil Público

## 📋 Descripción

Sitio web del perfil público para **Evoka Powered by Isora Neurociencia**, un ecosistema de salud preventiva personalizada que integra epigenética, neurociencia y PNEI para transformar la manera en que las personas entienden y cuidan su bienestar.

## 🚀 Características

### 🎨 Diseño Visual
- **Diseño responsivo** optimizado para todos los dispositivos
- **Animaciones dinámicas** con efectos de scroll y hover
- **Paleta de colores azules** coherente con la identidad de marca
- **Efectos glassmorphism** y sombras profundas
- **Gradientes animados** y separadores dinámicos

### 📱 Funcionalidades
- **Navegación suave** entre secciones
- **Efectos de scroll** con Intersection Observer
- **Animaciones de carga** progresivas
- **Hover effects** interactivos
- **Optimización móvil** completa

### 📊 Contenido Estructurado
- **Quiénes Somos** - Servicios principales
- **Nuestra Esencia** - Valores fundamentales
- **Diferenciadores Únicos** - Factores clave
- **Metodología** - Enfoque científico-tecnológico
- **Público Objetivo** - Audiencias específicas
- **Comparación** - Evoka vs. marcas convencionales
- **Alianzas Estratégicas** - Partners internacionales
- **Posicionamiento** - Nueva categoría de mercado

## 📁 Estructura del Proyecto

```
evoka-profile/
├── index.html          # Página principal
├── index.css           # Estilos CSS
├── index.js            # JavaScript funcional
├── README.md           # Documentación
└── assets/
    └── images/
        └── logo.png    # Logo de Evoka
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con gradientes y animaciones
- **JavaScript ES6+** - Interactividad y animaciones
- **CSS Grid & Flexbox** - Layout responsivo
- **Intersection Observer API** - Animaciones de scroll
- **CSS Transforms & Transitions** - Efectos visuales

## 🎯 Browsers Compatibles

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Instalación y Uso

### Instalación Básica

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **¡Listo!** - No requiere servidor web para funcionar

### Para Desarrollo

```bash
# Opción 1: Servidor local con Python
python -m http.server 8000

# Opción 2: Servidor local con Node.js
npx http-server

# Opción 3: Live Server (VS Code Extension)
# Instalar "Live Server" y hacer clic derecho > "Open with Live Server"
```

## 🎨 Personalización

### Colores de Marca
Los colores principales están definidos en `index.css`:

```css
/* Colores principales */
--color-primary: #1e88e5;
--color-secondary: #1565c0;
--color-accent: #0d47a1;
--color-light: #f0f8ff;
--color-gradient: linear-gradient(135deg, #1e88e5, #1565c0, #0d47a1);
```

### Modificar Contenido
Editar las secciones en `index.html`:

```html
<!-- Ejemplo: Modificar título de sección -->
<h2 class="section-title fade-in-up">Tu Nuevo Título</h2>

<!-- Ejemplo: Cambiar contenido de tarjeta -->
<div class="card fade-in-up">
    <span class="card-icon">🆕</span>
    <h3 class="card-title">Nuevo Servicio</h3>
    <p class="card-text">Descripción del nuevo servicio...</p>
</div>
```

### Agregar Nuevas Animaciones
En `index.js`:

```javascript
// Agregar nueva animación de entrada
document.querySelectorAll('.nueva-animacion').forEach(el => {
    observer.observe(el);
});
```

## 📧 Información de Contacto

Los datos de contacto están configurados en la sección CTA:

```html
<a href="tel:+522206788342" class="btn btn-primary">Contactar Ahora</a>
<a href="mailto:contacto@evokalife.com" class="btn btn-secondary">Solicitar Información</a>
```

## 🔧 Optimizaciones Incluidas

### Performance
- **CSS optimizado** con selectores eficientes
- **JavaScript throttling** para eventos de scroll
- **Imágenes optimizadas** en formato base64
- **Animaciones hardware-accelerated** con transform

### SEO
- **Estructura semántica** HTML5
- **Meta tags** apropiados
- **Texto alternativo** en imágenes
- **Headings jerárquicos** (H1, H2, H3)

### Accesibilidad
- **Contraste adecuado** de colores
- **Navegación por teclado** funcional
- **Texto legible** en todos los tamaños
- **Focus indicators** visibles

## 📱 Responsive Design

### Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) { /* Ajustes para tablet */ }

/* Mobile */
@media (max-width: 768px) { /* Ajustes para móvil */ }

/* Small Mobile */
@media (max-width: 480px) { /* Ajustes para móviles pequeños */ }
```

### Elementos Responsivos
- **Logo adaptativo** (300px desktop, 250px móvil)
- **Grid flexible** con `minmax()` y `auto-fit`
- **Tipografía escalable** con `rem` y `em`
- **Navegación colapsable** en móviles

## 🎭 Animaciones Implementadas

### Tipos de Animación
1. **Fade-in-up** - Entrada desde abajo con opacidad
2. **Scale-in** - Entrada con escalado
3. **Hover effects** - Transformaciones en hover
4. **Loading sequence** - Animación de carga progresiva
5. **Pulse effects** - Respiración en backgrounds

### Configuración de Animaciones
```javascript
// Intersection Observer para scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};
```

## 🚨 Troubleshooting

### Problemas Comunes

**Las animaciones no funcionan:**
- Verificar que JavaScript esté habilitado
- Comprobar la consola del navegador para errores
- Asegurar que todos los archivos estén enlazados correctamente

**El diseño se ve roto en móvil:**
- Verificar el viewport meta tag en HTML
- Comprobar que los media queries estén aplicándose
- Revisar el inspector de elementos del navegador

**Problemas de rendimiento:**
- Reducir la cantidad de elementos animados simultáneamente
- Optimizar imágenes y reducir su tamaño
- Considerar lazy loading para contenido no crítico

## 📈 Métricas y Analytics

Para implementar tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Hotjar o similar para heatmaps -->
<script>
    (function(h,o,t,j,a,r){
        // Código de tracking
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🔄 Actualizaciones Futuras

### Roadmap
- [ ] **Formulario de contacto** funcional
- [ ] **Blog/Noticias** section
- [ ] **Testimonios** de clientes
- [ ] **Calculadora** de servicios
- [ ] **Chatbot** integrado
- [ ] **Multiidioma** (ES/EN)

### Mantenimiento
- **Actualizar contenido** según nuevos servicios
- **Optimizar rendimiento** periódicamente
- **Revisar compatibilidad** con nuevos navegadores
- **Actualizar dependencies** si se agregan

## 👥 Contribución

Para contribuir al proyecto:

1. **Fork** del repositorio
2. **Crear branch** para feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** al branch (`git push origin feature/nueva-funcionalidad`)
5. **Crear Pull Request**

## 📄 Licencia

Este proyecto está desarrollado específicamente para **Evoka Powered by Isora Neurociencia**. Todos los derechos reservados.

## 📞 Soporte

Para soporte técnico o consultas sobre el sitio web:

- **Email:** contacto@evokalife.com
- **Teléfono:** +52 2206788342
- **Especialización:** Primeros 100 clientes durante agosto

---

### 🌟 "La mejor profesión es ser persona"
*Transformando vidas a través de la ciencia personalizada*

**Evoka Powered by Isora Neurociencia** - Creando una nueva dimensión en bienestar integral y neurociencia aplicada.