"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Erin's Restaurant
------------------------------------------------------- */

const nodemailer=require('nodemailer')

const transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"erinsrestaurant@gmail.com",
        pass:process.env.pass 
    }
})


const reservationConfirmEmail = async(date, timeSlot, full_name, email, phone, guests, qrCode) => {
    
const mailOptions={
    from:"erinsrestaurant@gmail.com",
    to:email,
    subject:"Reservation Details - Erin's Restaurant",
    html:`    
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="box-sizing: border-box; margin: 0; padding: 0">
    <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #030302;
      padding: 2rem 2rem 4rem 2rem;
    "
  >
    <img
      src="../assets/erinLogo.png"
      style="width: 50px; border-radius: 50%; margin-right: 15px"
      alt="Erin's Logo"
    />
    <h1
      style="
        font-family: sans-serif;
        font-weight: 500;
        font-size: 34px;
        color: #ffffff;
        margin: 0;
      "
    >
      Erin's Restaurant
    </h1>
  </div>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #030302;
      padding: 2rem 0 2rem 0;
    "
  >
    <h3
      style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
        margin: 0;
        padding-bottom: 1rem;
      "
    >
      Time's up! It's your moment!
    </h3>

    <img
      alt=""
      src="https://cdt-timer.stripocdn.email/api/v1/images/rLRz-BJGbbZbDhO_k0IvdzG-AVG7Fljw_0t-J2UtwLw"
      style="width: 80%; max-width: 600px"
      class="adapt-img"
    />
  </div>

  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #030302;
      padding: 2rem 0 2rem 0;
      width: 100%;
    "
  >
    <img
      alt=""
      src="../assets/foodemail.webp"
      width="399"
      class="adapt-img"
      style="width: 80%; max-width: 600px"
    />
  </div>

  <div
    style="
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #030302;
      padding: 2rem 0;
    "
  >
    <h1 style="color: #ef9a12">Reservation Details</h1>

    <p style="color: #9a9a9a; font-size: 18px">
      Thank you for your reservation at Erin's Restaurant! Below are your
      reservation details.
    </p>

    <div
      style="
        width: 90%;
        max-width: 800px;
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
        padding: 0.5rem 0 3rem 0;
      "
    >
      <table
        style="color: white; width: 320px; font-size: 18px; margin: auto"
      >
        <tbody>
          <tr>
            <td style="font-weight: bold">Name:</td>
            <td>${full_name}</td>
          </tr>

          <tr>
            <td style="font-weight: bold">Date:</td>
            <td>${date}</td>
          </tr>

          <tr>
            <td style="font-weight: bold">Time:</td>
            <td>${timeSlot}</td>
          </tr>

          <tr>
            <td style="font-weight: bold" ;>Phone:</td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td style="font-weight: bold" ;>Guests:</td>
            <td>${guests}</td>
          </tr>
        </tbody>
      </table>
      <div
        style="
          width: 200px;
          margin: auto;
          display: flex;
          justify-content: center;
        "
      >
        <img
          src=${qrCode}
          alt=""
          style="max-width: 320px"
        />
      </div>
    </div>
  </div>

  <div
    style="
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      background-color: #030302;
      padding: 2rem 0;
      gap: 1rem;
    "
  >
    <div
      style="
        width: 300px;
        height: 300px;
        background-color: #1d1d1d;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <h1 style="color: #ef9a12; text-align: center">
        Stay Connected <br /><br />
        With Me
      </h1>
    </div>

    <div
      style="
        width: 300px;
        height: 300px;
        background-color: #1d1d1d;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        style="width: 100%; display: flex; justify-content: center; gap: 2rem"
      >
        <a
          href="https://erinsrestaurant.netlify.app/"
          target="_blank"
          style="
            display: flex;
            flex-direction: column;
            gap: 5px;
            text-decoration: none;
            color: white;
            text-align: center;
          "
        >
          <img
            src="../assets/restaurantIcon.svg"
            alt=""
            style="width:50%; max-width: 75px; background-color: white; border-radius: 50%"
          />
          Website
        </a>

        <a
          href="https://umut-pehlivan.netlify.app/"
          target="_blank"
          style="
            display: flex;
            flex-direction: column;
            gap: 5px;
            text-decoration: none;
            color: white;
            text-align: center;
          "
        >
          <img
            src="../assets/websiteIcon.svg"
            alt=""
            style="width:50%; max-width: 75px; background-color:  white; border-radius: 50%"
          />
          Portfolio
        </a>
      </div>

      <div
        style="width: 90%; display: flex; justify-content: center; gap: 2rem"
      >
        <a
          href="https://github.com/Umutplvn"
          target="_blank"
          style="
            display: flex;
            flex-direction: column;
            gap: 5px;
            text-decoration: none;
            color: white;
            text-align: center;
          "
        >
          <img
            src="../assets/githubIcon.svg"
            alt=""
            style="width:50%; max-width: 75px; background-color: white; border-radius: 50%"
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/umutpehlivan/
          "
          target="_blank"
          style="
            display: flex;
            flex-direction: column;
            gap: 5px;
            text-decoration: none;
            color: white;
            text-align: center;
          "
        >
          <img
            src="../assets/linkedinIcon.svg"
            alt=""
            style="width:50%; max-width: 75px; background-color: white; border-radius: 50%"
          />
          LinkedIn
        </a>
      </div>
    </div>

    <div
      style="
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #030302;
        padding: 2rem 0;
      "
    >
      <h1 style="color: #ef9a12">Contact Us</h1>

      <div style="color: #8a8a8a; width: 100%">
        <p style="text-align: center; line-height: 10px">
          erinsrestaurant@gmail.com
        </p>
        <p style="text-align: center; line-height: 10px">
          +353 (85) 139 5554
        </p>
      </div>

      <div style="color: #8a8a8a; width: 100%; padding-bottom: 5rem">
        <p style="text-align: center; line-height: 10px">Dublin, Ireland</p>
      </div>
    </div>
  </div>
  </body>
  </html>
  `
}


try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;  
  }

}

module.exports = reservationConfirmEmail