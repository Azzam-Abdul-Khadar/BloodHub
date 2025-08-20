const nodemailer = require("nodemailer");

const { EMAIL_USER = "", EMAIL_PASS = "" } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendRequestToHospital = async ({
  to,
  fName,
  lName,
  contact,
  bloodGroup,
  quantity,
}) => {
  const mailOptions = {
    from: `"Plasma Hub" <${EMAIL_USER}>`,
    to,
    subject: "Blood stock request recieved",
    text: `${fName ?? ""} ${
      lName ?? ""
    } have requested for blood stock of type ${bloodGroup} type and quantity ${quantity} units. You can reach out to the requester at ${contact}.`,
    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Blood Stock Request</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f4f4f4"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><table width="600" cellpadding="20" cellspacing="0" style="background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)"><tr><td><h2 style="margin:0 0 16px 0;color:#333">🔔 New Blood Stock Request</h2><p style="margin:0 0 12px 0;color:#555;line-height:1.5"><strong>${
      fName ?? ""
    } ${lName ?? ""} </strong>has requested<strong> ${quantity} </strong>unit ${
      quantity > 1 ? "s" : ""
    } of <strong>${bloodGroup}</strong> blood.</p><p style="margin:0 0 20px 0;color:#555;line-height:1.5">You can reach out directly to the requester at<a href="tel:${contact}" style="color:#1a73e8;text-decoration:none"> ${contact} </a>.</p><hr style="border:none;border-top:1px solid #eee;margin:20px 0"><p style="margin:0;color:#777;font-size:12px;line-height:1.4">Thank you for your prompt attention to this critical need. Let’s keep our blood inventory optimized and lives thriving.</p><p style="margin:4px 0 0 0;color:#777;font-size:12px;line-height:1.4">— The Plasma Hub Team</p></td></tr></table></td></tr></table></body></html>`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (err) {
    console.error("Failed to send email:", err);
    throw err;
  }
};

const ackBloodRequestRequest = async ({
  to,
  fName,
  lName,
  bloodGroup,
  quantity,
  status,
}) => {
  const mailOptions = {
    from: `"Plasma Hub" <${EMAIL_USER}>`,
    to,
    subject: "Blood stock request recieved",
    text: `Dear ${fName ?? ""} ${
      lName ?? ""
    },your request for blood stock of type ${bloodGroup} type and quantity ${quantity} units is ${status}.`,
    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Blood Stock Request</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f4f4f4"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><table width="600" cellpadding="20" cellspacing="0" style="background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)"><tr><td><h2 style="margin:0 0 16px 0;color:#333">🔔 New Blood Stock Request</h2><p style="margin:0 0 12px 0;color:#555;line-height:1.5"><strong>Dear ${
      fName ?? ""
    } ${
      lName ?? ""
    }</strong>, your request for <strong> ${quantity} </strong>unit ${
      quantity > 1 ? "s" : ""
    } of <strong>${bloodGroup}</strong> blood is ${status}.</p><p style="margin:4px 0 0 0;color:#777;font-size:12px;line-height:1.4">— The Plasma Hub Team</p></td></tr></table></td></tr></table></body></html>`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (err) {
    console.error("Failed to send email:", err);
    return err;
  }
};

module.exports = { sendRequestToHospital, ackBloodRequestRequest };
