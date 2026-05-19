// script.js

// ATTEND LE CHARGEMENT DE LA PAGE
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation
    initialiserCompteur();
    initialiserEvenements();
});

// 1. COMPTEUR D'ANNIVERSAIRE
function initialiserCompteur() {
    const compteurElement = document.getElementById('compteur-jours');
    if (!compteurElement) return;
    
    // DATE D'ANNIVERSAIRE À MODIFIER !!!
    const dateAnniversaire = new Date('1995-06-15'); // Remplace par sa date de naissance
    const aujourdhui = new Date();
    
    // Calcul de l'âge
    let age = aujourdhui.getFullYear() - dateAnniversaire.getFullYear();
    const moisDiff = aujourdhui.getMonth() - dateAnniversaire.getMonth();
    
    if (moisDiff < 0 || (moisDiff === 0 && aujourdhui.getDate() < dateAnniversaire.getDate())) {
        age--;
    }
    
    compteurElement.textContent = age;
}

// 2. MODAL POUR LES PHOTOS
function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 3. QUIZ
document.addEventListener('DOMContentLoaded', function() {
    const validerBtn = document.getElementById('valider-quiz');
    if (validerBtn) {
        validerBtn.addEventListener('click', function() {
            let score = 0;
            const questions = document.querySelectorAll('.quiz-question');
            
            questions.forEach((question, index) => {
                const correctAnswer = question.dataset.correct;
                const selected = question.querySelector(`input[name="q${index+1}"]:checked`);
                
                if (selected && selected.value === correctAnswer) {
                    score++;
                }
            });
            
            const resultat = document.getElementById('quiz-resultat');
            let message = '';
            
            if (score === 4) {
                message = '🎉 Parfait ! 4/4 - Tu me connais par cœur ! 🎉';
            } else if (score >= 3) {
                message = `👍 ${score}/4 - Pas mal ! Mais on peut encore progresser ! 👍`;
            } else {
                message = `💪 ${score}/4 - On va dire que c'est ta journée, je t'aime quand même ! 💪`;
            }
            
            resultat.textContent = message;
        });
    }
});

// 4. SURPRISE
function revealSurprise() {
    const cadeau = document.getElementById('cadeau');
    const message = document.getElementById('message-surprise');
    
    cadeau.style.display = 'none';
    message.style.display = 'block';
    
    // Animation de confettis (optionnelle)
    lancerConfettis();
}

function lancerConfettis() {
    // Simple animation de confettis en console
    console.log('🎉✨🎊 SURPRISE !!! 🎊✨🎉');
    
    // Tu peux ajouter une vraie librairie de confettis ici
    // Exemple avec canvas-confetti (à ajouter dans le HTML)
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// 5. BOUTON REMONTER
window.addEventListener('scroll', function() {
    const remonterBtn = document.getElementById('remonter');
    if (window.scrollY > 500) {
        remonterBtn.classList.add('visible');
    } else {
        remonterBtn.classList.remove('visible');
    }
});

document.getElementById('remonter').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 6. MUSIQUE (optionnel)
let musiqueEnCours = false;
const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', function() {
        if (musiqueEnCours) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        musiqueEnCours = !musiqueEnCours;
    });
}

// 7. ANIMATION AU SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// 8. TITRE DYNAMIQUE
const originalTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Reviens me voir ❤️';
});

window.addEventListener('focus', () => {
    document.title = originalTitle;
});

// 9. MESSAGE PERSONNALISE SELON L'HEURE
function messageSelonHeure() {
    const heure = new Date().getHours();
    const accueil = document.getElementById('accueil');
    let message = '';
    
    if (heure < 12) {
        message = '☀️ Bonjour ma belle ! ☀️';
    } else if (heure < 18) {
        message = '🌤️ Passe une belle après-midi ! 🌤️';
    } else {
        message = '🌙 Bonsoir mon amour ! 🌙';
    }
    
    // Ajoute le message si tu veux
    console.log(message);
}

messageSelonHeure();

// 10. EXPOSITION DES FONCTIONS GLOBALES
window.openModal = openModal;
window.closeModal = closeModal;
window.revealSurprise = revealSurprise;

// 11. AJOUTER DES CONFETTIS (si tu veux)
// Ajoute cette ligne dans ton HTML pour les confettis
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1"></script>

console