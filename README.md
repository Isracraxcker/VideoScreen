# 🎬 VideoScreen Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bunny](https://img.shields.io/badge/Bunny.net-FF6B35?style=for-the-badge&logo=bunny&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

### 🚀 **Plataforma Completa de Grabación de Pantalla y Compartir Videos**

*Una experiencia full-stack moderna para captura, carga y compartir contenido audiovisual*

**Desarrollado por Andy Jaramillo** - Tecnólogo Full Stack

[![GitHub](https://img.shields.io/badge/🌟_Star_this_repo-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Isracraxcker/VideoScreen)
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-0070f3?style=for-the-badge&logo=vercel&logoColor=white)](https://videoscreen.vercel.app)

</div>

---

## 🎯 Descripción del Proyecto

**VideoScreen** es una plataforma full-stack de última generación que revoluciona la forma de capturar, gestionar y compartir contenido audiovisual. Construida con tecnologías modernas y arquitectura escalable, ofrece una experiencia de usuario fluida desde la grabación hasta el intercambio dinámico de videos.

### ✨ Características Principales

<div align="center">

| 🎥 **Captura Avanzada** | 🔐 **Autenticación Segura** | ☁️ **Almacenamiento Inteligente** | 📱 **Compartir Dinámico** |
|:---:|:---:|:---:|:---:|
| Grabación de pantalla HD | Sistema de usuarios robusto | Integración con Bunny.net CDN | Enlaces seguros personalizables |
| Captura de audio sincronizada | OAuth y autenticación local | Compresión automática | Análisis de visualizaciones |
| Múltiples formatos de salida | Gestión de perfiles | Streaming adaptativo | Control de privacidad |

</div>

---

## 🏗️ Stack Tecnológico

### **Frontend**
- ⚡ **Next.js 15** - Framework React de producción
- 🎨 **Tailwind CSS** - Diseño moderno y responsivo  
- 🔄 **Framer Motion** - Animaciones fluidas
- 📱 **PWA Ready** - Experiencia nativa multiplataforma

### **Backend**
- 🛡️ **NextAuth.js** - Autenticación y autorización
- 🗄️ **Prisma ORM** - Base de datos type-safe
- 🐘 **PostgreSQL** - Base de datos relacional robusta
- 🔒 **JWT** - Tokens seguros

### **Infraestructura**
- 🚀 **Bunny.net** - CDN global y almacenamiento
- ☁️ **Vercel** - Despliegue y hosting
- 📊 **Analytics** - Métricas en tiempo real

---

## 🚀 Instalación y Configuración

### 📋 Prerrequisitos

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git >= 2.0.0
```

### 🔧 Configuración del Entorno

#### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/Isracraxcker/VideoScreen.git
cd VideoScreen
```

#### 2️⃣ **Instalar Dependencias**

```bash
# Recomendado: npm
npm install

# Alternativas
yarn install
pnpm install
bun install
```




#### 5️⃣ **Iniciar el Servidor**

```bash
npm run dev
```

🎉 **¡Listo!** Visita [http://localhost:3000](http://localhost:3000)

---

## 📁 Arquitectura del Proyecto

```
VideoScreen/
├── 📁 app/                          # App Router (Next.js 13+)
│   ├── 📁 (auth)/                   # Rutas de autenticación
│   │   ├── 📄 login/page.tsx        # Página de inicio de sesión
│   │   └── 📄 register/page.tsx     # Página de registro

```

---

## 🎮 Funcionalidades Principales

### 🎥 **Sistema de Grabación**

```typescript
// Ejemplo de uso del hook de grabación
const { startRecording, stopRecording, isRecording } = useScreenRecorder({
  audio: true,
  video: { quality: 'HD' },
  onComplete: (blob) => handleUpload(blob)
});
```




---

## 🛠️ Scripts de Desarrollo

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm run dev` | 🔥 Servidor desarrollo | Desarrollo local |
| `npm run build` | 🏗️ Build producción | Pre-despliegue |
| `npm run start` | 🚀 Servidor producción | Testing final |
| `npm run lint` | 🔍 Verificar código | Control calidad |
| `npm run type-check` | 📝 Verificar tipos | TypeScript |
| `npm run db:push` | 🗄️ Sincronizar DB | Cambios esquema |
| `npm run db:studio` | 👀 Prisma Studio | Visualizar datos |

---

## 🌐 Despliegue en Producción

### **Despliegue en Vercel (Recomendado)**

1. **Conectar repositorio**
   ```bash
   vercel --prod
   ```

2. **Configurar variables de entorno** en el dashboard de Vercel

3. **Configurar dominio personalizado** (opcional)

### **Otras Plataformas**

<div align="center">

| Plataforma | Complejidad | Escalabilidad | Costo |
|------------|:-----------:|:-------------:|:-----:|
| 🔺 **Vercel** | Fácil | Alta | Freemium |
| ☁️ **AWS** | Media | Muy Alta | Variable |
| 🌊 **Netlify** | Fácil | Media | Freemium |
| 🔥 **Firebase** | Media | Alta | Pay-as-go |

</div>

---

## 🔒 Seguridad y Privacidad

### **Medidas Implementadas**

- 🛡️ **Autenticación JWT** con refresh tokens
- 🔐 **Encriptación end-to-end** para videos sensibles  
- 🚫 **Rate limiting** para prevenir abuso
- 🔍 **Validación de entrada** con Zod
- 🏷️ **Headers de seguridad** configurados
- 📊 **Logs de auditoría** para todas las acciones



## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Sobre el Desarrollador

<div align="center">

### **Andy Jaramillo**
*Tecnólogo Full Stack | Especialista en React & Next.js*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Isracraxcker)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/andyjaramillo)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://andy-jaramillo.vercel.app/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andyisraeljaramillo@gmail.com)

*"Transformando ideas en experiencias digitales excepcionales"*

</div>

---

<div align="center">

### 🌟 **¡Gracias por usar VideoScreen Platform!**

*Si este proyecto te ha sido útil, no olvides darle una ⭐ en GitHub*

[![Star History Chart](https://api.star-history.com/svg?repos=Isracraxcker/VideoScreen&type=Date)](https://star-history.com/#Isracraxcker/VideoScreen&Date)

**¿Te gusta el proyecto?** Considera [☕ invitarme un café](https://buymeacoffee.com/andyisraela)

</div>

---

<div align="center">
<sub>Hecho con ❤️, ☕ y mucho código por Andy Jaramillo | © 2025 VideoScreen Platform</sub>
</div>