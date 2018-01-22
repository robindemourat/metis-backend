/**
 * This module provides basic email templates (i.e. for auth-related email messages)
 * @module metis-backend/utils/emails
 */

export const welcomeEmail = (appUrl, user) => ({
  subject: 'Metis - Bienvenue !',
  html: `
<h1>Metis - bienvenue !</h1>
<p>
  Vous avez été ajouté à la liste des utilisateurs de l'application Metis. Si vous souhaitez participer,
  <a
    href="${appUrl}/signup/${user._id}/${user.resetPasswordToken}"
  >
    visitez cette adresse pour y entrer un nouveau mot de passe
  </a> d'ici 24 heures.
</p>`
});

export const resetPwdEmail = (appUrl, user) => ({
  subject: 'Metis - réinitialisation de votre mot de passe',
  html: `
<h1>Metis - réinitialisation du mot de passe</h1>
<p>
  Vous avez fait une demande de réinitialisation de votre mot de passe pour l'application Metis. <a
    href="${appUrl}/signup/${user._id}/${user.resetPasswordToken}">
    Visitez cette adresse pour y entrer un nouveau mot de passe
  </a> d'ici 24 heures.
</p>`
});
