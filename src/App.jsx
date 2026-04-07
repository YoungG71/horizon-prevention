import React from 'react';
import { Link } from 'react-scroll';
import { ShieldAlert, Heart, Accessibility, Phone, Mail } from 'lucide-react'; // Using Lucide-react as initially requested, FontAwesome was for CDN only

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Header */}
      <header className="bg-bleu-marine text-white p-4 shadow-md fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo Horizon Prévention" className="h-10 mr-4" />
            <div className="text-2xl font-bold">Horizon Prévention</div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:0743358441" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Phone size={18} />
              <span>07 43 35 84 41</span>
            </a>
            <a href="mailto:contact@horizon-prevention.fr" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Mail size={18} />
              <span>contact@horizon-prevention.fr</span>
            </a>
          </div>
          <ul className="flex space-x-6">
            <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Accueil</Link></li>
            <li><Link to="formations" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Formations</Link></li>
            <li><Link to="domaines-intervention" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Domaines</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">À propos</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-bleu-marine to-vert-eau text-white h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <img src="/Logo.png" alt="Logo Horizon Prévention" className="h-40 w-auto mx-auto mb-6 object-contain animate-fadeIn" />
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fadeIn">Expert en Prévention et Bien-être au travail</h1>
          <p className="text-xl md:text-2xl mb-8">Optimisez votre environnement professionnel avec nos formations sur mesure.</p>
          <Link to="formations" smooth={true} duration={500} className="bg-vert-eau text-bleu-marine font-bold py-3 px-8 rounded-full hover:bg-opacity-90 active:scale-95 transition-transform duration-100 cursor-pointer">
            Découvrir nos formations
          </Link>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 bg-gris-perle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-bleu-marine">Nos Formations</h2>
          <p className="text-xl text-center mb-12 text-gray-600">Des solutions concrètes pour un environnement de travail serein et inclusif.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formation 1: Gestion de la violence */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <ShieldAlert size={48} className="text-bleu-marine mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Gestion de la violence (6h, possibilité 3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>MODULE 1 — Compréhension et Analyse</li>
                <li>MODULE 2 — Prévention et Désamorçage</li>
                <li>MODULE 3 — Action et Sécurité Tactique</li>
                <li>MODULE 4 — Post-Crise et Résilience</li>
              </ul>
            </div>

            {/* Formation 2: Bien-être au travail */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Heart size={48} className="text-vert-eau mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Bien-être au travail (3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Identifier les sources de stress</li>
                <li>Équilibre vie pro/vie perso</li>
                <li>Ergonomie et environnement de travail</li>
                <li>Développer la communication non-violente</li>
              </ul>
            </div>

            {/* Formation 3: Gestion du handicap */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Accessibility size={48} className="text-bleu-marine mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Gestion du handicap (6h, possibilité 3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Module 1 - Comprendre le handicap autrement</li>
                <li>Module 2 - Cadre et repères institutionnels</li>
                <li>Module 3 - Adapter l'accompagnement au quotidien</li>
                <li>Module 4 - Posture professionnelle et gestion des situations difficiles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Intervention Section */}
      <section id="domaines-intervention" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-bleu-marine">Nos Domaines d'Intervention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Carte 1: Foyer Éducatif */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center border-b-4 border-vert-eau">
              <img src="/foyer.jpg" alt="Établissements Éducatifs" className="rounded-3xl shadow-xl mb-6 w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Établissements Éducatifs</h3>
              <p className="text-lg">Accompagnement des équipes en MECS et foyers pour une gestion sereine du quotidien.</p>
            </div>

            {/* Carte 2: Handicap */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center border-b-4 border-vert-eau">
              <img src="/handicap.jpg" alt="Illustration du Secteur du Handicap" className="rounded-3xl shadow-xl mb-6 w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Secteur du Handicap</h3>
              <p className="text-lg">Expertise en inclusion et aménagement pour valoriser chaque profil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-bleu-marine">À propos d'Horizon Prévention</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Horizon Prévention est votre partenaire expert en formation professionnelle, dédié à l'amélioration du climat social et du bien-être en entreprise, notamment dans le secteur médico-social et les ESSMS. Forts de notre expérience, nous proposons des formations concrètes et impactantes pour développer les compétences de vos équipes et créer un environnement de travail sain et productif. Nous intervenons en tant qu'intervenant spécialisé dans toute la région Bourgogne-Franche-Comté.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bleu-marine text-white p-8 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a href="tel:0743358441" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Phone size={18} />
              <span>07 43 35 84 41</span>
            </a>
            <a href="mailto:contact@horizon-prevention.fr" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Mail size={18} />
              <span>contact@horizon-prevention.fr</span>
            </a>
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Horizon Prévention. Tous droits réservés.</p>
          <p className="mb-4 text-sm">Intervention dans toute la région Bourgogne-Franche-Comté (71, 21, 39, 25, 58, 89, 70, 90).</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-vert-eau transition-colors"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href="#" className="hover:text-vert-eau transition-colors"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="hover:text-vert-eau transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
          </div>
          <p className="mt-4 text-sm">
            SIRET: 48181638700056 | <a href="#" className="hover:text-vert-eau transition-colors">Mentions légales</a> | <a href="#" className="hover:text-vert-eau transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
