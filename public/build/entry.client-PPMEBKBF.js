import {
  require_client
} from "/build/_shared/chunk-JWFXSNGY.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-S4NLEH7R.js";
import {
  I18nextProvider,
  initReactI18next
} from "/build/_shared/chunk-ZTZ7TB5N.js";
import "/build/_shared/chunk-MTXAO3KM.js";
import "/build/_shared/chunk-LZFRHXZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HALFQDQZ.js";
import {
  require_react
} from "/build/_shared/chunk-D77XCN57.js";
import {
  createHotContext
} from "/build/_shared/chunk-T3CE5YF7.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// resources/locales/en/common.json
var common_default = {
  hero: {
    title: "Need a website or custom development solution but don't have time or skills?",
    description: "I have 2+ years of software development experience and 7+ years of experience in marketing that helps me create applications that bring the most value to your business and clients!",
    consultation: {
      email: "Get free consultation via Email",
      telegram: "Get free consultation via Telegram"
    }
  },
  common: {
    loading: "Loading...",
    error: "An error occurred. Please try again later.",
    notFound: "Page not found."
  },
  footer: {
    contacts: "Contacts",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "Serhii Shevchenko. All rights reserved."
  },
  navbar: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    experience: "Experience",
    tools: "Tools",
    projects: "Projects",
    testimonials: "Testimonials"
  },
  contact: {
    title: "Contact Me",
    description: "Feel free to reach out for any inquiries or collaborations.",
    email: "Email",
    phone: "Phone"
  },
  services: {
    title: "My Services",
    subtitle: "Why choose me?",
    description: "I'm a skilled software developer with 7+ years of experience in marketing which helps me much better understand business needs and create websites and products that give the most value to business owners and its clients."
  },
  servicesData: {
    webDevelopment: {
      title: "Web Development",
      description: "Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs.",
      tags: [
        "Responsive Design",
        "CMS Integration",
        "Custom Features",
        "Performance Boost",
        "Analytics Setup"
      ]
    },
    fullStackDevelopment: {
      title: "Full-Stack Development",
      description: "End-to-end development services, covering both front-end and back-end, to create robust and scalable web applications.",
      tags: [
        "Front-End UI",
        "Back-End Logic",
        "Database Setup",
        "API Integration"
      ]
    },
    websiteOptimization: {
      title: "Website Optimization",
      description: "Improve website performance, speed, and SEO to enhance user experience and ensure better visibility on search engines.",
      tags: [
        "Speed Boost",
        "SEO Improvement",
        "Mobile Friendly",
        "Site Security"
      ]
    },
    ecommerceSolutions: {
      title: "E-commerce Solutions",
      description: "Creating and optimizing E-Commerce platforms that offer a seamless shopping experience, from front-end development to payment integration and custom solutions.",
      tags: [
        "Front-End Development",
        "Payment Setup",
        "Analytics Setup",
        "Custom Solutions"
      ]
    }
  },
  portfolio: {
    title: "My Portfolio",
    description: "Check out some of my recent projects and works."
  },
  feedbacks: {
    title: "Client Feedback",
    description: "What my clients say about my work."
  },
  toolsSection: {
    title: "Tools I Use",
    description: "I work with a variety of tools and technologies to deliver the best results."
  },
  experience: {
    title: "Work Experience.",
    subtitle: "What I have done so far.",
    fullstackdeveloper: {
      title: "Full-Stack Developer",
      company: "Freelance",
      duration: "December 2024 - Present",
      description: [
        "Website development using Wordpress, Figma, Javascript, React, Next.js, Git, Firebase, Vercel, REST API, V0, Tailwind CSS.",
        "Working with databases using SQL."
      ]
    },
    headOfAdvertising: {
      title: "Head of Advertising and Web Analytics Department",
      company: "Miloan",
      duration: "May 2021 - August 2023",
      description: [
        "Experience with Android studio (setting up mobile app analytics).",
        "Setting up analytics (Firebase, BigQuery, Google Cloud, SQL, Google Analytics, GTM, MS Clarity, AppsFlyer), analyzing reports and optimizing advertising campaigns, as well as websites and landing pages.",
        "Writing custom analytics scripts (Javascript).",
        "Dom scraping (jQuery), DevTools.",
        "Collaborating with cross-functional teams including designers, developers and others."
      ]
    },
    webDeveloper: {
      title: "Web Developer and Advertising Specialist",
      company: "Freelance",
      duration: "February 2020 - April 2021",
      description: [
        "Website development (Wordpress, Elementor, Javascript, CSS, HTML, Figma).",
        "Analytics setup (Google Analytics, GTM, MS Clarity).",
        "Writing custom scripts for analytics (Javascript).",
        "Setting up Google Ads, Facebook Ads."
      ]
    }
  },
  tools: {
    title: "Main Tools & Technologies Powering My Creations",
    subtitle: "Why choose me?",
    description: "Below you can explore the cutting-edge tools and technologies I use to build innovative and effective digital solutions."
  },
  projects: {
    title: "My Projects",
    subtitle: "Portfolio.",
    myPortfolio: {
      title: "My 3D Portfolio website",
      description: "While working on this project, I focused on creating a responsive and visually appealing portfolio website that showcases my skills. The site is built using modern web technologies and follows best practices for performance.",
      link: "Visit website",
      link_github: "View Code on Github",
      image: "../SerhiiShevchenko_portfolio_hero_1_en.webp",
      img_alt: "Serhii Shevchenko's portfolio website preview",
      tags: [
        "#javascript",
        "#react",
        "#vite",
        "#tailwindcss",
        "#threejs"
      ]
    },
    nutritionBlog: {
      title: "Science-based nutrition, health, fitness, biohacking blog",
      description: "Different parts of this project were developed using various technologies, including Wordpress, Next.js, Firebase, Javascript, REST API. As an example, below I provided a link to code on github for one of the pages, which was built with Next.js, Rest API and then deployed on Firebase.",
      link: "Visit Blog",
      link_github: "View Code on Github",
      image: "../SerhiiShevchenko_com_home_en.webp",
      img_alt: "Serhii Shevchenko's science-based nutrition, health, fitness, biohacking blog preview",
      tags: [
        "#javascript",
        "#wordpress",
        "#firebase",
        "#restapi",
        "#nextjs"
      ]
    }
  },
  testimonials: {
    title: "What Others Say",
    subtitle: "Testimonials.",
    inCompany: "of",
    feedbacks: {
      client1: {
        name: "Hanna Mykhalchenko",
        designation: "CEO",
        company: "Acme Co",
        feedback: "I thought it was impossible to make a website as beautiful as our product, but Serhii proved me wrong."
      },
      client2: {
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        feedback: "I've never met a web developer who truly cares about their clients' success like Serhii does."
      },
      client3: {
        name: "Sara Lee",
        designation: "CMO",
        company: "XYZ Inc",
        feedback: "After Serhii optimized our website, our traffic increased by 50%. We can't thank him enough!"
      }
    }
  },
  contactForm: {
    title: "Contact Me",
    subtitle: "Get in Touch",
    fields: {
      name: "Your Name",
      name_placeholder: "What's your name?",
      email: "Your Email",
      email_placeholder: "yourname@example.com",
      message: "Your Message",
      message_placeholder: "How can I help you?"
    },
    alert: {
      success: "Thank you. I will get back to you as soon as possible.",
      error: "Oops! Something went wrong. Please try again."
    },
    validation: {
      name: "Name is required",
      email: {
        required: "Email is required",
        invalid: "Invalid email address"
      },
      message: "Message is required"
    },
    sendBtn: "Send",
    sending: "Sending..."
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for does not exist. Please try again or contact us for help.",
    homeLink: "Go to homepage",
    pageTitle: "Oops! Something went wrong. Please try again or contact us so we can help."
  },
  meta: {
    title: "3D developer portfolio website | Serhii Shevchenko",
    description: "Serhii Shevchenko's 3D portfolio website built with react, vite, three.js, tailwind CSS, javascript.",
    keywords: "software developer, 3d developer portfolio, 3d developer website, developer website example, 3d website example, react website",
    author: "Serhii Shevchenko",
    url: "https://dev.serhiishevchenko.com/en",
    OgLocale: "en_US",
    Img: "/SerhiiShevchenko_portfolio_hero_1_en.png",
    TwCard: "summary_large_image",
    privacy: {
      title: "Privacy Policy",
      description: "This privacy policy explains how we collect, use, and protect your information."
    },
    tos: {
      title: "Terms of Service",
      description: "By using our website and services, you agree to these terms of service."
    }
  }
};

