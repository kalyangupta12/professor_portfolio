import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Author's Website",
  description: "Get in touch with the author",
}

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <div className="grid gap-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or want to work together? Send me a message.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
