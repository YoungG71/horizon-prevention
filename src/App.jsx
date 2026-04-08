import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ShieldAlert, Heart, Accessibility, Phone, Mail, Menu, X, FileText } from 'lucide-react'; // Using Lucide-react as initially requested, FontAwesome was for CDN only

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Header */}
      <header className="bg-bleu-marine text-white p-4 shadow-md fixed w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo Horizon Prévention" className="h-10 mr-4" />
            <div className="text-2xl font-bold">Horizon Prévention</div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:0743358441" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Phone size={18} />
              <span>07 43 35 84 41</span>
            </a>
            <a href="mailto:contact@horizon-prevention.fr" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
              <Mail size={18} />
              <span>contact@horizon-prevention.fr</span>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Accueil</Link></li>
            <li><Link to="problemes" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Problèmes</Link></li>
            <li><Link to="solutions" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Solutions</Link></li>
            <li><Link to="benefices" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Bénéfices</Link></li>
            <li><Link to="formations" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Formations</Link></li>
            <li><Link to="domaines-intervention" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">Domaines</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-vert-eau transition-colors">À propos</Link></li>
          </ul>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-bleu-marine absolute top-16 left-0 w-full py-4 shadow-lg">
            <ul className="flex flex-col items-center space-y-4">
              <li><Link to="hero" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Accueil</Link></li>
              <li><Link to="problemes" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Problèmes</Link></li>
              <li><Link to="solutions" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Solutions</Link></li>
              <li><Link to="benefices" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Bénéfices</Link></li>
              <li><Link to="formations" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Formations</Link></li>
              <li><Link to="domaines-intervention" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">Domaines</Link></li>
              <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer hover:text-vert-eau transition-colors">À propos</Link></li>
              <li>
                <a href="tel:0743358441" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
                  <Phone size={18} />
                  <span>07 43 35 84 41</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@horizon-prevention.fr" className="flex items-center space-x-2 hover:text-vert-eau transition-colors">
                  <Mail size={18} />
                  <span>contact@horizon-prevention.fr</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-r from-bleu-marine to-vert-eau text-white h-screen flex items-center justify-center text-center py-20">
        <div className="container mx-auto px-4 z-10">
          <img src="/Logo.png" alt="Logo Horizon Prévention" className="h-40 w-auto mx-auto mb-6 object-contain animate-fadeIn" />
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
            Sécurisez vos équipes, valorisez votre accompagnement.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Horizon Prévention est votre partenaire expert en formation professionnelle, dédié à l'amélioration du climat social et du bien-être en entreprise, notamment dans le secteur médico-social et les ESSMS.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Nous formons les professionnels des établissements éducatifs et du secteur du handicap à gérer les situations complexes avec sérénité et compétence.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="mailto:contact@horizon-prevention.fr" className="bg-vert-eau text-bleu-marine font-bold py-3 px-8 rounded-full hover:bg-opacity-90 active:scale-95 transition-transform duration-100 cursor-pointer text-lg">
              Demander un devis personnalisé
            </a>
            <a href="/horizon-prevention.pdf" target="_blank" rel="noopener noreferrer" className="bg-bleu-marine text-white border border-white font-bold py-3 px-8 rounded-full hover:bg-vert-eau hover:text-bleu-marine active:scale-95 transition-transform duration-100 cursor-pointer text-lg flex items-center justify-center space-x-2">
              <FileText size={20} />
              <span>Découvrir nos formations (PDF)</span>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Overlay for better text readability */}
      </section>


      {/* Problèmes rencontrés Section */}
      <section id="problemes" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-bleu-marine">Les défis que vous rencontrez</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Gestion des conflits et de la violence</h3>
              <p className="text-gray-700">Vos équipes sont confrontées à des situations de tension ou d'agressivité et manquent d'outils pour y faire face sereinement et efficacement.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Intégration et accompagnement du handicap</h3>
              <p className="text-gray-700">Vous souhaitez mieux accueillir et accompagner les personnes en situation de handicap, mais vos collaborateurs ne se sentent pas suffisamment formés ou à l'aise.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Prévention du mal-être au travail</h3>
              <p className="text-gray-700">Le stress, l'épuisement professionnel ou les risques psychosociaux affectent la performance et la cohésion de vos équipes.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Manque de compétences spécifiques</h3>
              <p className="text-gray-700">Vos professionnels ont besoin de développer des savoir-faire précis pour répondre aux exigences de leur métier et aux évolutions du secteur médico-social.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Difficulté à maintenir un environnement serein</h3>
              <p className="text-gray-700">Vous aspirez à un climat de travail apaisé et constructif, mais les tensions internes ou externes perturbent l'harmonie de votre structure.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-bleu-marine">Besoin de conformité et d'expertise</h3>
              <p className="text-gray-700">Vous cherchez à vous conformer aux réglementations en vigueur et à bénéficier d'une expertise externe pour optimiser vos pratiques professionnelles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions proposées Section */}
      <section id="solutions" className="py-20 bg-gris-perle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-bleu-marine">Nos solutions pour vous accompagner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Formations spécialisées</h3>
              <p className="text-gray-700">Des programmes conçus pour doter vos équipes des compétences nécessaires à la gestion des situations complexes et à l'amélioration du bien-être.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Approche pédagogique innovante</h3>
              <p className="text-gray-700">Des méthodes interactives et des mises en situation concrètes pour un apprentissage dynamique et mémorable.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Expertise reconnue</h3>
              <p className="text-gray-700">Bénéficiez de l'expérience d'intervenants qualifiés, experts dans le secteur médico-social et les ESSMS.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Accompagnement sur mesure</h3>
              <p className="text-gray-700">Des formations adaptées à vos besoins spécifiques, que ce soit en termes de durée, de contenu ou de modalités d'intervention.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Outils pratiques et applicables</h3>
              <p className="text-gray-700">Des stratégies et des techniques directement utilisables sur le terrain pour un impact immédiat et durable.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Engagement pour un environnement positif</h3>
              <p className="text-gray-700">Notre objectif est de contribuer activement à la création d'un climat de travail plus serein, inclusif et productif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section id="benefices" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-bleu-marine">Les bénéfices concrets pour votre structure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Amélioration du climat de travail</h3>
              <p className="text-gray-700">Réduisez les tensions et favorisez un environnement plus serein et collaboratif au sein de vos équipes.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Renforcement des compétences</h3>
              <p className="text-gray-700">Vos professionnels acquièrent des outils pratiques et une confiance accrue pour gérer les situations délicates.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Meilleur accompagnement des publics</h3>
              <p className="text-gray-700">Offrez un soutien de qualité supérieure aux personnes que vous accompagnez, y compris celles en situation de handicap.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Augmentation de la performance collective</h3>
              <p className="text-gray-700">Des équipes plus compétentes et plus sereines sont naturellement plus productives et efficaces.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Valorisation de votre image</h3>
              <p className="text-gray-700">Démontrez votre engagement envers le bien-être de vos employés et la qualité de votre accompagnement.</p>
            </div>
            <div className="bg-gris-perle p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-vert-eau">Conformité et sécurité juridique</h3>
              <p className="text-gray-700">Assurez-vous que vos pratiques sont en adéquation avec les réglementations, réduisant ainsi les risques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 bg-gris-perle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-bleu-marine">Nos Formations</h2>
          <p className="text-xl text-center mb-12 text-gray-600">Des solutions concrètes pour un environnement de travail serein et inclusif.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Formation 1: Gestion de la violence */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="bg-gris-perle p-4 rounded-full mb-6 mx-auto">
                <ShieldAlert size={48} className="text-bleu-marine" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-bleu-marine">Gestion de la violence (6h, possibilité 3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mx-auto max-w-xs">
                <li>MODULE 1 — Compréhension et Analyse</li>
                <li>MODULE 2 — Prévention et Désamorçage</li>
                <li>MODULE 3 — Action et Sécurité Tactique</li>
                <li>MODULE 4 — Post-Crise et Résilience</li>
              </ul>
            </div>

            {/* Formation 2: Bien-être au travail */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="bg-gris-perle p-4 rounded-full mb-6 mx-auto">
                <Heart size={48} className="text-vert-eau" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-bleu-marine">Bien-être au travail (3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mx-auto max-w-xs">
                <li>Identifier les sources de stress</li>
                <li>Équilibre vie pro/vie perso</li>
                <li>Ergonomie et environnement de travail</li>
                <li>Développer la communication non-violente</li>
              </ul>
            </div>

            {/* Formation 3: Gestion du handicap */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="bg-gris-perle p-4 rounded-full mb-6 mx-auto">
                <Accessibility size={48} className="text-bleu-marine" />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-bleu-marine">Gestion du handicap (6h, possibilité 3h)</h3>
              <ul className="list-disc list-inside text-left space-y-2 text-gray-700 mx-auto max-w-xs">
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

      {/* Section Téléchargement Brochure */}
      <section className="py-16 bg-gris-perle text-center">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-8 text-bleu-marine">Besoin de plus d’informations sur nos formations ? Téléchargez notre brochure complète.</p>
          <a href="/horizon-prevention.pdf" target="_blank" rel="noopener noreferrer" className="bg-vert-eau text-bleu-marine font-bold py-3 px-8 rounded-full hover:bg-bleu-marine hover:text-white active:scale-95 transition-transform duration-100 cursor-pointer text-lg flex items-center justify-center space-x-2 mx-auto w-fit">
            <FileText size={20} />
            <span>Télécharger la brochure (PDF)</span>
          </a>
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



