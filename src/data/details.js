export const projectDetails = {
  'AirHaven': {
    coverImage: '/images/AirHaven/AirHaven-Prototype.png',
    role: "I engineered the system's backend and predictive analytics pipeline, designing and training a Gradient Boosting Regression model to forecast air quality trends. I led backend development across the mobile and web platforms, building the data pipeline and inference layer in Python and integrating it with Firebase and Supabase for real-time storage and querying. I also handled data synchronization between these backend services and the React Native mobile app.",
    results: "Field deployment across 3 nodes collected 37,849 sensor readings over 13 days. PM₂.₅ measurements correlated at r = 0.852 (R² = 0.726) against the DENR-EMB government reference monitor, confirming the system's real-world viability. The Gradient Boosting forecasting model achieved R² = 0.92 for temperature and 0.81 for CO predictions. Usability testing with 385 public users and 2 institutional stakeholders (DENR-EMB, DEPS) returned 'Strongly Agree' ratings (4.2–4.7/5) across ease of use, information clarity, and trust in the system.",
    resultsImage: ['/images/AirHaven/Result_Temperature.png', '/images/AirHaven/Result_CO.png'],
    architecture: ['/images/AirHaven/System-Architecture.png'],
    screenshotsWeb: ['/images/AirHaven/Screenshot_web1.png', '/images/AirHaven/Screenshot_web2.png', '/images/AirHaven/Screenshot_web3.png'],
    screenshotsMobile: ['/images/AirHaven/Screenshot_app1.png', '/images/AirHaven/Screenshot_app2.png', '/images/AirHaven/Screenshot_app3.png'],
    team: [
      { name: 'Enzo Nicole Rosos', role: 'Project lead; mobile app development' },
      { name: 'Gerril John A. Bustos', role: 'Hardware engineering and firmware development' },
      { name: 'Michaella Steffan L. Callo', role: 'Admin dashboard (UI/UX and front-end)' },
      { name: 'Sean John Kobe B. Dee', role: 'Predictive analytics (ML) and backend development', isMe: true },
      { name: 'Lyca Geozel D. Gutierrez', role: 'Hardware prototyping, QA, and project finance' },
    ],
  },

  'Car Rental Website: Car&Go': {
    coverImage: '/images/CarGo/CarGo_cover.png',
    role: 'As one of two developers on the team, I worked jointly across the entire stack rather than owning a single layer — collaborating closely with my co-developer on both frontend (HTML, CSS, JavaScript) and backend (PHP, MySQL) work throughout the platform, including the booking, listing, and checkout flows. Because we paired on nearly every feature rather than dividing by layer, I gained hands-on experience with the full request-to-database lifecycle of a web app, from UI to data persistence.',
    results: "Our team authored and executed a validation plan of 30 documented test cases across sign-up, login, search, and booking flows, with zero failures recorded across all completed tests. 20 cases were fully executed and passed; the remaining 10 (primarily edge-case and navigation scenarios) were documented and scoped but not run before the submission deadline. The project was successfully completed and defended before an academic panel.",
    resultsImage: null,
    architectureLabel: 'System Flowchart',
    architecture: ['/images/CarGo/Overall.jpg', '/images/CarGo/Listing.jpg', '/images/CarGo/rent-payment.jpg'],
    screenshotsWeb: ['/images/CarGo/CarGo_signup.png', '/images/CarGo/CarGo_home.png', '/images/CarGo/CarGo_service.png', '/images/CarGo/CarGo_listing.png', '/images/CarGo/CarGo_checkout.png'],
    screenshotsMobile: null,
    team: [
      { name: 'Lord Welchie P. De Juan', role: 'System Analyst / Quality Assurance Tester' },
      { name: 'Sean John Kobe B. Dee', role: 'Developer', isMe: true },
      { name: 'Marcus Aaric C. Florida', role: 'Quality Assurance Tester / Technical Writer' },
      { name: 'Ricardo Nono', role: 'Developer' },
      { name: 'Joven Carl B. Palabay', role: 'Project Manager / Technical Writer' },
    ],
  },
}