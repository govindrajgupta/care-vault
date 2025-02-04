# CareVaultX - Patient Management System
link - https://care-vault.vercel.app/
![image](https://github.com/user-attachments/assets/415b6f2f-38fb-4fc1-9447-268c2f0cfbe3)


CareVaultX is a comprehensive Patient Management System designed to streamline healthcare workflows by providing efficient patient data management, appointment scheduling, and real-time notifications. This project was submitted for the **Microsoft Imagine Cup**.

## 🚀 Features
- **Patient Record Management** - Securely store and manage patient details.
- **Appointment Scheduling** - Doctors and patients can book and manage appointments effortlessly.
- **Medical History Tracking** - Maintain a detailed log of treatments, prescriptions, and reports.
- **Twilio Notifications** - Automated SMS reminders and updates for patients.
- **User Authentication** - Secure login system for patients, doctors, and administrators.
- **Dashboard & Analytics** - Insights into patient visits, trends, and medical data.

## 🛠 Tech Stack
- **Frontend:** Next.js, Tailwind CSS, TypeScript
- **Backend:** Node.js, Express.js
- **Database:** appwrite
- **Notifications:** Twilio (SMS Alerts)
- **Deployment:** Vercel

## 📌 Setup & Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/carevaultx.git
   cd carevaultx
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```

   ```
4. **Start the Server:**
   ```sh
   npm run dev
   ```

## 📲 Twilio Integration (SMS Notifications)
CareVaultX uses Twilio to send SMS reminders for appointments and important health updates. The integration ensures patients never miss an appointment.

### Sample Twilio Notification Code:
```js
const twilio = require('twilio');
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function sendSMS(to, message) {
    client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to
    }).then(message => console.log(`Message sent: ${message.sid}`))
    .catch(error => console.error(error));
}

// Example Usage
sendSMS('+1234567890', 'Your appointment is scheduled for tomorrow at 10 AM.');
```

## 💡 Future Enhancements
- Add **Doctor-Patient Video Consultation** feature.
- Implement **EHR (Electronic Health Records) Support**.
- Multi-language support for better accessibility.

