
<pre>
🚗 Car Listings Web Application

A full-stack web app built with Django (backend) and React + TypeScript (frontend) where users can log in and submit or view used car listings. Designed as a practical project to demonstrate backend/frontend integration and token-based authentication.

---

🔐 Login Credentials

To access protected routes:
- Username: admin
- Password: test123

---

🧰 Tech Stack

- Frontend: React, TypeScript, Axios, React Router
- Backend: Django, Django REST Framework, SQLite
- Deployment: Vercel (frontend), Render (backend)

---

🚀 Features

🔹 Public
- View all listed cars (GET /api/cars)

🔒 Authenticated
- Add a new car (brand, model, year, price) using token (POST /api/cars)

---

📁 Project Structur```
car-spotter-frontend-react/
├── .gitignore
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── AddCar.tsx
│   │   ├── CarList.tsx
│   │   ├── Index.tsx
│   │   ├── Login.tsx
│   │   └── NotFound.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   └── carService.ts
│   └── utils/
│       └── api.ts

myproject/
├── db.sqlite3
├── manage.py
├── requirements.txt
├── cars/
│   ├── init.py
│   ├── apps.py
│   ├── auth.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── migrations/
│       ├── init.py
│       └── 0001_initial.py
├── myproject/
│   ├── init.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── staticfiles/
│   ├── admin/
│   │   ├── css/
│   │   ├── img/
│   │   └── js/
│   └── rest_framework/
│       ├── css/
│       ├── docs/
│       ├── fonts/
│       ├── img/
│       └── js/
└── 
   ```


🛠 Setup Instructions

🔧 Backend (Django)

1. Navigate to the backend folder:
   `bash
   cd backend
   `

2. Create and activate a virtual environment:
   `bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   `

3. Install dependencies:
   `bash
   pip install -r requirements.txt
   `

4. Apply migrations:
   `bash
   python manage.py migrate
   `

5. Run the server:
   `bash
   python manage.py runserver
   `

---

🌐 Frontend (React + TypeScript)

1. Navigate to the frontend folder:
   `bash
   cd frontend
   `

2. Create a .env.local file and set your backend URL:
   `
   REACTAPPAPIBASEURL=http://localhost:8000/api
   `

3. Install dependencies:
   `bash
   npm install
   `

4. Run the development server:
   `bash
   npm start
   `

---

🧪 API Endpoints

Method  Endpoint  Description  Auth Required
GET  /api/cars  Get all cars  No
POST  /api/cars  Add a new car listing  ✅ Yes

---

## 🧪 API Testing (Postman)

You can test the backend API using Postman.

📄 [Download Postman Collection](./backend/car-listings-api.postman_collection.json)

### 🔐 Authentication

All POST requests require a token:
Authorization: Bearer 12345abc

### Endpoints

- `GET /api/cars/` — View all cars
- `POST /api/cars/` — Add a car (token required)

---

📦 Deployment Notes

- React frontend should be deployed on Vercel 
- Django backend can be hosted on Render as a Web Service
- Don’t forget to update frontend .env with the live backend URL

---




Built by Pratham
`
 
</pre>
