// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(req,res) {
    const {body} = req 
    const {email,subject,message} = body
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["jackpritomsoren@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}