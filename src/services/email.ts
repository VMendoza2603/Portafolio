"use server"

interface SendEmailParams {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: "edumendoza.2031@gmail.com",
        subject: `[Portfolio] ${params.subject}`,
        html: `
          <p><strong>Nombre:</strong> ${params.name}</p>
          <p><strong>Email:</strong> ${params.email}</p>
          <p><strong>Asunto:</strong> ${params.subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${params.message}</p>
        `,
      }),
    })

    if (!res.ok) {
      const data = await res.json()
      return { success: false, error: data.error || "Error al enviar el mensaje" }
    }

    return { success: true }
  } catch {
    return { success: false, error: "Error de conexión" }
  }
}
