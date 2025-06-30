# 🧠 THINKDraft

**THINKDraft** is an AI-powered blog generation tool built using the MERN stack. It harnesses the **Gemini API** to auto-generate intelligent blog content, and integrates **ImageKit** for image uploading and optimization—making content creation smoother and smarter.

---

## 📌 Features

- ✨ AI-generated blog content using **Gemini API**
- 📸 Image upload and optimization via **ImageKit**
- ⚙️ RESTful API with Node.js and Express.js
- 🎨 Modern UI with React + Tailwind CSS (Vite setup)
- 🗄️ MongoDB for data storage
- 📦 Scalable full-stack architecture
- ☁️ Deployment-ready with **Vercel**

---

## 🏗️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **AI Integration:** Gemini API
- **Image Hosting:** ImageKit.io
- **Deployment:** Vercel

---

## 📁 Project Structure

```
THINKDraft/
├── client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── ...
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- Gemini API key (from Google AI Studio)
- ImageKit account and credentials

### 1. Clone the repository

```bash
git clone https://github.com/CJcode6754/ThinkDraft.git
cd THINKDraft
```

### 2. Set up environment variables

Create a `.env` file in both the `client/` and `server/` folders:

**server/.env**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

**client/.env**
```env
VITE_API_URL=http://localhost:5000/api
VITE_IMAGEKIT_URL=https://ik.imagekit.io/your_imagekit_id
```

### 3. Install dependencies

Install dependencies for both client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 4. Run the application

Start both servers in separate terminals:

**Frontend:**
```bash
cd client
npm run dev
```

**Backend:**
```bash
cd server
node server.js
```

The application will be available at:
- Frontend: `http://localhost:5173` (or the port shown in terminal)
- Backend API: `http://localhost:5000`

---

## 📤 Image Upload with ImageKit

THINKDraft uses ImageKit's API to:

- Upload and store images from the frontend
- Auto-optimize images for web performance
- Use signed upload authentication for security

---

## 📦 Build for Production

To build the client for production:

```bash
cd client
npm run build
```

The built files will be in the `client/dist` directory.

---

## 🚀 Deployment

This project is configured for deployment on **Vercel**:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

Make sure to update the `VITE_API_URL` in your client environment variables to point to your deployed backend.

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ by [Your Name]**
