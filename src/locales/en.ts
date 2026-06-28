const en = {
  sections: {
    home: "Home",
    experiences: "Experiences",
    projects: "Projects",
    contact: "Contact",
  },

  footer: {
    cv: "CV",
    contact: "Contact Me !",
    scrollCta: "Scroll to explore",
  },

  hero: {
    hello: "Hey, I'm",
    collaborator: "your future collaborator",
    title: "Junior <0>Fullstack Developer</0>",
    presentation: `
    Passionate about building web applications with modern
    technologies. I speciliaze in <0>Java/SpringBoot, React and DevOps</0> to deliver 
    maintenable applications.`,
    aboutme: {
      title: "About me",
      content: `
      I enjoy understanding how software works beyond writing code.
      From designing <0>REST APIs</0> and implementing backend logic
      to automating deployments and configuring cloud infrastructure,
      I like building complete, maintainable applications. I'm
      naturally <0>curious and enjoy learning new technologies</0> to
      better understand how modern software systems work as a whole.
      `,
      cta1: "Contact me",
      cta2: "Download CV",
    },
    mainFacts: {
      experience: {
        title: "6 months",
        subtitle: "Of fullstack experience",
        content: "Php - Javascript - Cypress - MySQL - APIs Management",
      },
      project: {
        title: "1 Personal Project",
        content:
          "Spring Boot - PostgreSQL - JUnit - JPA/Hibernate - AWS - Pipeline CI/CD",
        cta: "Check it out",
      },
      formation: {
        title: "Dual Master's-Level Degrees",
        subtitle: "Computer Science & Cybersecurity",
        content: `
        Strong academic foundation combining software engineering
        principles with cybersecurity, enabling me to build reliable and
        secure applications.`,
      },
    },
  },

  experiences: {
    professional: {
      title: "Professional",
      eyeCatcher: "What I've done",
      recentInternship: {
        title: "IAM Consultant (Internship)",
        subInfos: "6 months - CGI Business Consulting - Puteaux",
        description: `
        Integration of 4 applications into an IAM solution via Usercube and XML\n
        Regular technical workshops with 2 clients' project managers: Pilotage, planning, estimation\n
        Implementation of integration and industrialization processes reducing integration time by half\n
        Study of anonymization solutions and elaboration of a process that can be done in less than 15min on local development databases`,
      },
      fullstackInternship: {
        title: "Fullstack Developer (Internship)",
        subInfos: "6 months - SOeMAN Group - Clermont Ferrand",
        description: `
        Extension of the CI/CD pipeline by adding automatic test execution and multi-platform support\n
        Integration of REST APIs into an existing architecture: Brevo, INSEE\n
        Creation of a secure access system using individual tokens\n
        Refactoring of frontend and backend components`,
      },
      dutInternship: {
        title: "Software Developer (Internship)",
        subInfos: "6 months - Atypik'Habitat SARL - La Rochelle",
        description: `
        Development of a heavy call tracking client in C#/.Net with technical documentation`,
      },
    },
    formation: {
      title: "Studies",
      eyeCatcher: "What I've learned",
      engineer: {
        title: "Engineer in Computer Science",
        subInfos: "Computer Science and Information Systems",
        description: `
        Development of web applications using Symfony / PHP / Javascript\n
        Architecture of software, micro-services and resilience of systems\n
        UX/UI and accessibility of interfaces\n
        Methodologies and DevOps tools\n
        Introduction to the design of AI, models and neural networks
        `,
      },
      master: {
        title: "Master in Cybersecurity",
        subInfos: "Security of Information Systems",
        description: `
        Cryptography and secure architectures: RSA, exchange protocol for keys\n
        Numerical certificates, certification authority and PKI\n
        Exploitation of vulnerabilities in systems and applications\n
        GDPR: data processing registers, data breaches, compliance study\n
        Post-incident analysis, risk analysis, elaboration of a PSSI (PRA/PCA)`,
      },
      dut: {
        title: "Technology degree in Computer Science",
        subInfos: "Computer Science",
        description: `
        Algorithmic programming, complexity and data structures\n
        Development of application in object-oriented programming (OOP)\n
        Development and management of relationaldatabases
        `,
      },
    },
  },

  projects: {
    featuredProject: {
      title: "Featured Project",
      cardTitle: "Application Credit Management API",
      cta: "Live on AWS",
      projectDescription: `
      This project is a Spring Boot backend API focused on secure token
      and application management. It features API key authentication,
      structured request handling, and rate limiting to control usage
      per client. Built with a clean layered architecture, it is
      designed with production deployment and CI/CD integration in mind,
      making it suitable for real-world cloud environments.
      `,
    },
    otherProjects: {
      title: "Other Projects",
      firstCard: {
        title: "CRM Legacy System Enhancement (Internship)",
        description: `During this internship, I contributed to the evolution of a long-standing CRM platform by implementing <0>new backend services</0>, integrating third-party REST APIs, <0>improving the CI/CD pipeline, and reducing technical debt</0>. A major contribution was the design and implementation of a <0>secure token-based access system</0> integrated into the existing architecture.`,
      },
      secondCard: {
        title: "CI/CD & Kubernetes monitoring plateform",
        description: `A DevOps-focused project centered on <0>CI/CD automation</0>, Kubernetes orchestration, and observability. The pipeline automatically <0>deploys Dockerized applications to a Kubernetes cluster</0> while Grafana dashboards <0> monitor both application metrics and software development KPIs</0>, providing continuous feedback on system health and team productivity.`,
      },
      thirdCard: {
        title: "Secure File Vault System",
        description: `A distributed secure file vault built entirely in Python, featuring a custom <0>Public Key Infrastructure (PKI)</0>, certificate issuance, mutual authentication using a <0>Zero-Knowledge Proof protocol </0>, and end-to-end encryption for <0>encrypted file storage</0>.`,
      },
    },
  },

  contact: {
    quickInfos: {
      phoneNumber: "Phone Number",
      researchLocation: "Sector",
      locations: "Nantes and peripheries, Cholet, Saint-Nazaire",
    },
    contactForm: {
      title: "Let's work together !",
      subtitle:
        "Interested in my profile or have an opportunity to discuss ? I'd be happy to hear from you and explore how can I contribute to your team.",
      placeholderName: "Name / Firstname",
      placeholderEmail: "Email",
      placeholderPhone: "Phone (optional)",
      placeholderMessage: "Your message",
      cta: "Send",
      ctaWait: "Sending ...",
      successMessage: "Message sent successfully",
      successComplement: "I'll get back to you as soon as possible.",
    },
  },

  mainFooter: {
    title: "Fullstack Developer • React / Spring",
    links: "Connect",
    copyright: "Build with React, Tailwind & Resend",
  },

  card: {
    accordeonSchrink: "Show less",
    accordeonExpand: "Read more",
  },
};

export default en;
