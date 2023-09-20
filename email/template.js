export default ({ name, email, phone, comment, date }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hotel Registration</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f7f7f7; /* Light gray background */
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
  
        .container {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          padding: 40px;
          max-width: 600px;
          width: 90%;
          text-align: center;
        }
  
        .hotel-logo {
          height: 200px;
          margin: 0 auto 20px;
          border-radius: 50%;
        }
  
        .hotel-logo img {
          height: 100%;
          object-fit: cover;
          border-bottom: 1px solid #3a1e13;
          padding-bottom: 10px;
        }
  
        .hotel-name {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }
  
        .hotel-location {
          font-size: 18px;
          color: #666;
          margin-bottom: 30px;
        }
  
        .info-item {
          margin-bottom: 15px;
          text-align: left;
        }
  
        .info-label {
          font-weight: bold;
          display: inline-block;
          width: 150px;
          color: #3a1e13; /* Blue text color */
        }
  
        .info-value {
          display: inline-block;
          color: #444;
        }
  
        .hotel-description {
          font-size: 16px;
          color: #666;
          margin-top: 20px;
        }
  
        @media screen and (max-width: 768px) {
          .hotel-logo {
            width: 150px;
            height: 150px;
          }
  
          .hotel-name {
            font-size: 28px;
          }
        }
  
        @media screen and (max-width: 480px) {
          .container {
            padding: 20px;
          }
  
          .hotel-logo {
            width: 100px;
            height: 100px;
          }
  
          .hotel-name {
            font-size: 24px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="hotel-logo">
          <img src="cid:image1" alt="Hotel Logo" />
        </div>
        <!-- <div class="hotel-name">The Boundary Residence</div> -->
        <div class="hotel-location">Dhammazedi Road, Yangon, Myanmar (Burma)</div>
        <div class="info-item">
          <span class="info-label">Guest Name:</span>
          <span class="info-value">${name}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Phone Number:</span>
          <a
            href="tel:${phone}"
            class="info-value"
            style="text-decoration: none; color: black"
            >${phone}</a
          >
        </div>
        <div class="info-item">
          <span class="info-label">Email:</span>
          <span class="info-value">${email}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments:</span>
          <span class="info-value">${comment}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Booked At:</span>
          <span class="info-value">${date}</span>
        </div>
      </div>
    </body>
  </html>
  `;
};
