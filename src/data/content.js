const BASE = 'https://www.uenrtechfair.itdsuenr.com';

export function imgFallback(e, text = 'Image') {
  const w = e.target.width || e.target.clientWidth || 400;
  const h = e.target.height || e.target.clientHeight || 300;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect fill="#e2e8f0" width="${w}" height="${h}"/><text fill="#94a3b8" font-family="sans-serif" font-size="${Math.min(Math.min(w, h) * 0.08, 30)}" x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle">${text}</text></svg>`;
  e.target.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const IMAGES = {
  logo: `${BASE}/assets/images/icons/logo.png`,
  hero: [
    `${BASE}/assets/images/hero/slide-1.jpg`,
    `${BASE}/assets/images/hero/slide-2.jpg`,
    `${BASE}/assets/images/hero/slide-3.jpg`,
  ],
  aboutPreview: `${BASE}/assets/images/backgrounds/about-preview.jpg`,
  sponsorsAll: `${BASE}/assets/images/sponsors/all.jpeg`,
  gallery: Array.from({ length: 9 }, (_, i) => `${BASE}/assets/images/gallery/img-${i + 1}.jpg`),
  speakers: [
    `${BASE}/assets/images/speakers/speaker-1.jpg`,
    `${BASE}/assets/images/speakers/profgyasi.jpg`,
    `${BASE}/assets/images/speakers/speaker-2.jpg`,
    `${BASE}/assets/images/speakers/speaker-5.jpg`,
    `${BASE}/assets/images/speakers/speaker-3.jpg`,
    `${BASE}/assets/images/speakers/speaker-6.jpg`,
    `${BASE}/assets/images/speakers/speaker-8.jpg`,
    `${BASE}/assets/images/speakers/speaker-7.jpg`,
    `${BASE}/assets/images/speakers/anokye.jpg`,
    `${BASE}/assets/images/speakers/speaker-4.jpg`,
    `${BASE}/assets/images/speakers/vincent.jpeg`,
    `${BASE}/assets/images/speakers/ida.jpeg`,
  ],
  committees: Array.from({ length: 4 }, (_, i) => `${BASE}/assets/images/backgrounds/team-${i + 1}.jpg`),
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Committees', path: '/committees' },
  { label: 'Event', path: '/event' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const REGISTER_LINKS = [
  { label: 'UENR ITDS Student', url: 'https://forms.gle/y9K7fzXdBpVB9WWd7' },
  { label: 'External Participant', url: 'https://forms.gle/QWuHC6288mQm34n7A' },
];

export const STATISTICS = [
  { label: 'Years of Excellence', value: '6', icon: 'fas fa-trophy' },
  { label: 'Attendees', value: '10000+', icon: 'fas fa-users' },
  { label: 'Speakers', value: '1000+', icon: 'fas fa-microphone-alt' },
  { label: 'Tech Innovators', value: '500+', icon: 'fas fa-lightbulb' },
  { label: 'Sponsors & Partners', value: '50+', icon: 'fas fa-handshake' },
  { label: 'Digital Reach', value: '2M+', icon: 'fas fa-globe' },
];

export const HIGHLIGHTS = [
  { icon: 'fas fa-microphone-alt', title: 'Keynote Sessions', desc: 'World-renowned innovators and thought leaders.' },
  { icon: 'fas fa-tools', title: 'Hands-on Workshops', desc: 'Practical skills training from industry experts.' },
  { icon: 'fas fa-handshake', title: 'Networking', desc: 'Connect with industry leaders, recruiters, and peers.' },
  { icon: 'fas fa-briefcase', title: 'Career Fair', desc: 'Internship and job opportunities with top companies.' },
  { icon: 'fas fa-rocket', title: 'Startup Pitch Fest', desc: 'Watch the next big idea compete for funding.' },
  { icon: 'fas fa-graduation-cap', title: 'Student Exhibitions', desc: 'Discover innovations from UENR and beyond.' },
];

export const SPEAKERS = [
  { name: 'Prof. Elvis Asare-Bediako', title: 'Vice-Chancellor, UENR', image: IMAGES.speakers[0] },
  { name: 'Prof. Samuel Fosu Gyasi', title: 'Dean, School Of Science', image: IMAGES.speakers[1] },
  { name: 'Prof. Peter Appiahene', title: 'Convener & HOD, ITDS', image: IMAGES.speakers[2] },
  { name: 'Hon. Johnson Asiedu Nketiah', title: 'Chairman (NDC) & Board Chairman (GPHA)', image: IMAGES.speakers[3] },
  { name: 'Hon. Joseph Addae Akwaboa', title: 'Bono Regional Minister', image: IMAGES.speakers[4] },
  { name: 'Hon. Millicent Yeboah Amankwah', title: 'MP, Sunyani West', image: IMAGES.speakers[5] },
  { name: 'Hon. Samuel Nartey George', title: 'Minister for Communication, Digital Technology and Innovations', image: IMAGES.speakers[6] },
  { name: 'Hon. Kojo Oppong Nkrumah', title: 'MP, Ofoase Ayirebi', image: IMAGES.speakers[7] },
  { name: 'Dr. Anokye A. Amponsah', title: 'Senior Lecturer, UENR', image: IMAGES.speakers[8] },
  { name: 'Hon. George Opare Addo, Esq.', title: 'Minister for Youth Development and Empowerment', image: IMAGES.speakers[9] },
  { name: 'Opoku Vincent', title: 'President, ITS-UENR', image: IMAGES.speakers[10] },
  { name: 'Asore Awinsida Ida', title: 'Vice President, ITS-UENR', image: IMAGES.speakers[11] },
];

export const NEWS = [
  { date: 'March 15, 2026', title: 'Speaker Lineup Announced', desc: 'Meet the 50+ industry leaders and innovators set to speak at this year\'s fair.', link: '/event' },
  { date: 'March 10, 2026', title: 'Workshop Registration Now Open', desc: 'Secure your spot in hands-on sessions covering AI, blockchain, and sustainable energy.', link: '#' },
  { date: 'March 5, 2026', title: 'Call for Papers - Deadline Approaching', desc: 'Submit your research or project for a chance to present at the fair.', link: '#' },
  { date: 'February 28, 2026', title: 'Early Bird Registration Ends Soon', desc: 'Save 30% on registration fees before March 31st.', link: '#' },
];

export const COMMITTEES = {
  organizing: [
    { name: 'Prof. Peter Appiahene', role: 'Convener', desc: 'Professor of Information Systems with 15+ years of experience. Founded the Tech Fair in 2021.', image: '/committees/chairperson.jpg' },
    { name: 'Mr. Jacob Mensah', role: 'Chairperson', desc: 'Head of Department, ITDS. Leads strategic partnerships and academic integration.' },
    { name: 'Miss Akoto', role: 'Secretary General', desc: 'Coordinates all committee activities and ensures seamless communication across teams.' },
    { name: 'Mr. Ayitteh', role: 'Head of Innovation', desc: 'Manages budget, sponsorships, and financial planning for the annual event.' },
  ],
  subCommittees: [
    {
      name: 'Marketing & Publicity Committee',
      desc: 'Manages social media, website, and press',
      members: [
        { name: 'Mr. Emmanuel Botchway', role: 'Marketing Director', image: '/committees/BOTCHWAY.jpeg' },
        { name: 'Mr. Phinehas Owusu Bonsu', role: 'Social Media Manager', image: '/committees/PHINEHAS.jpeg' },
        { name: 'Mr. Gyan Armstrong', role: 'Content Creator', image: '/committees/ARMSTRONG.jpeg' },
      ],
    },
    {
      name: 'IT & Technical Committee',
      desc: 'Manages registration system, website, and AV/technical support',
      members: [
        { name: 'Mr. Emmanuel Amful Owusu', role: 'IT Director', image: '/committees/CALL ME GENERAL AMFUL.jpg' },
        { name: 'Mr. Edward Damptey', role: 'Technical Lead', image: '/committees/Edward.jpg' },
        { name: 'Mr. Ishmael Boadu Kumi', role: 'Technical Lead 2', image: '/committees/KBI.jpeg' },
      ],
    },
    {
      name: 'Brand & Creative Design Committee',
      desc: 'Responsible for visual identity, branding materials, and creative direction',
      members: [
        { name: 'Mr. Bernard Kwabeng Akoto', role: 'Creative Director', image: '/committees/bernard.jpeg' },
        { name: 'Mr. Dominic Oppong', role: 'Dep. Creative Director', image: '/committees/dominic.jpeg' },
        { name: 'Mr. Appiagyei Brains', role: 'Motion Graphics Artist', image: '/committees/BRAINS.png' },
        { name: 'Mr. Joseph Obeng Asante', role: 'Photography', image: '/committees/joseph.jpeg' },
      ],
    },
  ],
};

export const SCHEDULE = [
  {
    session: 'Session One',
    time: '8:00 AM - 9:55 AM',
    items: [
      { time: '8:00 AM', title: 'Arrival of Students & Registration', desc: 'Check-in and registration for all participants' },
      { time: '9:00 AM', title: 'Opening Prayer', desc: 'Invocation and spiritual commencement' },
      { time: '9:05 AM', title: 'State of ITDS', desc: 'Overview of the IT & Decision Sciences Department' },
      { time: '9:20 AM', title: 'ITDS Documentary', desc: 'A visual journey through the department\'s achievements' },
      { time: '9:30 AM', title: 'Welcome Address', desc: 'Official welcome to all attendees and guests' },
      { time: '9:40 AM', title: 'Introduction of Dignitaries', desc: 'Recognition of distinguished guests and officials' },
      { time: '9:50 AM', title: 'Purpose of Gathering', desc: 'Setting the context and objectives for UENR Tech Fair 2026', speaker: 'Prof. Peter Appiahene' },
    ],
  },
  {
    session: 'Session Two',
    time: '10:00 AM - 1:50 PM',
    items: [
      { time: '10:00 AM', title: 'Community Impact Documentary', desc: 'Showcasing UENR\'s technological impact on local communities' },
      { time: '10:25 AM', title: 'Introduction of Chairman & Remarks', desc: 'Chairman\'s address and official opening remarks', speaker: 'Prof. Elvis Asare-Bediako' },
      { time: '10:45 AM', title: 'Elevator Pitch Video of Students Projects', desc: 'Rapid-fire presentations showcasing student innovations' },
      { time: '10:55 AM', title: 'Address by 1st Keynote Speaker', desc: 'Insights on technology and innovation in Africa', speaker: '1st Keynote Speaker' },
      { time: '11:00 AM', title: 'Student Project Presentation', desc: 'Live demonstration of innovative student projects' },
      { time: '11:25 AM', title: 'Address by 2nd Keynote Speaker', desc: 'Visionary perspectives on the future of tech', speaker: '2nd Keynote Speaker' },
      { time: '11:35 AM', title: 'Poster Presentation', desc: 'Interactive poster sessions from student researchers' },
      { time: '11:50 AM', title: 'Interview Session', desc: 'Media interviews with key speakers and organizers' },
      { time: '12:00 PM', title: 'Partners Engagement & Networking', desc: 'Connect with industry partners and explore collaboration opportunities' },
      { time: '12:20 PM', title: 'Cultural Display', desc: 'Celebration of Ghanaian culture through performance and art' },
      { time: '12:50 PM', title: 'Student Project Presentation', desc: 'Additional student innovation demonstrations' },
      { time: '1:00 PM', title: 'Address by 3rd Keynote Speaker', desc: 'Transformative insights on technology and society', speaker: '3rd Keynote Speaker' },
      { time: '1:20 PM', title: 'Student Project Presentation', desc: 'Final round of student project showcases' },
      { time: '1:30 PM', title: 'Address by Special Guest of Honour', desc: 'Keynote address from our distinguished guest', speaker: 'Special Guest Speaker' },
      { time: '1:35 PM', title: 'Presentation by Partners', desc: 'Our valued partners share their vision and contributions' },
      { time: '1:40 PM', title: '1st Panel Discussion', desc: 'Expert panel on emerging technology trends' },
      { time: '1:45 PM', title: 'Musical Interlude', desc: 'Entertainment break with musical performance' },
      { time: '1:50 PM', title: '2nd Panel Discussion', desc: 'Continued expert dialogue on innovation and policy' },
    ],
  },
  {
    session: 'Closing Session',
    time: '2:00 PM Onwards',
    items: [
      { time: '2:00 PM', title: 'Presentation of Awards', desc: 'Recognition of outstanding students, projects, and contributors', tag: 'Awards Ceremony' },
      { time: '2:30 PM', title: 'Closing Remarks', desc: 'Final thoughts and reflections on the day\'s proceedings' },
      { time: '2:45 PM', title: 'Vote of Thanks', desc: 'Appreciation to all sponsors, speakers, partners, and attendees' },
      { time: '3:00 PM', title: 'Closing Prayer', desc: 'Spiritual closing and benediction' },
      { time: '3:15 PM', title: 'University Anthem & Photoshoot', desc: 'Group photographs and celebration of UENR pride', tag: 'Photo Session' },
    ],
  },
];

export const TICKETS = [
  { name: 'ITDS Student Pass', price: 'GH₵ 0.00', features: ['Access to all sessions, exhibitions, and workshops'] },
  { name: 'External Participants', price: 'GH₵ 0.00', features: ['Access to all sessions, exhibitions, and workshops'] },
  { name: 'Refreshment & Certificate', price: 'GH₵ 70.00', features: ['Access to all sessions, exhibitions, and workshops', 'Participant will be given Refreshment and Certificate'] },
];

export const FLYERS = [
  { title: 'Tech Fair Flyer 1', image: '/slide-1.jpg' },
  { title: 'Tech Fair Flyer 2', image: '/slide-2.jpg' },
  { title: 'Tech Fair Flyer 3', image: '/slide-3.jpg' },
];

export const SPEAKER_CATEGORIES = ['All', 'Keynote', 'Guest Speakers', 'Panelists', 'Partners'];

export const EVENT_SPEAKERS = [
  { name: 'Prof. Elvis Asare-Bediako', title: 'Vice-Chancellor, UENR', image: IMAGES.speakers[0], category: 'Keynote' },
  { name: 'Prof. Peter Appiahene', title: 'Convener & HOD, ITDS', image: IMAGES.speakers[2], category: 'Keynote' },
  { name: 'Hon. Samuel Nartey George', title: 'Minister for Communication, Digital Technology and Innovations', image: IMAGES.speakers[6], category: 'Guest Speakers' },
  { name: 'Hon. Kojo Oppong Nkrumah', title: 'MP, Ofoase Ayirebi', image: IMAGES.speakers[7], category: 'Guest Speakers' },
  { name: 'Hon. George Opare Addo, Esq.', title: 'Minister for Youth Development and Empowerment', image: IMAGES.speakers[9], category: 'Guest Speakers' },
  { name: 'Hon. Johnson Asiedu Nketiah', title: 'Chairman (NDC) & Board Chairman (GPHA)', image: IMAGES.speakers[3], category: 'Guest Speakers' },
  { name: 'Hon. Joseph Addae Akwaboa', title: 'Bono Regional Minister', image: IMAGES.speakers[4], category: 'Guest Speakers' },
  { name: 'Hon. Millicent Yeboah Amankwah', title: 'MP, Sunyani West', image: IMAGES.speakers[5], category: 'Guest Speakers' },
  { name: 'Prof. Samuel Fosu Gyasi', title: 'Dean, School Of Science', image: IMAGES.speakers[1], category: 'Panelists' },
  { name: 'Dr. Anokye A. Amponsah', title: 'Senior Lecturer, UENR', image: IMAGES.speakers[8], category: 'Panelists' },
  { name: 'Opoku Vincent', title: 'President, ITS-UENR', image: IMAGES.speakers[10], category: 'Panelists' },
  { name: 'Asore Awinsida Ida', title: 'Vice President, ITS-UENR', image: IMAGES.speakers[11], category: 'Panelists' },
];

export const COMPETITIONS = [
  {
    name: 'Hackathon Challenge 2026',
    date: 'June 24-25, 2026',
    time: '9:00 AM - 6:00 PM',
    venue: 'UENR ICT Lab',
    prizes: [
      { label: 'Winner', amount: '$300' },
      { label: '1st Runner Up', amount: '$200' },
      { label: '2nd Runner Up', amount: '$100' },
    ],
    extra: 'Certificate + Citation + Gadgets',
  },
  {
    name: 'CreateX Sprint Challenge 2026',
    date: 'June 25-26, 2026',
    time: '10:00 AM - 5:00 PM',
    venue: 'UENR Design Studio',
    prizes: [
      { label: 'Winner', amount: '$300' },
      { label: '1st Runner Up', amount: '$200' },
      { label: '2nd Runner Up', amount: '$100' },
    ],
    extra: 'Certificate + Citation + Gadgets',
  },
];

export const EVENT_STATS = [
  { value: '50+', label: 'Speakers' },
  { value: '100+', label: 'Exhibitors' },
  { value: '3000+', label: 'Attendees' },
];

export const WHY_ATTEND = [
  { icon: 'fas fa-microphone-alt', title: 'Expert Speakers', desc: 'Learn from 50+ industry leaders and innovators' },
  { icon: 'fas fa-tools', title: 'Practical Workshops', desc: 'Hands-on training in cutting-edge technologies' },
  { icon: 'fas fa-handshake', title: 'Networking', desc: 'Connect with recruiters, founders, and peers' },
  { icon: 'fas fa-briefcase', title: 'Career Opportunities', desc: 'Access internships and job offers from top companies' },
  { icon: 'fas fa-rocket', title: 'Innovation Showcase', desc: 'Discover groundbreaking student projects' },
  { icon: 'fas fa-certificate', title: 'Certification', desc: 'Earn certificates for workshop participation' },
];

export const ABOUT_CONTENT = {
  journey: `The UENR Tech Fair is an annual technology gathering organized by the Department of Information Technology and Decision Sciences (ITDS) at the University of Energy and Natural Resources (UENR). What began in 2021 as a small student exhibition has rapidly grown into one of Ghana's largest and most significant technology events, attracting thousands of participants, including students, industry leaders, government officials, and policymakers.
The fair serves as a dynamic platform to showcase student-led technological innovations, foster critical policy dialogue, and facilitate strong engagement between academia and industry. It is a key driver in positioning UENR as a leader in digital innovation and a primary contributor to Ghana's national digital agenda.`,
  milestones: [
    { year: '2021', title: 'Inception Year', desc: 'The inaugural edition - a student exhibition that sparked a movement.' },
    { year: '6+', title: 'Years of Excellence', desc: 'A legacy of growth and impact' },
    { year: '10K+', title: 'Lives Impacted', desc: 'Thousands of students empowered through tech' },
  ],
  vision: 'To be the catalyst that transforms Ghana\'s digital landscape. The fair envisions a future where digitalization is not just a trend but a fundamental driver of national growth, enhancing efficiency, transparency, and innovation across all sectors.\n\nElevate Sunyani into a premier national technology hub with global reach.',
  mission: 'To empower the next generation of tech leaders by advancing tech education, fostering a culture of creativity and excellence, and bridging the gap between academic innovation and real-world application.\n\nCreate an ecosystem where student talent is nurtured through mentorship, investment, and collaboration with government and industry stakeholders.',
  goal: 'The UENR Tech Fair exists to bridge the critical gap between academic knowledge and industry needs. We believe that innovation thrives at the intersection of education, industry, and policy. Our goal is to:',
  goalItems: [
    'Foster a culture of innovation and entrepreneurship at UENR and beyond',
    'Create tangible pathways for student employment and startup success',
    'Position Ghana as a leader in sustainable technology and digital innovation',
    'Build lasting partnerships between academia, industry, and government',
    'Showcase Ghanaian talent on the global stage',
  ],
  founder: {
    name: 'Prof. Peter Appiahene',
    title: 'convener, UENR Tech Fair | Head of Department, ITDS (2020-Date)',
    quote: '"I believed that UENR\'s students had the potential to solve Africa\'s most pressing challenges through technology. The Tech Fair was born from a simple idea: create a platform where student innovation meets real-world opportunity."',
    bio: 'Professor Peter Appiahene, a distinguished scholar in Information Systems and Digital Innovation, initiated the first UENR Tech Fair in 2021. With over 15 years of experience in academia and industry, he recognized the gap between theoretical knowledge and practical application in Ghana\'s tech education landscape. Under his leadership, the fair has grown from a small departmental exhibition to a national event attracting thousands of participants, industry leaders, and policymakers. His vision continues to inspire the next generation of tech innovators.',
    stats: [
      { value: '15+', label: 'Years in Tech Education' },
      { value: '100+', label: 'Student Startups Mentored' },
      { value: '6', label: 'Years of Tech Fair Excellence' },
    ],
  },
  itds: {
    title: 'Department of Information Technology & Decision Sciences (ITDS)',
    desc: 'The Department of Information Technology and Decision Sciences (ITDS) at UENR is a center of excellence in IT education, research, and innovation. Established to produce graduates who can leverage technology to solve complex problems in energy, natural resources, and beyond.',
    features: [
      { icon: 'fas fa-graduation-cap', title: 'Academic Excellence', desc: 'Cutting-edge curriculum in AI, Data Science, and Sustainable Tech' },
      { icon: 'fas fa-flask', title: 'Research Innovation', desc: 'Pioneering research in tech-enabled solutions for Africa\'s challenges' },
      { icon: 'fas fa-handshake', title: 'Industry Partnerships', desc: 'Strong collaborations with tech giants and local innovators' },
    ],
    stats: [
      { value: '5000+', label: 'ITDS Students' },
      { value: '25+', label: 'Faculty Members' },
      { value: '100%', label: 'Industry-Ready Graduates' },
    ],
  },
  pastEditions: [
    {
      year: '2024', theme: 'Digital Horizons',
      attendees: '8,500+ Attendees', speakers: '150+ Speakers', projects: '500+ Projects',
      desc: 'Largest edition yet, featuring the first-ever AI Hackathon and Startup Pitch Fest.',
    },
    {
      year: '2023', theme: 'Tech for Sustainability',
      attendees: '5,200+ Attendees', speakers: '100+ Speakers', projects: '350+ Projects',
      desc: 'Introduced the Career Fair and expanded to 3 days of programming.',
    },
    {
      year: '2022', theme: 'Innovation Unleashed',
      attendees: '2,800+ Attendees', speakers: '60+ Speakers', projects: '180+ Projects',
      desc: 'First hybrid edition with virtual participation and expanded workshops.',
    },
    {
      year: '2021', theme: 'Digital Transformation',
      attendees: '500+ Attendees', speakers: '20+ Speakers', projects: '50+ Projects',
      desc: 'The inaugural edition - a student exhibition that sparked a movement.',
    },
  ],
};

export const FAQ = [
  { q: 'How do I register for the Tech Fair?', a: 'You can register by clicking the "Register" button on our website or visiting the event page. Registration is open to students, professionals, and enthusiasts.' },
  { q: 'Is there a registration fee?', a: 'Yes, there are different ticket types: Student Pass (GH₵ 50), Professional Pass (GH₵ 150), and Corporate Pass (GH₵ 500). Early bird discounts may apply.' },
  { q: 'Can I become a sponsor or partner?', a: 'Absolutely! We welcome sponsors and partners. Please select "Sponsorship Opportunities" in the contact form above, and our partnerships team will reach out to you.' },
  { q: 'How can I apply as a speaker?', a: 'Select "Speaker Application" from the subject dropdown in the contact form. Include your topic, expertise, and a brief bio. Our team will review and respond.' },
  { q: 'Is accommodation available for attendees?', a: 'Yes, there are several hotels and guest houses near the UENR campus in Sunyani. Contact us for recommendations or special arrangements for groups.' },
  { q: 'How do I exhibit my project?', a: 'Select "Exhibition Booking" from the contact form. Provide details about your project, space requirements, and any special equipment needed.' },
];

export const CONTACT_INFO = [
  { icon: 'fas fa-map-marker-alt', title: 'Visit Us', content: 'Department of IT & Decision Sciences\nUniversity of Energy and Natural Resources\nFiapre, Sunyani\nBono Region, Ghana' },
  { icon: 'fas fa-envelope', title: 'Email Us', content: 'itds@uenr.edu.gh', link: 'mailto:itds@uenr.edu.gh' },
  { icon: 'fas fa-phone-alt', title: 'Call Us', content: '+233 (0) 54 621 0556', link: 'tel:+233546210556' },
];

export const OFFICE_HOURS = [
  { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const HERO_SLIDES = [
  {
    title: 'UENR Tech Fair 2026: Ghana\'s Biggest Tech Ecosystem',
    subtitle: 'An annual technology gathering by the Department of Information Technology and Decision Sciences (ITDS). From a student exhibition in 2021 to Ghana\'s premier tech event.',
  },
  {
    title: 'Showcasing Student-Led Innovation',
    subtitle: 'Witness groundbreaking solutions from Ghana\'s brightest tech minds, addressing real-world challenges in energy, agriculture, and natural resources.',
  },
  {
    title: 'Bridging Academia, Industry & Government',
    subtitle: 'Join critical policy dialogues that shape Ghana\'s digital agenda and create pathways for the next generation of tech leaders.',
  },
];
