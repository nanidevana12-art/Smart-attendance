Smart Attendance System using OTP + Face Scan
🔍 Overview

Smart Attendance System is an AI-powered attendance management solution that ensures accuracy and eliminates proxy attendance.
It uses a two-step verification process — OTP authentication and Face Recognition — to securely verify each student’s identity before marking attendance.

🚀 Features

✅ Dual Authentication: Combines OTP verification with face recognition for higher security.

📸 Face Detection & Recognition: Uses deep learning models (OpenCV / FaceNet / dlib) to identify faces accurately.

🔐 OTP Verification: Sends a one-time password to registered email or phone for authentication.

💾 Automatic Attendance Logging: Marks attendance in the database automatically after verification.

📊 Dashboard: Admin panel to view attendance records, generate reports, and manage users.

⚡ Fast & Reliable: Minimal manual intervention with high accuracy.

🏗️ Tech Stack
Component	Technology Used
Frontend	HTML, CSS, JavaScript, Bootstrap / React
Backend	Python (Flask / Django)
Database	MySQL / SQLite
AI & ML	OpenCV, NumPy, face_recognition / DeepFace
OTP Service	Twilio / SMTP / Fast2SMS API
Hosting	GitHub Pages (Frontend), Render / Heroku (Backend)
⚙️ System Architecture

User Login → Enter Roll No / ID.

OTP Verification → User receives and enters OTP.

Face Scan → Camera captures and verifies the user’s face.

Attendance Marked → Data stored in the database with timestamp.

🖥️ Installation & Setup
# Clone the repository
git clone https://github.com/<your-username>/smart-attendance-system.git

# Navigate to project directory
cd smart-attendance-system

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

📷 Screenshots

(Add screenshots of your login page, OTP page, and face scan window here)

📂 Folder Structure
smart-attendance-system/
│
├── app.py                 # Main application file
├── models/                # Face recognition and OTP logic
├── static/                # CSS, JS, and images
├── templates/             # HTML files
├── database/              # Attendance data
├── requirements.txt       # Python dependencies
└── README.md              # Project documentation

🔒 Security Measures

OTP expires within 1 minute

Encrypted database storage

Face data stored securely (hash or embedding vectors)

🧑‍💻 Future Enhancements

Integration with RFID for 3-layer authentication

Real-time cloud syncing

Admin mobile app

Integration with LMS (Learning Management Systems)

🤝 Contributing

Contributions are welcome!
If you have ideas or improvements, feel free to fork this repo and open a pull request.

📜 License

This project is licensed under the MIT License – feel free to use and modify it.

👨‍💻 Author

Devana Sriram
🎓 B.Tech CSE (AI & ML) | Parul University
🌐 LinkedIn
 | GitHub
