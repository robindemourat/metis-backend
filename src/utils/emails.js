/**
 * Plurishing-backend
 * =======
 * Mailing utils
 */


export const welcomeEmail = (appUrl, user) => ({
  subject: 'Plurishing - Bienvenue !',
  html: `
<h1>Plurishing - bienvenue !</h1>
<p>
  Vous avez été ajouté à la liste des utilisateurs de l'application Plurishing. Si vous souhaitez participer,
  <a
    href="${appUrl}/signup/${user._id}/${user.resetPasswordToken}"
  >
    visitez cette adresse pour y entrer un nouveau mot de passe
  </a> d'ici 24 heures.
</p>`
});

export const resetPwdEmail = (appUrl, user) => ({
  subject: 'Plurishing - réinitialisation de votre mot de passe',
  html: `
<h1>Plurishing - réinitialisation du mot de passe</h1>
<p>
  Vous avez fait une demande de réinitialisation de votre mot de passe pour l'application Plurishing. <a
    href="${appUrl}/signup/${user._id}/${user.resetPasswordToken}">
    Visitez cette adresse pour y entrer un nouveau mot de passe
  </a> d'ici 24 heures.
</p>`
});
