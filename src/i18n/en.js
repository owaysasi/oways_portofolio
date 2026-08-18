const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    work: 'Work',
    contact: 'Contact',
    resume: 'Resume',
  },
  hero: {
    greeting: 'Hi, my name is',
    name: 'Oways Othman.',
    tagline: 'I build things for the web.',
    bioParts: [
      'I’m a fullstack developer specializing in building responsive, accessible web apps with React and TypeScript. Currently, I’m building web application features at ',
      { text: 'Flexpress', href: 'https://www.flexpress.de/' },
      '.',
    ],
    cta: 'Check out my work!',
  },
  about: {
    heading: 'About Me',
    p1: 'Hello! I’m Oways, a fullstack developer with 3+ years of experience building and maintaining responsive web applications in SaaS and enterprise environments, with a strong foundation in React.js and TypeScript.',
    p2: 'I’m experienced in designing reusable, component-based UI building blocks and connecting them to REST APIs. I’m used to working closely with design and engineering teams to ship consistent, accessible, and user-friendly interfaces within established design systems.',
    p3Parts: [
      'I’m currently a fullstack developer at ',
      { text: 'Flexpress Verwaltungs GmbH', href: 'https://www.flexpress.de/' },
      ' in Hamburg, and previously worked at ',
      { text: 'IQVIA', href: 'https://www.iqvia.com/' },
      ' and JustProtect. I’m based in Berlin, Germany.',
    ],
    p4: 'Here are a few technologies I’ve been working with recently:',
    skills: ['HTML5 & CSS3', 'TypeScript', 'React.js', 'Next.js', 'REST APIs', 'PostgreSQL'],
  },
  contact: {
    overline: 'What’s Next?',
    title: 'Get In Touch',
    body: 'I’m currently open to new fullstack developer opportunities. Whether you have a question, an opening on your team, or just want to say hi, my inbox is always open and I’ll try my best to get back to you!',
    button: 'Say Hello',
  },
  jobs: {
    heading: 'Where I’ve Worked',
    byCompany: {
      'Flexpress Verwaltungs GmbH': {
        role: 'Fullstack Developer',
        bullets: [
          'Developing and maintaining web application features across the frontend and backend',
          'Building and integrating REST APIs connecting frontend and backend',
          'Diagnosing and fixing bugs across the full application stack',
          'Contributing to code reviews and upholding established coding standards',
        ],
      },
      'Bau Hochberg': {
        role: 'Web Developer (Freelance)',
        bullets: [
          'Implemented and optimized website layouts with a focus on UI consistency and usability',
          'Delivered responsive, visually consistent frontend pages according to design specs',
        ],
      },
      'IQVIA (MENA)': {
        role: 'Software Developer',
        bullets: [
          'Contributed to user-facing applications in an agile environment',
          'Analyzed complex system behavior across frontend, backend APIs, and integration layers',
          'Improved system reliability through structured debugging and root-cause analysis',
        ],
      },
      JustProtect: {
        role: 'Software Developer',
        bullets: [
          'Developed and maintained production web applications in an enterprise SaaS environment',
          'Improved reusable frontend components with React.js and TypeScript, increasing reusability by 20%',
        ],
      },
    },
  },
  featured: {
    heading: 'Some Things I’ve Built',
    overline: 'Featured Project',
    byTitle: {
      Convo:
        'A real-time chat application with channels, direct messages, group conversations, member management, file and voice messages, and full light/dark theme and language support. Built as a Next.js frontend connecting to a self-hosted Rocket.Chat backend for authentication, messaging, and file storage.',
      Cinemap:
        'A movie and TV show discovery app with a browsable home feed, trending titles, genre filtering, search across both media types, and detailed pages featuring cast information, trailers, and similar recommendations — all powered by the TMDB API.',
      Compasso:
        'Find your next trip — a React + TypeScript travel destination finder that suggests places to visit based on where you are, what time of year it is, what kind of environment you’re after (beach, mountain, desert, forest, city, countryside, island, lake), and your budget. Results are enriched with live weather and real, nearby points of interest.',
      Minesweeper:
        'The classic Minesweeper game rebuilt for the web, entirely client-side with no backend or database. Includes multiple difficulty levels, best-time tracking, dark mode, and English/German language support, with all game data persisted locally through browser storage.',
    },
  },
};

export default en;
