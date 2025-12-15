const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
               user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS, // <- your 16-digit app password
          },
        });

            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Babbar',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;