// resources/locales/uk/common.json
var common_default2 = {
  hero: {
    title: "\u0422\u0440\u0435\u0431\u0430 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0430\u0439\u0442 \u0430\u0431\u043E \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0443 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0443, \u0430\u043B\u0435 \u043D\u0435\u043C\u0430\u0454 \u0447\u0430\u0441\u0443 \u0447\u0438 \u043D\u0430\u0432\u0438\u0447\u043E\u043A?",
    description: "\u0423 \u043C\u0435\u043D\u0435 2+ \u0440\u043E\u043A\u0438 \u0434\u043E\u0441\u0432\u0456\u0434\u0443 \u0432 \u0440\u043E\u0437\u0440\u043E\u0431\u0446\u0456 \u0442\u0430 7+ \u0440\u043E\u043A\u0456\u0432 \u0434\u043E\u0441\u0432\u0456\u0434\u0443 \u0432 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443, \u0449\u043E \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043C\u0435\u043D\u0456 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u0440\u0438\u043D\u043E\u0441\u044F\u0442\u044C \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0443 \u0446\u0456\u043D\u043D\u0456\u0441\u0442\u044C \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0442\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432!",
    consultation: {
      email: "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0443 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E \u043F\u043E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456\u0439 \u043F\u043E\u0448\u0442\u0456",
      telegram: "\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0443 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E \u0447\u0435\u0440\u0435\u0437 Telegram"
    }
  },
  common: {
    loading: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...",
    error: "\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u043F\u0456\u0437\u043D\u0456\u0448\u0435.",
    notFound: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430."
  },
  footer: {
    contacts: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    legal: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438",
    privacy: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456",
    terms: "\u0423\u043C\u043E\u0432\u0438 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F",
    rights: "\u0421\u0435\u0440\u0433\u0456\u0439 \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E. \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E."
  },
  navbar: {
    home: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
    about: "\u041F\u0440\u043E \u043D\u0430\u0441",
    services: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438",
    portfolio: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    contact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    experience: "\u0414\u043E\u0441\u0432\u0456\u0434",
    tools: "\u0406\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438",
    projects: "\u041F\u0440\u043E\u0454\u043A\u0442\u0438",
    testimonials: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"
  },
  contact: {
    title: "\u0417\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437\u0456 \u043C\u043D\u043E\u044E",
    description: "\u041D\u0435 \u0441\u043E\u0440\u043E\u043C\u0442\u0435\u0441\u044F \u0437\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F\u043C\u0438 \u0430\u0431\u043E \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F\u043C\u0438 \u043F\u0440\u043E \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044E.",
    email: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",
    phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"
  },
  services: {
    title: "\u041C\u043E\u0457 \u041F\u043E\u0441\u043B\u0443\u0433\u0438",
    subtitle: "\u0427\u043E\u043C\u0443 \u0432\u0430\u0440\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043C\u0435\u043D\u0435?",
    description: "\u042F \u0434\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u0438\u0439 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0437 \u043F\u043E\u043D\u0430\u0434 7-\u0440\u0456\u0447\u043D\u0438\u043C \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0443 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443, \u0449\u043E \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043C\u0435\u043D\u0456 \u043A\u0440\u0430\u0449\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438 \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438 \u0442\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u044F\u043A\u0456 \u043F\u0440\u0438\u043D\u043E\u0441\u044F\u0442\u044C \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0443 \u0446\u0456\u043D\u043D\u0456\u0441\u0442\u044C \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430\u043C \u0431\u0456\u0437\u043D\u0435\u0441\u0443 \u0442\u0430 \u0457\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C."
  },
  servicesData: {
    webDevelopment: {
      title: "\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0412\u0435\u0431-\u0421\u0430\u0439\u0442\u0456\u0432",
      description: "\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u0456, \u0432\u0438\u0441\u043E\u043A\u043E\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438, \u044F\u043A\u0456 \u043F\u043E\u0454\u0434\u043D\u0443\u044E\u0442\u044C \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0437 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044E, \u0430\u0434\u0430\u043F\u0442\u043E\u0432\u0430\u043D\u0456 \u0434\u043E \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0438\u0445 \u043F\u043E\u0442\u0440\u0435\u0431.",
      tags: [
        "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0438\u0439 \u0414\u0438\u0437\u0430\u0439\u043D",
        "CMS \u0406\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044F",
        "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u0439 \u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B",
        "\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438"
      ]
    },
    fullStackDevelopment: {
      title: "\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u041F\u043E\u0432\u043D\u043E\u0433\u043E \u0421\u0442\u0435\u043A\u0443",
      description: "\u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438 \u0432\u0456\u0434 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0434\u043E \u043A\u0456\u043D\u0446\u044F, \u0449\u043E \u043E\u0445\u043E\u043F\u043B\u044E\u044E\u0442\u044C \u044F\u043A \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434, \u0442\u0430\u043A \u0456 \u0431\u0435\u043A\u0435\u043D\u0434, \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u0430\u0434\u0456\u0439\u043D\u0438\u0445 \u0442\u0430 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0435\u0431-\u0434\u043E\u0434\u0430\u0442\u043A\u0456\u0432.",
      tags: [
        "\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0412\u0435\u0440\u0441\u0442\u043A\u0430",
        "\u0411\u0435\u043A\u0435\u043D\u0434 \u041B\u043E\u0433\u0456\u043A\u0430",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0411\u0430\u0437 \u0414\u0430\u043D\u0438\u0445",
        "API \u0406\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044F"
      ]
    },
    websiteOptimization: {
      title: "\u041E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u0412\u0435\u0431-\u0421\u0430\u0439\u0442\u0456\u0432",
      description: "\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456 \u0442\u0430 SEO \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0434\u043E\u0441\u0432\u0456\u0434\u0443 \u0442\u0430 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u043A\u0440\u0430\u0449\u043E\u0457 \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0456 \u0432 \u043F\u043E\u0448\u0443\u043A\u043E\u0432\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445.",
      tags: [
        "\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0428\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456",
        "\u041F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F SEO",
        "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0438\u0439 \u0414\u0438\u0437\u0430\u0439\u043D",
        "\u0411\u0435\u0437\u043F\u0435\u043A\u0430 \u0421\u0430\u0439\u0442\u0443"
      ]
    },
    ecommerceSolutions: {
      title: "\u0420\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u041A\u043E\u043C\u0435\u0440\u0446\u0456\u0457",
      description: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0457, \u044F\u043A\u0456 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u044E\u0442\u044C \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0431\u0456\u0439\u043D\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0443, \u0432\u0456\u0434 \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438 \u0434\u043E \u0456\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0442\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C.",
      tags: [
        "\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0430",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041F\u043B\u0430\u0442\u0435\u0436\u0456\u0432",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438",
        "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F"
      ]
    }
  },
  portfolio: {
    title: "\u041C\u043E\u0454 \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    description: "\u041E\u0437\u043D\u0430\u0439\u043E\u043C\u0442\u0435\u0441\u044F \u0437 \u0434\u0435\u044F\u043A\u0438\u043C\u0438 \u0437 \u043C\u043E\u0457\u0445 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0445 \u043F\u0440\u043E\u0454\u043A\u0442\u0456\u0432 \u0442\u0430 \u0440\u043E\u0431\u0456\u0442."
  },
  feedbacks: {
    title: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u041A\u043B\u0456\u0454\u043D\u0442\u0456\u0432",
    description: "\u0429\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u043C\u043E\u0457 \u043A\u043B\u0456\u0454\u043D\u0442\u0438 \u043F\u0440\u043E \u043C\u043E\u044E \u0440\u043E\u0431\u043E\u0442\u0443."
  },
  toolsSection: {
    title: "\u0406\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438, \u042F\u043A\u0456 \u042F \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E",
    description: "\u042F \u043F\u0440\u0430\u0446\u044E\u044E \u0437 \u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u043D\u0438\u043C\u0438 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0442\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044F\u043C\u0438, \u0449\u043E\u0431 \u0434\u043E\u0441\u044F\u0433\u0442\u0438 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432."
  },
  experience: {
    title: "\u041C\u0456\u0439 \u0434\u043E\u0441\u0432\u0456\u0434",
    subtitle: "\u0429\u043E \u044F \u0437\u0440\u043E\u0431\u0438\u0432 \u0434\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443.",
    fullstackdeveloper: {
      title: "Full-Stack \u0420\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A",
      company: "Freelance",
      duration: "\u0413\u0440\u0443\u0434\u0435\u043D\u044C 2024 - \u0422\u0435\u043F\u0435\u0440\u0456\u0448\u043D\u0456\u0439 \u0447\u0430\u0441",
      description: [
        "\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C Wordpress, Figma, Javascript, React, Next.js, Git, Firebase, Vercel, REST API, V0, Tailwind CSS.",
        "\u0420\u043E\u0431\u043E\u0442\u0430 \u0437 \u0431\u0430\u0437\u0430\u043C\u0438 \u0434\u0430\u043D\u0438\u0445 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E SQL."
      ]
    },
    headOfAdvertising: {
      title: "\u041A\u0435\u0440\u0456\u0432\u043D\u0438\u043A \u0412\u0456\u0434\u0434\u0456\u043B\u0443 \u0420\u0435\u043A\u043B\u0430\u043C\u0438 \u0442\u0430 \u0412\u0435\u0431 \u0410\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438",
      company: "Miloan",
      duration: "\u0422\u0440\u0430\u0432\u0435\u043D\u044C 2021 - \u0421\u0435\u0440\u043F\u0435\u043D\u044C 2023",
      description: [
        "\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437 Android Studio (\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445 \u0434\u043E\u0434\u0430\u0442\u043A\u0456\u0432).",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 (Firebase, BigQuery, Google Cloud, SQL, Google Analytics, GTM, MS Clarity, AppsFlyer), \u0430\u043D\u0430\u043B\u0456\u0437 \u0437\u0432\u0456\u0442\u0456\u0432 \u0442\u0430 \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0456\u0439, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0442\u0430 \u0446\u0456\u043B\u044C\u043E\u0432\u0438\u0445 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A.",
        "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044F \u0432\u043B\u0430\u0441\u043D\u0438\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u0456\u0432 \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 (Javascript).",
        "Dom scraping (jQuery), DevTools.",
        "\u0421\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044F \u0437 \u043A\u0440\u043E\u0441-\u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0456\u0432, \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0456\u0432 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445."
      ]
    },
    webDeveloper: {
      title: "Web \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A \u0442\u0430 PPC \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442",
      company: "Freelance",
      duration: "\u041B\u044E\u0442\u0438\u0439 2020 - \u041A\u0432\u0456\u0442\u0435\u043D\u044C 2021",
      description: [
        "\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 (Wordpress, Elementor, Javascript, CSS, HTML, Figma).",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 (Google Analytics, GTM, MS Clarity).",
        "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044F \u0432\u043B\u0430\u0441\u043D\u0438\u0445 \u0441\u043A\u0440\u0438\u043F\u0442\u0456\u0432 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 (Javascript).",
        "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F Google Ads, Facebook Ads."
      ]
    }
  },
  tools: {
    title: "\u041E\u0441\u043D\u043E\u0432\u043D\u0456 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0438 \u0442\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457, \u044F\u043A\u0456 \u0436\u0438\u0432\u043B\u044F\u0442\u044C \u043C\u043E\u0457 \u0442\u0432\u043E\u0440\u0456\u043D\u043D\u044F",
    subtitle: "\u0427\u043E\u043C\u0443 \u0432\u0430\u0440\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043C\u0435\u043D\u0435?",
    description: "\u041D\u0438\u0436\u0447\u0435 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u0442\u0438\u0441\u044F \u0437 \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u043C\u0438 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0442\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044F\u043C\u0438, \u044F\u043A\u0456 \u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0456\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0442\u0430 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0438\u0445 \u0446\u0438\u0444\u0440\u043E\u0432\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C."
  },
  projects: {
    title: "\u041C\u043E\u0457 \u041F\u0440\u043E\u0454\u043A\u0442\u0438",
    subtitle: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E.",
    myPortfolio: {
      title: "\u041C\u0456\u0439 3D \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442",
      description: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u0440\u043E\u0431\u043E\u0442\u0438 \u043D\u0430\u0434 \u0446\u0438\u043C \u043F\u0440\u043E\u0454\u043A\u0442\u043E\u043C \u044F \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u0432\u0441\u044F \u043D\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0430 \u0432\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u0438\u0432\u0430\u0431\u043B\u0438\u0432\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u044F\u043A\u0438\u0439 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0454 \u043C\u043E\u0457 \u043D\u0430\u0432\u0438\u0447\u043A\u0438. \u0421\u0430\u0439\u0442 \u043F\u043E\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u0445 \u0432\u0435\u0431-\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439 \u0442\u0430 \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0445 \u043F\u0440\u0430\u043A\u0442\u0438\u043A \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456.",
      link: "\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442",
      link_github: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043A\u043E\u0434 \u043D\u0430 Github",
      image: "../SerhiiShevchenko_portfolio_hero_1_ua.webp",
      img_alt: "\u041F\u0440\u0435\u0432'\u044E \u0441\u0430\u0439\u0442\u0430 \u0437 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0421\u0435\u0440\u0433\u0456\u044F \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430",
      tags: [
        "#javascript",
        "#react",
        "#vite",
        "#tailwindcss",
        "#threejs"
      ]
    },
    nutritionBlog: {
      title: "\u0411\u043B\u043E\u0433: \u041D\u0430\u0443\u043A\u043E\u0432\u0456 \u0434\u043E\u0441\u043B\u0456\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0444\u0456\u0442\u043D\u0435\u0441, \u0431\u0456\u043E\u0445\u0430\u043A\u0456\u043D\u0433",
      description: "\u0420\u0456\u0437\u043D\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0446\u044C\u043E\u0433\u043E \u043F\u0440\u043E\u0454\u043A\u0442\u0443 \u0431\u0443\u043B\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0456 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0440\u0456\u0437\u043D\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 Wordpress, Next.js, Firebase, Javascript, REST API. \u042F\u043A \u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043D\u0438\u0436\u0447\u0435 \u044F \u043D\u0430\u0434\u0430\u0432 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043A\u043E\u0434 \u043D\u0430 github \u0434\u043B\u044F \u043E\u0434\u043D\u0456\u0454\u0457 \u0437 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A, \u044F\u043A\u0430 \u0431\u0443\u043B\u0430 \u043F\u043E\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0430 \u0437 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C Next.js, Rest API \u0456 \u043F\u043E\u0442\u0456\u043C \u0440\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0430 \u043D\u0430 Firebase.",
      link: "\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438 \u0411\u043B\u043E\u0433",
      link_github: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043A\u043E\u0434 \u043D\u0430 Github",
      image: "../SerhiiShevchenko_com_home_ua.webp",
      img_alt: "\u041F\u0440\u0435\u0432'\u044E \u0431\u043B\u043E\u0433\u0430 \u0437 \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u043C\u0438 \u0434\u043E\u0441\u043B\u0456\u0434\u0436\u0435\u043D\u043D\u044F\u043C\u0438 \u043F\u0440\u043E \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0444\u0456\u0442\u043D\u0435\u0441, \u0431\u0456\u043E\u0445\u0430\u043A\u0456\u043D\u0433 \u0421\u0435\u0440\u0433\u0456\u044F \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430",
      tags: [
        "#javascript",
        "#wordpress",
        "#firebase",
        "#restapi",
        "#nextjs"
      ]
    }
  },
  testimonials: {
    title: "\u0429\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u0456\u043D\u0448\u0456",
    subtitle: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438.",
    inCompany: "\u0432",
    feedbacks: {
      client1: {
        name: "\u0413\u0430\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u043B\u044C\u0447\u0435\u043D\u043A\u043E",
        designation: "CEO",
        company: "Acme Co",
        feedback: "\u042F \u0434\u0443\u043C\u0430\u043B\u0430, \u0449\u043E \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u044F\u043A\u0438\u0439 \u0431\u0443\u0432 \u0431\u0438 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u0438\u043C, \u044F\u043A \u043D\u0430\u0448 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0430\u043B\u0435 \u0421\u0435\u0440\u0433\u0456\u0439 \u0434\u043E\u0432\u0456\u0432 \u043C\u0435\u043D\u0456 \u043F\u0440\u043E\u0442\u0438\u043B\u0435\u0436\u043D\u0435."
      },
      client2: {
        name: "\u041A\u0440\u0456\u0441 \u0411\u0440\u0430\u0443\u043D",
        designation: "COO",
        company: "DEF Corp",
        feedback: "\u042F \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0432 \u0432\u0435\u0431-\u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430, \u044F\u043A\u0438\u0439 \u0431\u0438 \u0442\u0430\u043A \u0434\u0431\u0430\u0432 \u043F\u0440\u043E \u0443\u0441\u043F\u0456\u0445 \u0441\u0432\u043E\u0457\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u044F\u043A \u0421\u0435\u0440\u0433\u0456\u0439."
      },
      client3: {
        name: "\u0421\u0430\u0440\u0430 \u041B\u0456",
        designation: "CMO",
        company: "XYZ Inc",
        feedback: "\u041F\u0456\u0441\u043B\u044F \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0430\u0446\u0456\u0457 \u043D\u0430\u0448\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443 \u0421\u0435\u0440\u0433\u0456\u0454\u043C, \u043D\u0430\u0448 \u0442\u0440\u0430\u0444\u0456\u043A \u0437\u0440\u0456\u0441 \u043D\u0430 50%. \u041C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u0439\u043E\u043C\u0443 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043F\u043E\u0434\u044F\u043A\u0443\u0432\u0430\u0442\u0438!"
      }
    }
  },
  contactForm: {
    title: "\u0417\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437\u0456 \u043C\u043D\u043E\u044E",
    subtitle: "",
    fields: {
      name: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F",
      name_placeholder: "\u042F\u043A \u0432\u0430\u0441 \u0437\u0432\u0430\u0442\u0438?",
      email: "\u0412\u0430\u0448 Email",
      email_placeholder: "yourname@example.com",
      message: "\u0412\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F",
      message_placeholder: "\u0427\u0438\u043C \u044F \u043C\u043E\u0436\u0443 \u0432\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438?"
    },
    alert: {
      success: "\u0414\u044F\u043A\u0443\u044E. \u042F \u0437\u0432'\u044F\u0436\u0443\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C.",
      error: "\u041E\u0439! \u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437."
    },
    validation: {
      name: "\u0406\u043C'\u044F \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F",
      email: {
        required: "Email \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0438\u0439 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F",
        invalid: "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438"
      },
      message: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"
    },
    sendBtn: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438",
    sending: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430..."
  },
  meta: {
    title: "3D \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0441\u0430\u0439\u0442 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 | \u0421\u0435\u0440\u0433\u0456\u0439 \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E",
    description: "3D \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0441\u0430\u0439\u0442 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 \u0421\u0435\u0440\u0433\u0456\u044F \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430 \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0438\u0439 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E react, vite, three.js, tailwind CSS, javascript.",
    keywords: "\u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A, 3d \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430, 3d \u0441\u0430\u0439\u0442 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430, \u0441\u0430\u0439\u0442 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0430 \u043F\u0440\u0438\u043A\u043B\u0430\u0434, 3d \u0441\u0430\u0439\u0442 \u043F\u0440\u0438\u043A\u043B\u0430\u0434, react \u0441\u0430\u0439\u0442, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0456\u0441\u0442, full-stack \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0456\u0441\u0442, \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A",
    author: "\u0421\u0435\u0440\u0433\u0456\u0439 \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E",
    url: "https://dev.serhiishevchenko.com/uk",
    OgLocale: "uk_UA",
    Img: "/SerhiiShevchenko_portfolio_hero_1_ua.png",
    TwCard: "summary_large_image",
    privacy: {
      title: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456",
      description: "\u0426\u044F \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043F\u043E\u044F\u0441\u043D\u044E\u0454, \u044F\u043A \u043C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0442\u0430 \u0437\u0430\u0445\u0438\u0449\u0430\u0454\u043C\u043E \u0432\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E."
    },
    tos: {
      title: "\u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443",
      description: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u043D\u0430\u0448 \u0441\u0430\u0439\u0442 \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0443\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443."
    }
  },
  notFound: {
    title: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430",
    description: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435, \u043D\u0435 \u0456\u0441\u043D\u0443\u0454. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u0430\u0431\u043E \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438.",
    homeLink: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443",
    pageTitle: "\u041E\u0439! \u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u0430\u0431\u043E \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438."
  }
};

