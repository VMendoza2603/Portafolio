import emailjs from "@emailjs/browser"

interface SendEmailParams {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(params: SendEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      const errorMsg = "Faltan credenciales de EmailJS. Configúralas en .env.local"
      console.error(errorMsg)
      return { success: false, error: errorMsg }
    }

    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: params.name,
        from_email: params.email,
        subject: params.subject,
        message: params.message,
        to_email: "edumendoza.2031@gmail.com",
      },
      publicKey
    )

    if (result.status !== 200) {
      console.error("EmailJS error:", result)
      return { success: false, error: "Error al enviar el mensaje" }
    }

    return { success: true }
  } catch (error) {
    console.error("EmailJS catch error:", error)
    return { success: false, error: "Error de conexión al servicio de correo" }
  }
}
