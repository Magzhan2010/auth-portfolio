import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendVerificationEmail = async (
    email: string, 
    token: string) => {
    const confirmLink = `https://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Welcome to MagNet!, Confirm Your Email",
        html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #1a73e8;">Hello from MagzhanApp 👋</h2>
                <p>Thanks for signing up! To get started, please confirm your email address by clicking the button below:</p>
                <a href="${confirmLink}" style="
                    display: inline-block;
                    padding: 10px 20px;
                    margin: 20px 0;
                    background-color: #1a73e8;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                ">Confirm Email</a>
                <p>If you didn't create an account, you can safely ignore this email.</p>
                <hr />
                <p style="font-size: 12px; color: #777;">
                    MagNet Team<br/> 
                    &copy; ${new Date().getFullYear()} MagzhanApp. All rights reserved.
                </p>
            </div>`
    });

};