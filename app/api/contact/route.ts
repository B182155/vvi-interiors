import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {

//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      // host: "smtp.hostinger.com",
      // port: 587,
      // secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: "girigelashiva12@gmail.com",
        pass: "xmia nesu yzut szpz",
      },
      tls: {
        rejectUnauthorized: false, // Add this option to allow self-signed certificates
      },
    });

    const mailOptions = {
      from: "girigelashiva12@gmail.com",
      to: "girigelashiva12@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    };

    const emailResult = await transporter.sendMail(mailOptions);
    console.log("Email sent:", emailResult);

    // return res.json({ message: "Email sent successfully" }, { status: 200 });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const body = await req.json();
//     const validation = IssueSchema.safeParse(body);
//     if (!validation.success) {
//       return NextResponse.json(validation.error.format(), { status: 400 });
//     }

//     const newIssue = await prisma.issue.create({
//       data: {
//         title: body.title,
//         description: body.description,
//       },
//     });

//     return NextResponse.json(newIssue, { status: 201 });
//   } catch (error) {
//     if (error instanceof Error) {
//       return NextResponse.json(error.stack, { status: 500 });
//     }
//   }
// }
