const de = {
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    work: 'Projekte',
    contact: 'Kontakt',
    resume: 'Lebenslauf',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Oways Othman.',
    tagline: 'Ich entwickle Dinge fürs Web.',
    bioParts: [
      'Ich bin ein Fullstack-Entwickler, spezialisiert auf die Entwicklung responsiver, barrierefreier Web-Apps mit React und TypeScript. Aktuell entwickle ich Webanwendungsfunktionen bei ',
      { text: 'Flexpress', href: 'https://www.flexpress.de/' },
      '.',
    ],
    cta: 'Meine Arbeit ansehen!',
  },
  about: {
    heading: 'Über mich',
    p1: 'Hallo! Ich bin Oways, ein Fullstack-Entwickler mit über 3 Jahren Erfahrung in der Entwicklung und Pflege responsiver Webanwendungen in SaaS- und Enterprise-Umgebungen, mit fundierter Praxis in React.js und TypeScript.',
    p2: 'Ich bin erfahren in der Konzeption wiederverwendbarer, komponentenbasierter UI-Bausteine sowie in der Anbindung an REST-APIs. Ich arbeite eng mit Design- und Entwicklungsteams zusammen, um konsistente, barrierefreie und benutzerfreundliche Oberflächen im Rahmen von Designsystemen umzusetzen.',
    p3Parts: [
      'Aktuell bin ich Fullstack-Entwickler bei ',
      { text: 'Flexpress Verwaltungs GmbH', href: 'https://www.flexpress.de/' },
      ' in Hamburg und habe zuvor bei ',
      { text: 'IQVIA', href: 'https://www.iqvia.com/' },
      ' und JustProtect gearbeitet. Ich lebe in Berlin, Deutschland.',
    ],
    p4: 'Hier sind einige Technologien, mit denen ich zuletzt gearbeitet habe:',
    skills: ['HTML5 & CSS3', 'TypeScript', 'React.js', 'Next.js', 'REST APIs', 'PostgreSQL'],
  },
  contact: {
    overline: 'Was kommt als Nächstes?',
    title: 'Kontakt aufnehmen',
    body: 'Ich bin aktuell offen für neue Fullstack-Entwickler-Möglichkeiten. Ob du eine Frage hast, eine offene Stelle in deinem Team oder einfach nur Hallo sagen möchtest — mein Postfach ist immer offen und ich melde mich schnellstmöglich zurück!',
    button: 'Hallo sagen',
  },
  jobs: {
    heading: 'Wo ich gearbeitet habe',
    byCompany: {
      'Flexpress Verwaltungs GmbH': {
        role: 'Fullstack-Entwickler',
        bullets: [
          'Entwicklung und Pflege von Webanwendungsfunktionen im Frontend und Backend',
          'Aufbau und Integration von REST-APIs zur Anbindung von Frontend und Backend',
          'Fehleranalyse und -behebung über den gesamten Anwendungsstack hinweg',
          'Mitwirkung an Code Reviews und Einhaltung etablierter Coding-Standards',
        ],
      },
      'Bau Hochberg': {
        role: 'Webentwickler (Freelance)',
        bullets: [
          'Umsetzung und Optimierung von Website-Layouts mit Fokus auf UI-Konsistenz und Usability',
          'Lieferung responsiver, visuell konsistenter Frontend-Seiten gemäß Design-Vorgaben',
        ],
      },
      'IQVIA (MENA)': {
        role: 'Software-Entwickler',
        bullets: [
          'Mitarbeit an nutzerorientierten Anwendungen in einem agilen Umfeld',
          'Analyse komplexen Systemverhaltens über Frontend, Backend-APIs und Integrationsebenen hinweg',
          'Erhöhung der Systemzuverlässigkeit durch strukturiertes Debugging und Root-Cause-Analyse',
        ],
      },
      JustProtect: {
        role: 'Software-Entwickler',
        bullets: [
          'Entwicklung und Pflege produktiver Webanwendungen in einer Enterprise-SaaS-Umgebung',
          'Verbesserung wiederverwendbarer Frontend-Komponenten mit React.js und TypeScript, Steigerung der Wiederverwendbarkeit um 20 %',
        ],
      },
    },
  },
  featured: {
    heading: 'Einige meiner Projekte',
    overline: 'Featured-Projekt',
    byTitle: {
      Convo:
        'Eine Echtzeit-Chat-Anwendung mit Kanälen, Direktnachrichten, Gruppen-Unterhaltungen, Mitgliederverwaltung, Datei- und Sprachnachrichten sowie vollständiger Hell-/Dunkel-Theme- und Sprachunterstützung. Als Next.js-Frontend gebaut, das sich mit einem selbst gehosteten Rocket.Chat-Backend für Authentifizierung, Messaging und Dateispeicherung verbindet.',
      Cinemap:
        'Eine App zur Entdeckung von Filmen und Serien mit durchsuchbarem Startbereich, Trending-Titeln, Genre-Filtern, Suche über beide Medientypen und detaillierten Seiten mit Besetzungsinformationen, Trailern und ähnlichen Empfehlungen — powered by die TMDB API.',
      Compasso:
        'Finde dein nächstes Reiseziel — ein React + TypeScript Reise-Finder, der Orte basierend auf deinem Standort, der Jahreszeit, der gewünschten Umgebung (Strand, Berge, Wüste, Wald, Stadt, Land, Insel, See) und deinem Budget vorschlägt. Die Ergebnisse werden mit aktuellem Wetter und echten Sehenswürdigkeiten in der Nähe angereichert.',
      Minesweeper:
        'Das klassische Minesweeper-Spiel, neu für das Web umgesetzt, vollständig clientseitig ohne Backend oder Datenbank. Mit mehreren Schwierigkeitsgraden, Bestzeiten-Tracking, Dark Mode und Deutsch/Englisch-Unterstützung — alle Spieldaten werden lokal im Browser gespeichert.',
    },
  },
};

export default de;
