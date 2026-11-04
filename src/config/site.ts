/**
 * Configurações de crescimento do site.
 *
 * NEWSLETTER_ACTION: URL de envio do formulário do seu provedor de e-mail
 * (Brevo, MailerLite, Buttondown, ConvertKit...). Enquanto estiver vazio,
 * o bloco de newsletter mostra links para Instagram/GitHub no lugar do formulário.
 *
 * Exemplo Buttondown: 'https://buttondown.com/api/emails/embed-subscribe/css4html'
 */
export const NEWSLETTER_ACTION = '';

/** Nome do campo de e-mail que o provedor espera (Buttondown/MailerLite: 'email'; Brevo: 'EMAIL'). */
export const NEWSLETTER_EMAIL_FIELD = 'email';

export const SOCIAL = {
  instagram: 'https://www.instagram.com/css4html/',
  github: 'https://github.com/css4html',
};
