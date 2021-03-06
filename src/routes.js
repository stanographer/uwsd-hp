import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/indexMain'));

// Conditions and procedures
const BotoxAndDysport = React.lazy(() => import('./pages/Home/Services/BotoxAndDysport'));
const Acne = React.lazy(() => import('./pages/Home/Services/Acne'));
const SkinCancerScreening = React.lazy(() => import('./pages/Home/Services/SkinCancerScreening'));
const MohsSurgery = React.lazy(() => import('./pages/Home/Services/MohsSurgery'));
const PageContactDetail = React.lazy(() => import('./pages/Pages/Contact/PageContactDetail'));
const ConditionsCosmetic = React.lazy(() => import('./pages/Home/ConditionsProcedures/ConditionsCosmetic'));
const ConditionsMedical = React.lazy(() => import('./pages/Home/ConditionsProcedures/ConditionsMedical'));
const DevicesCosmetic = React.lazy(() => import('./pages/Home/ConditionsProcedures/DevicesCosmetic'));
const DevicesMedical = React.lazy(() => import('./pages/Home/ConditionsProcedures/DevicesMedical'));

// Physicians
const AboutUs = React.lazy(() => import('./pages/Home/OurPractice/AboutUs'));
const Arteaga = React.lazy(() => import('./pages/Home/OurPractice/Arteaga'));
const Asrani = React.lazy(() => import('./pages/Home/OurPractice/Asrani'));
const Donnelley = React.lazy(() => import('./pages/Home/OurPractice/Donnelley'));
const Cossman = React.lazy(() => import('./pages/Home/OurPractice/Cossman'));
const Travis = React.lazy(() => import('./pages/Home/OurPractice/Travis'));
const Yagerman = React.lazy(() => import('./pages/Home/OurPractice/Yagerman'));

// Extra
const CovidProtocols = React.lazy(() => import('./pages/Home/Services/CovidProtocols'));
const MeetTheStaff = React.lazy(() => import('./pages/Home/OurPractice/MeetTheStaff'));
const MeetThePhysicians = React.lazy(() => import('./pages/Home/OurPractice/MeetThePhysicians'));

// Special
const PageComingSoon = React.lazy(() => import('./pages/Pages/Special/PageComingSoon'));
const PageComingSoon2 = React.lazy(() => import('./pages/Pages/Special/page-comingsoon2'));
const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));
const PageMaintenance = React.lazy(() => import('./pages/Pages/Special/PageMaintenance'));

//User Pages
const PageLogin = React.lazy(() => import('./pages/Pages/User/PageLogin'));
const PageCoverLogin = React.lazy(() => import('./pages/Pages/User/PageCoverLogin'));
const PageCoverRePassword = React.lazy(() => import('./pages/Pages/User/PageCoverRePassword'));
const PageCoverSignup = React.lazy(() => import('./pages/Pages/User/PageCoverSignup'));
const PageRecoveryPassword = React.lazy(() => import('./pages/Pages/User/PageRecoveryPassword'));
const PageSignup = React.lazy(() => import('./pages/Pages/User/PageSignup'));

