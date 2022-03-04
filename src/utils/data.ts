import { Data } from "../types/Data";

export const data: Data = {
  name: "#name",
  surname: "#surname",
  phoneNumber: "+99470 506 93 24",
  description: "#description",
  email: "veysaliyev00@gmail.com",
  image: "https://github.com/MDReal32/MDReal32/raw/master/assets/me.jpg",
  from: { city: "#city.baku", country: "#country.azerbaijan" },
  birthday: { day: 3, month: 8, year: 2000 },
  skills: {
    General: [
      { name: "JavaScript", color: "#11CF1C", group: "Programming Language" },
      { name: "TypeScript", description: "#ts-description", percentage: 72, color: "#11CF1C" },
      { name: "Python", color: "#11CF1C", group: "Programming Language" }
    ],
    Frontend: [
      { name: "ReactJS", color: "#E22F1C", group: "Frontend Framework" },
      { name: "VueJS", color: "#E5CF1C", group: "Frontend Framework" },
      { name: "Redux", color: "#E22F1C", group: "Framework State Managements" },
      { name: "Recoil", color: "#E22F1C", group: "Framework State Managements" },
      { name: "Vuex", color: "#E5CF1C", group: "Framework State Managements" },
      { name: "Pinia", color: "#E5CF1C", group: "Framework State Managements" },
      { name: "CSS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "SCSS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "SASS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "Bootstrap", color: "#E5CF1C", group: "Frontend CSS Frameworks" },
      { name: "Materialize CSS", color: "#E5CF1C", group: "Frontend CSS Frameworks" }
    ],
    Backend: [
      { name: "NodeJS", description: "#node", percentage: 60, color: "#E5CF1C" },
      { name: "RxJS", description: "#rxjs", percentage: 70, color: "#E5CF1C" },
      /* Rest API Frameworks */
      /* Rest API Frameworks */
      { name: "ExpressJs", color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "NestJS", color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "Django", color: "#E5CF1C", group: "Rest API Frameworks" },
      /* /Rest API Frameworks */
      /* SSR Frameworks */
      { name: "NextJS", color: "#E5CF1C", group: "SSR Frameworks" },
      { name: "NuxtJS", color: "#E5CF1C", group: "SSR Frameworks" },
      /* /SSR Frameworks */
      /* Orm */
      { name: "TypeORM", color: "#E5CF1C", group: "ORM" },
      { name: "SequelizeJS", color: "#E5CF1C", group: "ORM" }
      /* /Orm */
    ],
    Computer: [
      /* /IDE */
      { name: "VSCode", color: "#E5CF1C", group: "IDE" },
      { name: "Webstorm", color: "#E5CF1C", group: "IDE" },
      { name: "PyCharm", color: "#E5CF1C", group: "IDE" },
      { name: "Idea", color: "#E5CF1C", group: "IDE" },
      { name: "DataGrip", color: "#E5CF1C", group: "IDE" },
      { name: "Rider", color: "#E5CF1C", group: "IDE" },
      /* /IDEs */
      /* DevOps */
      { name: "Docker", color: "#E5CF1C", group: "DevOps" },
      { name: "Jenkins", color: "#E5CF1C", group: "DevOps" },
      { name: "Ansible", color: "#E5CF1C", group: "DevOps" },
      /* /DevOps */
      /* OS */
      { name: "Windows", color: "#E5CF1C", group: "OS" },
      { name: "Linux", color: "#E5CF1C", group: "OS" },
      /* /OS */
      { name: "Postman", percentage: 70, color: "#E5CF1C" },
      { name: "Figma", percentage: 70, color: "#E5CF1C" }
    ],
    Soft: [
      /* Agile */
      { name: "JIRA", color: "#E5CF1C", group: "Agile" },
      { name: "Trello", color: "#E5CF1C", group: "Agile" },
      /* /Agile */
      /* Communication */
      { name: "Slack", color: "#E5CF1C", group: "Communication" },
      { name: "Zoom", color: "#E5CF1C", group: "Communication" },
      { name: "Teams", color: "#E5CF1C", group: "Communication" },
      /* /Communication */
      /* Git */
      { name: "Github", color: "#E5CF1C", group: "Git" },
      { name: "Gitlab", color: "#E5CF1C", group: "Git" },
      { name: "Bitbucket", color: "#E5CF1C", group: "Git" }
      /* /Git */
    ]
  },
  skillTypes: {
    Frontend: true,
    Backend: true
  },
  education: [
    {
      name: "#education.bachelor",
      location: { name: "#education.center", country: "#country.azerbaijan", city: "#city.baku" },
      from: 2017,
      to: 2021
    },
    {
      name: "#education.master",
      location: { name: "#education.center", country: "#country.azerbaijan", city: "#city.baku" },
      from: 2021
    }
  ],
  languages: [
    { name: "Azərbaycan dili", percent: 100 },
    { name: "Русский", percent: 70 },
    { name: "English", percent: 60 },
    { name: "Türk dili", percent: 40 }
  ],
  socialLinks: [
    {
      name: "Github",
      icon: "https://icongr.am/devicon/github-original.svg?size=25&color=aabbcc",
      url: "https://github.com/MDReal32"
    },
    {
      name: "LinkedIn",
      icon: "https://icongr.am/devicon/linkedin-plain.svg?size=25&color=aabbcc",
      url: "https://www.linkedin.com/in/veysaliyev/"
    }
  ],
  job: [
    {
      name: "Crinfotask LLC",
      role: "Software Developer",
      description: "#work.crinfotask.description",
      from: { year: 2020, month: 9 },
      to: { year: 2021, month: 10 },
      location: { city: "#city.baku", country: "#country.azerbaijan" }
    },
    {
      name: "MVP Engine",
      role: "Fullstack Javascript Developer",
      description: "#work.mvp.description",
      from: { year: 2021, month: 10 },
      to: { year: 2021, month: 12 },
      location: { city: "#city.kharkiv", country: "#country.ukraine" }
    }
  ],
  groups: {
    "Programming Language": "#pr-description",
    "Frontend Framework": "#frontend-framework",
    "Framework State Managements": "#frontend-framework-state-managements",
    "Frontend CSS": "#frontend-css",
    "Frontend CSS Frameworks": "#frontend-css-frameworks",
    "Rest API Frameworks": "#rest-frameworks-description",
    "SSR Frameworks": "#ssr-frameworks-description",
    "ORM": "#orm-description",
    "IDE": "#ide",
    "DevOps": "#devops",
    "OS": "#os",
    "Agile": "#agile",
    "Communication": "#communication",
    "Git": "#git"
  },
  i18n: {
    // Info
    "name": { az: "Veyis", ru: "Вейс", en: "Veyis" },
    "surname": { az: "Əliyev", ru: "Алиев", en: "Aliyev" },
    "description": { az: "Proqram Tərtibatçı", ru: "Разработчик программного обеспечения", en: "Software Developer" },

    // Locations
    "city.baku": { az: "Bakı", ru: "Баку", en: "Baku" },
    "country.azerbaijan": { az: "Azərbaycan", ru: "Азербайджан", en: "Azerbaijan" },
    "city.kharkiv": { az: "Xarkov", ru: "Харкив", en: "Kharkiv" },
    "country.ukraine": { az: "Ukrayna", ru: "Украина", en: "Ukraine" },

    // Months
    "january": { az: "Yanvar", ru: "Январь", en: "January" },
    "february": { az: "Fevral", ru: "Февраль", en: "February" },
    "march": { az: "Mart", ru: "Март", en: "March" },
    "april": { az: "Aprel", ru: "Апрель", en: "April" },
    "may": { az: "May", ru: "Май", en: "May" },
    "june": { az: "İyun", ru: "Июнь", en: "June" },
    "july": { az: "İyul", ru: "Июль", en: "July" },
    "august": { az: "Avqust", ru: "Август", en: "August" },
    "september": { az: "Sentyabr", ru: "Сентябрь", en: "September" },
    "october": { az: "Oktyabr", ru: "Октябрь", en: "October" },
    "november": { az: "Noyabr", ru: "Ноябрь", en: "November" },
    "december": { az: "Dekabr", ru: "Декабрь", en: "December" },

    // Skills
    "skills": { az: "Bacarıqlar", ru: "Навыки и умения", en: "Skills" },
    "pr-description": { az: "Proqramlaşdırma dili", ru: "Язык программирования", en: "A Programming Language" },
    "ts-description": { az: "Tipləşdirilmiş JavaScript", ru: "Типизированный JavaScript", en: "Typed JavaScript" },
    "node": {
      az: "JavaScript, lakin Backend üçün",
      ru: "JavaScript, но для бэкенда",
      en: "JavaScript but for Backend"
    },
    "rxjs": { az: "Reaktiv Kitabxana", ru: "Реактивная библиотека", en: "A Reactive Library" },
    "frontend-framework-state-managements": {
      az: "State İdarəetmə Kitabxanaları",
      ru: "Библиотеки управлением стейта",
      en: "State Management Libraries"
    },
    "frontend-css": { az: "CSS / Preprosessorlar", ru: "CSS / Препроцессоры", en: "CSS / Preprocessors" },
    "frontend-css-frameworks": {
      az: "Frontend Css Framework",
      ru: "Css-фреймворки для внешнего интерфейса",
      en: "Frontend Css Frameworks"
    },

    // Education
    "education.bachelor": { az: "Bakalavr dərəcəsi", ru: "Степень бакалавра", en: "Bachelor Degree" },
    "education.master": { az: "Magistr dərəcəsi", ru: "Степень магистра", en: "Master Degree" },
    "education.center": {
      az: "Azərbaycan Texniki Universiteti",
      ru: "Азербайджанский Технический Университет",
      en: "Azerbaijan Technical University"
    },
    "education.since": { az: "-dən indiyə kimi", ru: "С", en: "Since" },

    // Work
    "work.crinfotask.description": {
      az: "Bank və digər maliyyə institutları üçün Avtomatlaşdırılmış Qiymətləndirmə və Qərar Sistemi",
      ru: "Автоматизированная система оценки и принятия решений для банков и других финансовых учреждений",
      en: "Automated Scoring and Decision System for bank and other financial institutions"
    },
    "work.mvp.description": { az: "İzləmə Sistemi", ru: "Система слежения", en: "Tracking System" },
    "work.from": { az: "dan", ru: "от", en: "from" },
    "work.to": { az: "a qədər", ru: "к", en: "to" },

    // English Levels
    "native": { az: "doğma", ru: "родной", en: "native" },
    "advanced": { az: "üstün", ru: "передовой", en: "advanced" },
    "upper-intermediate": { az: "orta səviyyədən yuxarı", ru: "выше среднего", en: "upper intermediate" },
    "intermediate": { az: "orta səviyyə", ru: "средний", en: "intermediate" },
    "pre-intermediate": { az: "orta səviyyədən aşağı", ru: "ниже среднего", en: "pre intermediate" },
    "beginner": { az: "başlanğıc", ru: "новичок", en: "beginner" },

    // Groups
    "rest-frameworks-description": {
      az: "API qurmaq üçün Kitabxana/Framework",
      ru: "Библиотека/фреймворк для создания API",
      en: "A Library/Framework for building API"
    },
    "ssr-frameworks-description": {
      az: "SSR Tətbiqlərini qurmaq üçün Framework",
      ru: "Фреймворк для создания приложений SSR",
      en: "A Framework for building SSR Applications"
    },
    "orm-description": {
      az: "Verilənlər bazası/cədvəlləri manipulyasiya etmək üçün kitabxana",
      ru: "Библиотека для работы с базой данных/таблицами",
      en: "A Library for manipulate Database/Tables"
    },
    "frontend-framework": {
      az: "JavaScript Frontend Framework",
      ru: "Фреймворк внешнего интерфейса JavaScript",
      en: "A JavaScript Frontend Framework"
    },
    "ide": {
      az: "İnteqrasiya edilmiş İnkişaf Mühiti",
      ru: "Интегрированная среда разработки",
      en: "Integrated Development Environment"
    },
    "devops": {
      az: "Mədəni fəlsəfələrin, təcrübələrin və vasitələrin birləşməsi",
      ru: "Сочетание культурных философий, практик и инструментов",
      en: "Combination of cultural philosophies, practices, and tools"
    },
    "os": { az: "Əməliyyat sistemləri", ru: "Операционные системы", en: "Operating Systems" },
    "agile": {
      az: "Layihə İdarəetmə və Proqram İnkişafı Alətləri",
      ru: "Инструменты управления проектами и разработки программного обеспечения",
      en: "Project Management and Software Development Tools"
    },
    "communication": {
      az: "Həmkarlarla ünsiyyətdə istifadə üçün proqramlar",
      ru: "Приложения для использования в общении с коллегами",
      en: "Apps for usage in Communication with co-workers"
    },
    "git": { az: "Versiyaya Nəzarət Sistemi", ru: "Система контроля версий", en: "Version Control System" }
  }
};
