import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7c0bf8c9a8b4d2",
        pass: "874e36cd5c1bd6"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luiz Henrique Zanella <lhenriquezan@gmail.com>',
            subject,
            html: body,
        })
    }
}