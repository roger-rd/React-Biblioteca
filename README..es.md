### 🇪🇸 [Leer en Español](./README.es.md)

### 🇪🇸 `README.es.md`

```markdown
# 🧾 Formulario React con Validación (React Hook Form + Zod)

Este proyecto es un formulario simple construido con **React**, usando **React Hook Form** para el manejo de formularios y **Zod** para la validación de datos. La interfaz es sencilla y clara, ideal para comprender cómo aplicar validaciones efectivas en formularios controlados.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React**
- 📋 **React Hook Form**
- ✅ **Zod** (para validación)
- 💅 **CSS** personalizado

---

## 📂 Estructura del proyecto

```
src/
├── App.tsx
├── components/
│   └── CustomForms/
│       ├── CustomForm.tsx
│       └── index.ts
├── CostumInput.tsx
├── CostumInput.css
└── models/
    └── form.model.ts
```

---

## 📄 Descripción

El formulario contiene los siguientes campos:

- **Nombre** (obligatorio)
- **Correo electrónico** (obligatorio y válido)
- **Contraseña** (mínimo 6 caracteres)
- **Confirmar contraseña** (debe coincidir con la contraseña)

La validación es manejada mediante un esquema definido con **Zod**, y se integra a React Hook Form con el resolver `zodResolver`.

---

## 💻 Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

> Si estás usando Vite, también puedes usar `vite` directamente.

---

## ✅ Ejemplo de esquema con Zod

Ubicado en `form.model.ts`:

```ts
export const schema = z.object({
  name: z.string().min(1, "el nombre es obligatorio"),
  email: z.string().email("correo invalido").min(1, "el correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "la confirmación debe tener al menos 6 caracteres"),
}).refine(data => data.password === data.confirmPassword, {
  message: "las contraseñas deben ser iguales",
  path: ["confirmPassword"]
});
```