// app/localization/resource.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/localization/resource.ts"
  );
  import.meta.hot.lastModified = "1758669497344.892";
}
var languages = ["en", "uk"];
var supportedLanguages = [...languages];
var resources = {
  en: {
    common: common_default
  },
  uk: {
    common: common_default2
  }
};

// app/localization/i18n.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/localization/i18n.ts"
  );
  import.meta.hot.lastModified = "1724778525000";
}
var i18n_default = {
  // This is the list of languages your application supports
  supportedLngs: supportedLanguages,
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "en",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common",
  // Disabling suspense is recommended
  react: { useSuspense: false }
};

// node_modules/i18next/dist/esm/i18next.js
var isString = (obj) => typeof obj === "string";
var defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
var makeString = (object) => {
  if (object == null)
    return "";
  return "" + object;
};
var copy = (a, s, t2) => {
  a.forEach((m) => {
    if (s[m])
      t2[m] = s[m];
  });
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString(object);
var getLastOfPath = (object, path2, Empty) => {
  const stack = !isString(path2) ? path2 : path2.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object))
      return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object))
    return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
var setPath = (object, path2, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  if (obj !== void 0 || path2.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path2[path2.length - 1];
  let p = path2.slice(0, path2.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path2, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
var getPath = (object, path2) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path2);
  if (!obj)
    return void 0;
  if (!Object.prototype.hasOwnProperty.call(obj, k))
    return void 0;
  return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
var escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
var RegExpCache = class {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
};
var chars = [" ", ",", "?", "!", ";"];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0)
    return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
var deepFind = (obj, path2, keySeparator = ".") => {
  if (!obj)
    return void 0;
  if (obj[path2]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path2))
      return void 0;
    return obj[path2];
  }
  const tokens = path2.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