// Import all components
const SaasOnepage = React.lazy(() => import('./pages/Saas Onepage/index'));
const Customer = React.lazy(() => import('./pages/Customer/index'));
const Job = React.lazy(() => import('./pages/Job/index'));
const Software = React.lazy(() => import('./pages/Software/index'));
const Cryptocurrency = React.lazy(() => import('./pages/Cryptocurrency/index'));
const Payments = React.lazy(() => import('./pages/Payments/index'));
const IndexCarRiding = React.lazy(() => import('./pages/Car Ride/index'));
const IndexclassicSaas = React.lazy(() => import('./pages/Classic Saas/index'));
const ClassicApp = React.lazy(() => import('./pages/Classic Application/index'));
const Main = React.lazy(() => import('./pages/Home/indexMain'));
const Agency = React.lazy(() => import('./pages/Agency/index'));
const Saas = React.lazy(() => import('./pages/Saas/index'));
const Apps = React.lazy(() => import('./pages/Apps/index'));
const Studio = React.lazy(() => import('./pages/Studio/index'));
const Business = React.lazy(() => import('./pages/Business/index'));
const Marketing = React.lazy(() => import('./pages/Marketing/index'));
const Hotel = React.lazy(() => import('./pages/Hotel/index'));
const ModernBusiness = React.lazy(() => import('./pages/ModernBusiness/index'));
const Coworking = React.lazy(() => import('./pages/Coworking/index'));
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Event = React.lazy(() => import('./pages/Event/index'));
const Course = React.lazy(() => import('./pages/Course/index'));
const Personal = React.lazy(() => import('./pages/Personal/index'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct/index'));
const Enterprise = React.lazy(() => import('./pages/Enterprise/index'));
const Portfolio = React.lazy(() => import('./pages/Portfolio/index'));
const Services = React.lazy(() => import('./pages/Services/index'));

//Docs
const ChangeLog = React.lazy(() => import('./pages/Docs/ChangeLog'));
const Components = React.lazy(() => import('./pages/Docs/Components'));
const Documentation = React.lazy(() => import('./pages/Docs/Documentation'));
const Widget = React.lazy(() => import('./pages/Docs/widget'));

const PageAboutUs = React.lazy(() => import('./pages/Pages/PageAboutUs'));
const PagePricing = React.lazy(() => import('./pages/Pages/PagePricing'));
const PageServices = React.lazy(() => import('./pages/Pages/PageServices'));
const PageTeam = React.lazy(() => import('./pages/Pages/PageTeam'));

//Account
const PageProfile = React.lazy(() => import('./pages/Pages/Account/page-profile'));
const PageProfileEdit = React.lazy(() => import('./pages/Pages/Account/page-profile-edit'));
const PageInvoice = React.lazy(() => import('./pages/Pages/Account/page-invoice'));

//Career
const PageJobsSidebar = React.lazy(() => import('./pages/Pages/Careers/page-jobs-sidebar'));
const PageJobDetail = React.lazy(() => import('./pages/Pages/Careers/page-job-detail'));
const PageJob = React.lazy(() => import('./pages/Pages/Careers/PageJob'));
const PageJobApply = React.lazy(() => import('./pages/Pages/Careers/page-job-apply'));
const PageJobCompany = React.lazy(() => import('./pages/Pages/Careers/page-job-company'));
const PageJobCandidate = React.lazy(() => import('./pages/Pages/Careers/page-job-candidate'));

//Blog
const PageBlog = React.lazy(() => import('./pages/Pages/Blog/PageBlog'));
const PageBlogDetail = React.lazy(() => import('./pages/Pages/Blog/PageBlogDetail'));
const PageBlogSidebar = React.lazy(() => import('./pages/Pages/Blog/PageBlogSidebar'));

//Work
const PageWork = React.lazy(() => import('./pages/Pages/Work/PageWork'));
const PageWorkDetail = React.lazy(() => import('./pages/Pages/Work/PageWorkDetail'));

//Utility
const PagePrivacy = React.lazy(() => import('./pages/Pages/Utility/PagePrivacy'));
const PageTerms = React.lazy(() => import('./pages/Pages/Utility/PageTerms'));

//Contact
const PageContactOne = React.lazy(() => import('./pages/Pages/Contact/PageContactOne'));
const PageContactThree = React.lazy(() => import('./pages/Pages/Contact/PageContactThree'));
const PageContactTwo = React.lazy(() => import('./pages/Pages/Contact/PageContactTwo'));

const routes = [
    //routes without Layout
    { path: '/botox-and-dysport', component: BotoxAndDysport },
    { path: '/acne', component: Acne },
    { path: '/skin-cancer-screening', component: SkinCancerScreening },
    { path: '/mohs-surgery', component: MohsSurgery },
    { path: '/conditions-cosmetic', component: ConditionsCosmetic },
    { path: '/conditions-medical', component: ConditionsMedical },
    { path: '/devices-cosmetic', component: DevicesCosmetic },
    { path: '/devices-medical', component: DevicesMedical },

    // Physicians
    { path: '/debbie-arteaga', component: Arteaga },
    { path: '/falguni-asrani', component: Asrani },
    { path: '/jack-cossman', component: Cossman },
    { path: '/naomi-donnelley', component: Donnelley },
    { path: '/lisa-travis', component: Travis },
    { path: '/sarah-yagerman', component: Yagerman },

    // Our Practice
    { path: '/about-us', component: AboutUs },
    { path: '/meet-the-physicians', component: MeetThePhysicians },
    { path: '/meet-the-staff', component: MeetTheStaff },

    // Extra
    { path: '/covid-protocols', component: CovidProtocols },

    // Contct withour layout
    { path: '/page-contact-detail', component: PageContactDetail, isWithoutLayout : true },

    // Special Pages
    { path: '/page-comingsoon', component: PageComingSoon, isWithoutLayout : true },
    { path: '/page-comingsoon2', component: PageComingSoon2, isWithoutLayout : true },
    { path: '/page-error', component: PageError, isWithoutLayout : true },
    { path: '/page-maintenance', component: PageMaintenance, isWithoutLayout : true },

    // User Pages
    { path: '/page-login', component: PageLogin, isWithoutLayout : true },
    { path: '/page-signup', component: PageSignup, isWithoutLayout : true },
    { path: '/page-cover-login', component: PageCoverLogin, isWithoutLayout : true },
    { path: '/page-recovery-password', component: PageRecoveryPassword, isWithoutLayout : true },
    { path: '/page-cover-re-password', component: PageCoverRePassword, isWithoutLayout : true},
    { path: '/page-cover-signup', component: PageCoverSignup, isWithoutLayout : true },
    
    // Landings
    { path: '/index-onepage', component: SaasOnepage },
    { path: '/index-customer', component: Customer },
    { path: '/index-job', component: Job },
    { path: '/index-software', component: Software },
    { path: '/index-crypto', component: Cryptocurrency },
    { path: '/index-payments', component: Payments },
    { path: '/index-car-riding', component: IndexCarRiding },
    { path: '/index-classic-saas', component: IndexclassicSaas },
    { path: '/index-classic-app', component: ClassicApp },
    { path: '/index-saas', component: Saas },
    { path: '/index-apps', component: Apps },
    { path: '/index-agency', component: Agency },
    { path: '/index-studio', component: Studio },
    { path: '/index-business', component: Business },
    { path: '/index-marketing', component: Marketing },
    { path: '/index-hotel', component: Hotel },
    { path: '/index-modern-business', component: ModernBusiness },
    { path: '/index-coworking', component: Coworking },
    { path: '/index-cloud-hosting', component: CloudHosting },
    { path: '/index-event', component: Event },
    { path: '/index-course', component: Course },
    { path: '/index-personal', component: Personal },
    { path: '/index-single', component: SingleProduct },
    { path: '/index-enterprise', component: Enterprise },
    { path: '/index-portfolio', component: Portfolio },
    { path: '/index-services', component: Services },

    { path: '/page-aboutus', component: PageAboutUs },
    { path: '/page-pricing', component: PagePricing },
    { path: '/page-services', component: PageServices },
    { path: '/page-team', component: PageTeam },

    //Utility
    { path: '/page-terms', component: PageTerms },
    { path: '/page-privacy', component: PagePrivacy },

    //Page Work
    { path: '/page-work', component: PageWork },
    { path: '/page-work-detail', component: PageWorkDetail },

    //Page Profile
    { path: '/page-profile', component: PageProfile },
    { path: '/page-profile-edit', component: PageProfileEdit },
    { path: '/page-invoice', component: PageInvoice },

    //Page Job
    { path: '/page-job', component: PageJob },
    { path: '/page-job-apply', component: PageJobApply },
    { path: '/page-job-detail', component: PageJobDetail },
    { path: '/page-jobs-sidebar', component: PageJobsSidebar },
    { path: '/page-job-company', component: PageJobCompany },
    { path: '/page-job-candidate', component: PageJobCandidate },

    //Page Blog
    { path: '/page-blog', component: PageBlog },
    { path: '/page-blog-detail', component: PageBlogDetail },
    { path: '/page-blog-sidebar', component: PageBlogSidebar },

    //Page Contact
    { path: '/page-contact-one', component: PageContactOne },
    { path: '/page-contact-three', component: PageContactThree },
    { path: '/page-contact-two', component: PageContactTwo },

    //Docs
    { path: '/changelog', component: ChangeLog },
    { path: '/components', component: Components },
    { path: '/documentation', component: Documentation },
    { path: '/widget', component: Widget },
    
    //Index Main
    { path: '/index', component: Main },

    //Root
    { path: '/', component: Root }
];

export default routes;