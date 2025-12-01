// src/services/mockApi.js

// Simulate a network delay (e.g., sending email via SendGrid/AWS SES)
export const sendEnrollmentEmail = async (userData) => {
  return new Promise((resolve, reject) => {
    console.log("Mock API: Sending email to...", userData.email);
    
    setTimeout(() => {
      // Simulate a 90% success rate, 10% random server error (for realism)
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        resolve({ status: 200, message: "Email sent successfully!" });
      } else {
        reject({ status: 500, message: "Server timeout. Please try again." });
      }
    }, 2000); // 2 second delay
  });
};