var getCleanedCode = (code) => code?.replace("_", "-");
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    console?.[type]?.apply?.(console, args);
  }
};
var Logger = class {
  constructor(concreteLogger, options = {}) {
    this.init(concreteLogger, options);
  }
  init(concreteLogger, options = {}) {
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log(...args) {
    return this.forward(args, "log", "", true);
  }
  warn(...args) {
    return this.forward(args, "warn", "", true);
  }
  error(...args) {
    return this.forward(args, "error", "");
  }
  deprecate(...args) {
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (isString(args[0]))
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event])
        this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event, ...args) {
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach(([observer, numTimesAdded]) => {
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
};
var ResourceStore = class extends EventEmitter {
  constructor(data, options = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key, options = {}) {
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path2;
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
    } else {
      path2 = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path2.push(...key);
        } else if (isString(key) && keySeparator) {
          path2.push(...key.split(keySeparator));
        } else {
          path2.push(key);
        }
      }
    }
    const result = getPath(this.data, path2);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path2[0];
      ns = path2[1];
      key = path2.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key))
      return result;
    return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value, options = {
    silent: false
  }) {
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path2 = [lng, ns];
    if (key)
      path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      value = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path2, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources2, options = {
    silent: false
  }) {
    for (const m in resources2) {
      if (isString(resources2[m]) || Array.isArray(resources2[m]))
        this.addResource(lng, ns, m, resources2[m], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources2);
  }
  addResourceBundle(lng, ns, resources2, deep, overwrite, options = {
    silent: false,
    skipCopy: false
  }) {
    let path2 = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      deep = resources2;
      resources2 = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path2) || {};
    if (!options.skipCopy)
      resources2 = JSON.parse(JSON.stringify(resources2));
    if (deep) {
      deepExtend(pack, resources2, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources2
      };
    }
    setPath(this.data, path2, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources2);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      value = this.processors[processor]?.process(value, key, options, translator) ?? value;
    });
    return value;
  }
};
var PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy() {
  const state = [];
  const handler = /* @__PURE__ */ Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY)
      return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  const {
    [PATH_KEY]: path2
  } = selector(createProxy());
  return path2.join(opts?.keySeparator ?? ".");
}
var checkedLoadedFor = {};
var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class extends EventEmitter {
  constructor(services, options = {}) {
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key, o = {
    interpolation: {}
  }) {
    const opt = {
      ...o
    };
    if (key == null)
      return false;
    const resolved = this.resolve(key, opt);
    return resolved?.res !== void 0;
  }
  extractFromKey(key, opt) {
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    let namespaces = opt.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, o, lastKey) {
    let opt = typeof o === "object" ? {
      ...o
    } : o;
    if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
      opt = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof opt === "object")
      opt = {
        ...opt
      };
    if (!opt)
      opt = {};
    if (keys == null)
      return "";
    if (typeof keys === "function")
      keys = keysFromSelector(keys, {
        ...this.options,
        ...opt
      });
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
    const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], opt);
    const namespace = namespaces[namespaces.length - 1];
    let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const lng = opt.lng || this.language;
    const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng?.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(opt)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(opt)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, opt);
    let res = resolved?.res;
    const resUsedKey = resolved?.usedKey || key;
    const resExactUsedKey = resolved?.exactUsedKey || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
    const hasDefaultValue = Translator.hasDefaultValue(opt);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
    const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
    const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!opt.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...opt,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            if (hasDefaultValue && !res) {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy2[m] = this.translate(deepKey, {
                ...opt,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy2[m] === deepKey)
              copy2[m] = resForObjHndl[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, opt, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...opt,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
        } else {
          lngs.push(opt.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
          } else if (this.backendConnector?.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, opt);
              if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, opt, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
        res = `${namespace}${nsSeparator}${key}`;
      }
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(opt);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, opt, resolved, lastKey) {
    if (this.i18nFormat?.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...opt
      }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!opt.skipInterpolation) {
      if (opt.interpolation)
        this.interpolator.init({
          ...opt,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...opt.interpolation
            }
          }
        });
      const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
      if (this.options.interpolation.defaultVariables)
        data = {
          ...this.options.interpolation.defaultVariables,
          ...data
        };
      res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          opt.nest = false;
      }
      if (!opt.lng && resolved && resolved.res)
        opt.lng = this.language || resolved.usedLng;
      if (opt.nest !== false)
        res = this.interpolator.nest(res, (...args) => {
          if (lastKey?.[0] === args[0] && !opt.context) {
            this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return this.translate(...args, key);
        }, opt);
      if (opt.interpolation)
        this.interpolator.reset();
    }
    const postProcess = opt.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(opt)
        },
        ...opt
      } : opt, this);
    }
    return res;
  }
  resolve(keys, opt = {}) {
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys))
      keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k, opt);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
      const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
      const needsContextHandling = opt.context !== void 0 && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
      const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat?.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              finalKeys.push(key + pluralSuffix);
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                finalKeys.push(contextKey + pluralSuffix);
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, opt);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key, options = {}) {
    if (this.i18nFormat?.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails(options = {}) {
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
};
var LanguageUtil = class {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p = code.split("-");
    if (p.length === 2)
      return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf("-") > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e) {
      }
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode)
        return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngScOnly = this.getScriptPartFromCode(code);
        if (this.isSupportedCode(lngScOnly))
          return found = lngScOnly;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (isString(fallbacks))
      fallbacks = [fallbacks];
    if (Array.isArray(fallbacks))
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c)
        return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
};
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
var dummyRule = {
  select: (count) => count === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
var PluralResolver = class {
  constructor(languageUtils, options = {}) {
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code, options = {}) {
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/))
        return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule)
      rule = this.getRule("dev", options);
    return rule?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(code, key, options = {}) {
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code, options = {}) {
    let rule = this.getRule(code, options);
    if (!rule)
      rule = this.getRule("dev", options);
    if (!rule)
      return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
  }
  getSuffix(code, count, options = {}) {
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix("dev", count, options);
  }
};
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
  let path2 = getPathWithDefaults(data, defaultData, key);
  if (!path2 && ignoreJSONStructure && isString(key)) {
    path2 = deepFind(data, key, keySeparator);
    if (path2 === void 0)
      path2 = deepFind(defaultData, key, keySeparator);
  }
  return path2;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
  constructor(options = {}) {
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options?.interpolation?.format || ((value) => value);
    this.init(options);
  }
  init(options = {}) {
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp?.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path2 = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path2, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path2;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc, options = {}) {
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0)
        return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1)
        delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
      if (keyEndIndex !== -1) {
        formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
        match[1] = match[1].slice(0, keyEndIndex);
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value))
        return value;
      if (!isString(value))
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (formatters.length) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
var parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey])
            formatOptions[trimmedKey] = val;
          if (val === "false")
            formatOptions[trimmedKey] = false;
          if (val === "true")
            formatOptions[trimmedKey] = true;
          if (!isNaN(val))
            formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
