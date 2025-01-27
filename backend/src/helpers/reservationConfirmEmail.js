"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "erinsrestaurant@gmail.com",
    pass: process.env.pass,
  },
});

const reservationConfirmEmail = async (
  date,
  timeSlot,
  full_name,
  email,
  phone,
  guests,
  qrCode
) => {
  const mailOptions = {
    from: "erinsrestaurant@gmail.com",
    to: email,
    subject: "Reservation Details - Erin's Restaurant",
    html: ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reservation Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #030302; color: #ffffff; font-family: Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #030302; padding: 20px;">
            <tr>
                <td align="center">
                    <h1 style="color: #ef9a12;">Erin's Restaurant</h1>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <h3 style="font-size: 20px; margin: 0; padding-bottom: 10px;">Time's up! It's your moment!</h3>
                    <img src="https://cdt-timer.stripocdn.email/api/v1/images/rLRz-BJGbbZbDhO_k0IvdzG-AVG7Fljw_0t-J2UtwLw" alt="Timer Image" style="width: 80%; max-width: 600px;">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <img src="https://img.freepik.com/premium-photo/photo-grilled-beef-steak-dark-wooden-surface-food-photography_131346-105.jpg" alt="Steak Image" style="width: 80%; max-width: 600px;">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <h1 style="color: #ef9a12;">Reservation Details</h1>
                    <p style="color: #9a9a9a; font-size: 18px;">Thank you for your reservation at Erin's Restaurant! Below are your reservation details.</p>
                </td>
            </tr>
            <tr>
                <td align="center" style="display:flex; flex-wrap:wrap; width:100%">
                    <table style="color: white; font-size: 18px; margin: 20px auto; width:300px" cellpadding="5">
                        <tr>
                            <td style="font-weight: bold;">Name:</td>
                            <td>${full_name}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Date:</td>
                            <td>${date}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Time:</td>
                            <td>${timeSlot}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Phone:</td>
                            <td>${phone}</td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold;">Guests:</td>
                            <td>${guests}</td>
                        </tr>
                    </table>
                    <img src="${qrCode}" alt="QR Code" style="max-width: 200px; margin: auto;">
                </td>


            </tr>
            <tr>
                <td align="center">
                    <h1 style="color: #ef9a12;">Contact Us</h1>
                    <p style="color: #8a8a8a;">erinsrestaurant@gmail.com</p>
                    <p style="color: #8a8a8a;">+353 (85) 139 5554</p>
                    <p style="color: #8a8a8a;">Dublin, Ireland</p>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};

module.exports = reservationConfirmEmail;
