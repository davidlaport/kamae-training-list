export interface Training {
    id: number;
    title: string;
    category: string;
    status: 'À commencer' | 'Victoire' | 'Défaite';
  }
  
  export const trainings: Training[] = [
    { id: 1, title: 'Introduction Cybersécurité', category: 'Cybersécurité', status: 'Victoire' },
    { id: 2, title: 'Protéger son WiFi personnel', category: 'À la maison', status: 'À commencer' },
    { id: 3, title: 'Je reconnais des données personnelles', category: 'RGPD', status: 'À commencer' },
    { id: 4, title: 'Reconnaître un mail de phishing', category: 'Cybersécurité', status: 'Défaite' },
    { id: 5, title: 'Bien utiliser son smartphone', category: 'À la maison', status: 'À commencer' },
    { id: 6, title: 'Choisir un mot de passe invincible', category: 'Cybersécurité', status: 'À commencer' },
    { id: 7, title: 'Limiter mon empreinte numérique', category: 'À la maison', status: 'À commencer' },
    { id: 8, title: 'Pourquoi le RGPD est important', category: 'RGPD', status: 'À commencer' },
    { id: 9, title: 'Introduction RGPD', category: 'RGPD', status: 'Défaite' },
  ];
  