var createCachedFormatter = (fn) => {
  const cache = {};
  return (v, l, o) => {
    let optForCache = o;
    if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [o.interpolationkey]: void 0
      };
    }
    const key = l + JSON.stringify(optForCache);
    let frm = cache[key];
    if (!frm) {
      frm = fn(getCleanedCode(l), o);
      cache[key] = frm;
    }
    return frm(v);
  };
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
var Formatter = class {
  constructor(options = {}) {
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.init(options);
  }
  init(services, options = {
    interpolation: {}
  }) {
    this.formatSeparator = options.interpolation.formatSeparator || ",";
    const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
    this.formats = {
      number: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: cf((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: cf((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: cf((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: cf((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng, options = {}) {
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options?.formatParams?.[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
};
var removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
var Connector = class extends EventEmitter {
  constructor(backend, store, services, options = {}) {
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    this.backend?.init?.(services, options.backend, options);
  }
  queueLoad(languages2, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages2.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0)
            pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0)
            pending[name] = true;
          if (toLoad[name] === void 0)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data)
      this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err)
        q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l])
            loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0)
                loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages2, namespaces, options = {}, callback) {
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages2))
      languages2 = this.languageUtils.toResolveHierarchy(languages2);
    if (isString(namespaces))
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages2, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages2, namespaces, callback) {
    this.prepareLoading(languages2, namespaces, {}, callback);
  }
  reload(languages2, namespaces, callback) {
    this.prepareLoading(languages2, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name, prefix = "") {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages2, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "")
      return;
    if (this.backend?.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages2, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages2, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages2, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages2 || !languages2[0])
      return;
    this.store.addResource(languages2[0], namespace, key, fallbackValue);
  }
};
var get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object")
      ret = args[1];
    if (isString(args[1]))
      ret.defaultValue = args[1];
    if (isString(args[2]))
      ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  },
  cacheInBuiltFormats: true
});
var transformOptions = (options) => {
  if (isString(options.ns))
    options.ns = [options.ns];
  if (isString(options.fallbackLng))
    options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS))
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs?.indexOf?.("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  if (typeof options.initImmediate === "boolean")
    options.initAsync = options.initImmediate;
  return options;
};
var noop = () => {
};
var bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
var I18n = class extends EventEmitter {
  constructor(options = {}, callback) {
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init(options = {}, callback) {
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
      if (usingLegacyFormatFunction) {
        this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
      }
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        if (s.formatter.init)
          s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init)
          s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init)
          s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", (event, ...args) => {
        this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init)
          m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = (...args) => this.store[fcName](...args);
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = (...args) => {
        this.store[fcName](...args);
        return this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language, callback = noop) {
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function")
      usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        if (lng === "cimode")
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode")
            return;
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      this.options.preload?.forEach?.((l) => append(l));
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l) > -1)
      return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
    if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
      this.resolvedLanguage = l;
      this.languages.unshift(l);
    }
  }
  changeLanguage(lng, callback) {
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        if (this.isLanguageChangingTo === lng) {
          setLngProps(l);
          this.translator.changeLanguage(l);
          this.isLanguageChangingTo = void 0;
          this.emit("languageChanged", l);
          this.logger.log("languageChanged", l);
        }
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve((...args) => this.t(...args));
      if (callback)
        callback(err, (...args) => this.t(...args));
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const fl = isString(lngs) ? lngs : lngs && lngs[0];
      const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l);
        this.services.languageDetector?.cacheUserLanguage?.(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    const fixedT = (key, opts, ...rest) => {
      let o;
      if (typeof opts !== "object") {
        o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        o = {
          ...opts
        };
      }
      o.lng = o.lng || fixedT.lng;
      o.lngs = o.lngs || fixedT.lngs;
      o.ns = o.ns || fixedT.ns;
      if (o.keyPrefix !== "")
        o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = this.options.keySeparator || ".";
      let resultKey;
      if (o.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => {
          if (typeof k === "function")
            k = keysFromSelector(k, {
              ...this.options,
              ...opts
            });
          return `${o.keyPrefix}${keySeparator}${k}`;
        });
      } else {
        if (typeof key === "function")
          key = keysFromSelector(key, {
            ...this.options,
            ...opts
          });
        resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
      }
      return this.t(resultKey, o);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t(...args) {
    return this.translator?.translate(...args);
  }
  exists(...args) {
    return this.translator?.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns, options = {}) {
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (isString(ns))
      ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0)
        this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs))
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    try {
      const l = new Intl.Locale(lng);
      if (l && l.getTextInfo) {
        const ti = l.getTextInfo();
        if (ti && ti.direction)
          return ti.direction;
      }
    } catch (e) {
    }
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
    if (lng.toLowerCase().indexOf("-latn") > 1)
      return "ltr";
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(options = {}, callback) {
    return new I18n(options, callback);
  }
  cloneInstance(options = {}, callback = noop) {
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
        prev[l] = {
          ...this.store.data[l]
        };
        prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
          acc[n] = {
            ...prev[l][n]
          };
          return acc;
        }, prev[l]);
        return prev;
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", (event, ...args) => {
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
var {
  slice,
  forEach
} = [];
function defaults(obj) {
  forEach.call(slice.call(arguments, 1), (source) => {
    if (source) {
      for (const prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXSS(input) {
  if (typeof input !== "string")
    return false;
  const xssPatterns = [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i];
  return xssPatterns.some((pattern) => pattern.test(input));
}
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function(name, val) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  };
  const opt = options;
  const value = encodeURIComponent(val);
  let str = `${name}=${value}`;
  if (opt.maxAge > 0) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge))
      throw new Error("maxAge should be a Number");
    str += `; Max-Age=${Math.floor(maxAge)}`;
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly)
    str += "; HttpOnly";
  if (opt.secure)
    str += "; Secure";
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  if (opt.partitioned)
    str += "; Partitioned";
  return str;
};
var cookie = {
  create(name, value, minutes, domain) {
    let cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = /* @__PURE__ */ new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain)
      cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, value, cookieOptions);
  },
  read(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ")
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove(name, domain) {
    this.create(name, "", -1, domain);
  }
};
var cookie$1 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(_ref) {
    let {
      lookupCookie
    } = _ref;
    if (lookupCookie && typeof document !== "undefined") {
      return cookie.read(lookupCookie) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupCookie,
      cookieMinutes,
      cookieDomain,
      cookieOptions
    } = _ref2;
    if (lookupCookie && typeof document !== "undefined") {
      cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(_ref) {
    let {
      lookupQuerystring
    } = _ref;
    let found;
    if (typeof window !== "undefined") {
      let {
        search
      } = window.location;
      if (!window.location.search && window.location.hash?.indexOf("?") > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      const query = search.substring(1);
      const params = query.split("&");
      for (let i = 0; i < params.length; i++) {
        const pos = params[i].indexOf("=");
        if (pos > 0) {
          const key = params[i].substring(0, pos);
          if (key === lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
var hash = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(_ref) {
    let {
      lookupHash,
      lookupFromHashIndex
    } = _ref;
    let found;
    if (typeof window !== "undefined") {
      const {
        hash: hash2
      } = window.location;
      if (hash2 && hash2.length > 2) {
        const query = hash2.substring(1);
        if (lookupHash) {
          const params = query.split("&");
          for (let i = 0; i < params.length; i++) {
            const pos = params[i].indexOf("=");
            if (pos > 0) {
              const key = params[i].substring(0, pos);
              if (key === lookupHash) {
                found = params[i].substring(pos + 1);
              }
            }
          }
        }
        if (found)
          return found;
        if (!found && lookupFromHashIndex > -1) {
          const language = hash2.match(/\/([a-zA-Z-]*)/g);
          if (!Array.isArray(language))
            return void 0;
          const index = typeof lookupFromHashIndex === "number" ? lookupFromHashIndex : 0;
          return language[index]?.replace("/", "");
        }
      }
    }
    return found;
  }
};
var hasLocalStorageSupport = null;
var localStorageAvailable = () => {
  if (hasLocalStorageSupport !== null)
    return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = typeof window !== "undefined" && window.localStorage !== null;
    if (!hasLocalStorageSupport) {
      return false;
    }
    const testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(_ref) {
    let {
      lookupLocalStorage
    } = _ref;
    if (lookupLocalStorage && localStorageAvailable()) {
      return window.localStorage.getItem(lookupLocalStorage) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupLocalStorage
    } = _ref2;
    if (lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(lookupLocalStorage, lng);
    }
  }
};
var hasSessionStorageSupport = null;
var sessionStorageAvailable = () => {
  if (hasSessionStorageSupport !== null)
    return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = typeof window !== "undefined" && window.sessionStorage !== null;
    if (!hasSessionStorageSupport) {
      return false;
    }
    const testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup(_ref) {
    let {
      lookupSessionStorage
    } = _ref;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      return window.sessionStorage.getItem(lookupSessionStorage) || void 0;
    }
    return void 0;
  },
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupSessionStorage
    } = _ref2;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup(options) {
    const found = [];
    if (typeof navigator !== "undefined") {
      const {
        languages: languages2,
        userLanguage,
        language
      } = navigator;
      if (languages2) {
        for (let i = 0; i < languages2.length; i++) {
          found.push(languages2[i]);
        }
      }
      if (userLanguage) {
        found.push(userLanguage);
      }
      if (language) {
        found.push(language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(_ref) {
    let {
      htmlTag: htmlTag2
    } = _ref;
    let found;
    const internalHtmlTag = htmlTag2 || (typeof document !== "undefined" ? document.documentElement : null);
    if (internalHtmlTag && typeof internalHtmlTag.getAttribute === "function") {
      found = internalHtmlTag.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(_ref) {
    let {
      lookupFromPathIndex
    } = _ref;
    if (typeof window === "undefined")
      return void 0;
    const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (!Array.isArray(language))
      return void 0;
    const index = typeof lookupFromPathIndex === "number" ? lookupFromPathIndex : 0;
    return language[index]?.replace("/", "");
  }
};
var subdomain = {
  name: "subdomain",
  lookup(_ref) {
    let {
      lookupFromSubdomainIndex
    } = _ref;
    const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === "number" ? lookupFromSubdomainIndex + 1 : 1;
    const language = typeof window !== "undefined" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (!language)
      return void 0;
    return language[internalLookupFromSubdomainIndex];
  }
};
var canCookies = false;
try {
  document.cookie;
  canCookies = true;
} catch (e) {
}
var order = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
if (!canCookies)
  order.splice(1, 1);
var getDefaults = () => ({
  order,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (l) => l
});
var Browser = class {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  init() {
    let services = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    };
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = services;
    this.options = defaults(options, this.options || {}, getDefaults());
    if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
      this.options.convertDetectedLanguage = (l) => l.replace("-", "_");
    }
    if (this.options.lookupFromUrlIndex)
      this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
    this.i18nOptions = i18nOptions;
    this.addDetector(cookie$1);
    this.addDetector(querystring);
    this.addDetector(localStorage);
    this.addDetector(sessionStorage);
    this.addDetector(navigator$1);
    this.addDetector(htmlTag);
    this.addDetector(path);
    this.addDetector(subdomain);
    this.addDetector(hash);
  }
  addDetector(detector) {
    this.detectors[detector.name] = detector;
    return this;
  }
  detect() {
    let detectionOrder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order;
    let detected = [];
    detectionOrder.forEach((detectorName) => {
      if (this.detectors[detectorName]) {
        let lookup = this.detectors[detectorName].lookup(this.options);
        if (lookup && typeof lookup === "string")
          lookup = [lookup];
        if (lookup)
          detected = detected.concat(lookup);
      }
    });
    detected = detected.filter((d) => d !== void 0 && d !== null && !hasXSS(d)).map((d) => this.options.convertDetectedLanguage(d));
    if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes)
      return detected;
    return detected.length > 0 ? detected[0] : null;
  }
  cacheUserLanguage(lng) {
    let caches = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    if (!caches)
      return;
    if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
      return;
    caches.forEach((cacheName) => {
      if (this.detectors[cacheName])
        this.detectors[cacheName].cacheUserLanguage(lng, this.options);
    });
  }
};
Browser.type = "languageDetector";

// node_modules/i18next-http-backend/esm/utils.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var arr = [];
var each = arr.forEach;
var slice2 = arr.slice;
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === "function" || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === "object";
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === "function";
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

// node_modules/i18next-http-backend/esm/request.js
function ownKeys(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t2) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey(t2) {
  var i = _toPrimitive(t2, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
function _toPrimitive(t2, r) {
  if ("object" != _typeof2(t2) || !t2)
    return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r || "default");
    if ("object" != _typeof2(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var fetchApi = typeof fetch === "function" ? fetch : void 0;
if (typeof globalThis !== "undefined" && globalThis.fetch) {
  fetchApi = globalThis.fetch;
} else if (typeof window !== "undefined" && window.fetch) {
  fetchApi = window.fetch;
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof globalThis !== "undefined" && globalThis.XMLHttpRequest) {
    XmlHttpRequestApi = globalThis.XMLHttpRequest;
  } else if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === "function") {
  if (typeof globalThis !== "undefined" && globalThis.ActiveXObject) {
    ActiveXObjectApi = globalThis.ActiveXObject;
  } else if (typeof window !== "undefined" && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (typeof fetchApi !== "function")
  fetchApi = void 0;
if (!fetchApi && !XmlHttpRequestApi && !ActiveXObjectApi) {
  try {
    import("/build/_shared/browser-ponyfill-2BFAOICL.js").then(function(mod) {
      fetchApi = mod.default;
    }).catch(function() {
    });
  } catch (e) {
  }
}
var addQueryString = function addQueryString2(url, params) {
  if (params && _typeof2(params) === "object") {
    var queryString = "";
    for (var paramName in params) {
      queryString += "&" + encodeURIComponent(paramName) + "=" + encodeURIComponent(params[paramName]);
    }
    if (!queryString)
      return url;
    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt2(url, fetchOptions, callback, altFetch) {
  var resolver = function resolver2(response) {
    if (!response.ok)
      return callback(response.statusText || "Error", {
        status: response.status
      });
    response.text().then(function(data) {
      callback(null, {
        status: response.status,
        data
      });
    }).catch(callback);
  };
  if (altFetch) {
    var altResponse = altFetch(url, fetchOptions);
    if (altResponse instanceof Promise) {
      altResponse.then(resolver).catch(callback);
      return;
    }
  }
  if (typeof fetch === "function") {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch2(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = _objectSpread({}, typeof options.customHeaders === "function" ? options.customHeaders() : options.customHeaders);
  if (typeof window === "undefined" && typeof globalThis !== "undefined" && typeof globalThis.process !== "undefined" && globalThis.process.versions && globalThis.process.versions.node) {
    headers["User-Agent"] = "i18next-http-backend (node/".concat(globalThis.process.version, "; ").concat(globalThis.process.platform, " ").concat(globalThis.process.arch, ")");
  }
  if (payload)
    headers["Content-Type"] = "application/json";
  var reqOptions = typeof options.requestOptions === "function" ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = _objectSpread({
    method: payload ? "POST" : "GET",
    body: payload ? options.stringify(payload) : void 0,
    headers
  }, omitFetchOptions ? {} : reqOptions);
  var altFetch = typeof options.alternateFetch === "function" && options.alternateFetch.length >= 1 ? options.alternateFetch : void 0;
  try {
    fetchIt(url, fetchOptions, callback, altFetch);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function(opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback, altFetch);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest2(options, url, payload, callback) {
  if (payload && _typeof2(payload) === "object") {
    payload = addQueryString("", payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x = XmlHttpRequestApi ? new XmlHttpRequestApi() : new ActiveXObjectApi("MSXML2.XMLHTTP.3.0");
    x.open(payload ? "POST" : "GET", url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    h = typeof h === "function" ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function() {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request2(options, url, payload, callback) {
  if (typeof payload === "function") {
    callback = payload;
    payload = void 0;
  }
  callback = callback || function() {
  };
  if (fetchApi && url.indexOf("file:") !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === "function") {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error("No fetch and no xhr implementation found!"));
};
var request_default = request;

// node_modules/i18next-http-backend/esm/index.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function ownKeys2(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t2), true).forEach(function(r2) {
      _defineProperty2(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys2(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    var o = r[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass(e, r, t2) {
  return r && _defineProperties(e.prototype, r), t2 && _defineProperties(e, t2), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _defineProperty2(e, r, t2) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey2(t2) {
  var i = _toPrimitive2(t2, "string");
  return "symbol" == _typeof3(i) ? i : i + "";
}
function _toPrimitive2(t2, r) {
  if ("object" != _typeof3(t2) || !t2)
    return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r || "default");
    if ("object" != _typeof3(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var getDefaults2 = function getDefaults3() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty2({}, key, fallbackValue || "");
    },
    parseLoadPayload: function parseLoadPayload(languages2, namespaces) {
      return void 0;
    },
    request: request_default,
    reloadInterval: typeof window !== "undefined" ? false : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
};
var Backend = function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Backend2);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = "backend";
    this.init(services, options, allOptions);
  }
  return _createClass(Backend2, [{
    key: "init",
    value: function init2(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = _objectSpread2(_objectSpread2(_objectSpread2({}, getDefaults2()), this.options || {}), options);
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        var timer = setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
        if (_typeof3(timer) === "object" && typeof timer.unref === "function")
          timer.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages2, namespaces, callback) {
      this._readAny(languages2, languages2, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages2, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === "function") {
        loadPath = this.options.loadPath(languages2, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function(resolvedLoadPath) {
        if (!resolvedLoadPath)
          return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages2.join("+"),
          ns: namespaces.join("+")
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages2, namespaces) {
      var _this3 = this;
      var lng = typeof languages2 === "string" ? [languages2] : languages2;
      var ns = typeof namespaces === "string" ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function(err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status))
          return callback("failed loading " + url + "; status code: " + res.status, true);
        if (res && res.status >= 400 && res.status < 500)
          return callback("failed loading " + url + "; status code: " + res.status, false);
        if (!res && err && err.message) {
          var errorMessage = err.message.toLowerCase();
          var isNetworkError = ["failed", "fetch", "network", "load"].find(function(term) {
            return errorMessage.indexOf(term) > -1;
          });
          if (isNetworkError) {
            return callback("failed loading " + url + ": " + err.message, true);
          }
        }
        if (err)
          return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === "string") {
            ret = _this3.options.parse(res.data, languages2, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = "failed parsing " + url + " to json";
        }
        if (parseErr)
          return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages2, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath)
        return;
      if (typeof languages2 === "string")
        languages2 = [languages2];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages2.forEach(function(lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === "function") {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function(data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages2.length) {
            if (typeof callback === "function")
              callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode")
        return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload)
        this.allOptions.preload.forEach(function(l) {
          return append(l);
        });
      toLoad.forEach(function(lng) {
        _this5.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err)
              logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
}();
Backend.type = "backend";
var esm_default = Backend;

// node_modules/remix-i18next/build/client.js
function getInitialNamespaces() {
  let namespaces = Object.values(window.__remixRouteModules).flatMap((route) => {
    if (typeof route?.handle !== "object")
      return [];
    if (!route.handle)
      return [];
    if (!("i18n" in route.handle))
      return [];
    if (typeof route.handle.i18n === "string")
      return [route.handle.i18n];
    if (Array.isArray(route.handle.i18n) && route.handle.i18n.every((value) => typeof value === "string")) {
      return route.handle.i18n;
    }
    return [];
  });
  return [...namespaces];
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1759186390583.1758";
}
async function hydrate() {
  await instance.use(initReactI18next).use(Browser).use(esm_default).init({
    ...i18n_default,
    // spread the configuration
    // This function detects the namespaces your routes rendered while SSR use
    ns: getInitialNamespaces(),
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    resources,
    detection: {
      // Here only enable htmlTag detection, we'll detect the language only
      // server-side with remix-i18next, by using the `<html lang>` attribute
      // we can communicate to the client the language detected server-side
      order: ["htmlTag"],
      // Because we only use htmlTag, there's no reason to cache the language
      // on the browser, so we disable it
      caches: []
    }
  });
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this)
    );
  });
}
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-PPMEBKBF.js.map
