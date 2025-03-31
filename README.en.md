### 🇬🇧 `README.en.md`

```markdown
# 🧾 React Form with Validation (React Hook Form + Zod)

This project is a simple form built with **React**, using **React Hook Form** for form handling and **Zod** for schema validation. The UI is clean and minimal, making it ideal to understand how to apply validations in controlled forms.

---

## 🚀 Technologies Used

- ⚛️ **React**
- 📋 **React Hook Form**
- ✅ **Zod** (for validation)
- 💅 **Custom CSS**

---

## 📂 Project Structure

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

## 📄 Description

The form includes the following fields:

- **Name** (required)
- **Email** (required and must be valid)
- **Password** (minimum 6 characters)
- **Confirm Password** (must match the password)

Validation is handled using a schema defined with **Zod**, integrated into React Hook Form using the `zodResolver`.

---

## 💻 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

> If you're using Vite, you can also run `vite` directly.

---

## ✅ Zod Schema Example

Located in `form.model.ts`:

```ts
export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirmation must be at least 6 characters"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
});
```

---

## 📬 Contact

Feel free to open an issue or contact me if you have any questions or suggestions.

---

