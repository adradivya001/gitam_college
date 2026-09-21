import './theme.css';

const sriGitamContent = {
  id: "sri-gitam",
  seo: {
    title: "Sri GITAM Junior College | Anantapur",
    metaDescription: "Sri GITAM Junior College, Anantapur — Intermediate education across MPC, BiPC, MEC and CEC with a focus on academic foundations and future pathways."
  },
  college: {
    name: "Sri GITAM Junior College",
    shortName: "Sri GITAM",
    tagline: "Shape Your Future With the Right Foundation",
    logo: "/sri_gitam.png",
    location: "Anantapur, Andhra Pradesh",
    contact: {
      phone: "+91 89886 86861, +91 89886 86862",
      whatsapp: "+91 89886 86861",
      email: "gitamcollege@gmail.com",
      address: "Intell College Building, Old Kalyandurgam Road, Akkampalli Cross, Anantapur, Andhra Pradesh – 515004",
      workingHours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    }
  },
  navigation: {
    brand: {
      name: "Sri GITAM",
      subtext: "JUNIOR COLLEGE",
      hideText: true,
      fullLogo: true
    },
    links: [
      { label: "Home", target: "home", action: "navigate_to" },
      { label: "About", target: "about", action: "navigate_to" },
      { label: "Academics", target: "academics", action: "navigate_to" },
      { label: "Programmes", target: "programmes", action: "navigate_to" },
      { label: "Why Sri GITAM", target: "why-sri-gitam", action: "navigate_to" },
      { label: "Campus", target: "campus", action: "navigate_to" },
      { label: "Student Life", target: "student-life", action: "navigate_to" },
      { label: "Results", target: "results", action: "navigate_to" },
      { label: "Admissions", target: "admissions", action: "navigate_to" },
      { label: "Contact", target: "contact", action: "navigate_to" }
    ],
    cta: {
      label: "Apply Now",
      action: "open_admissions_modal"
    }
  },
  pages: {
    home: {
      sections: [
        {
          id: "sg-hero",
          type: "sg-hero",
          enabled: true,
          eyebrow: "SRI GITAM JUNIOR COLLEGE · ANANTAPUR",
          title: "Shape Your Future\nWith the Right\nFoundation",
          subtitle: "Sri GITAM Junior College, Anantapur, provides Intermediate education focused on strong academic foundations, structured learning and preparation for higher education.",
          heroImage: "/sri-gitam/gallery/campus_ramnagar_1789977013402.jpg",
          primaryCta: { label: "Explore Programmes →", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Apply Now", action: "navigate_to", target: "admissions" },
          highlights: [
            { icon: "BookOpen", label: "Intermediate Education" },
            { icon: "Compass", label: "Academic Guidance" },
            { icon: "Target", label: "Career-Focused Learning" },
            { icon: "Users", label: "Student Development" }
          ]
        },
        {
          id: "sg-about",
          type: "sg-about",
          enabled: true,
          eyebrow: "ABOUT SRI GITAM",
          title: "Welcome to Sri GITAM\nJunior College",
          content: "Sri GITAM Junior College is an Intermediate educational institution in Anantapur offering academic pathways designed to help students build subject knowledge and prepare for their future studies. With programmes across MPC, BiPC, MEC and CEC, students can choose a stream aligned with their interests and career direction.",
          image: "/sri-gitam/gallery/smart_classrooms_1789976999081.jpg",
          hasVideo: true,
          features: [
            { icon: "BookOpen", label: "Strong Academic Foundation" },
            { icon: "Heart", label: "Supportive Learning Environment" },
            { icon: "Map", label: "Guidance for Future Pathways" },
            { icon: "TrendingUp", label: "Focus on Student Growth" }
          ],
          cta: { label: "Learn More About Us →", action: "navigate_to", target: "about" }
        },
        {
          id: "sg-programmes",
          type: "sg-programmes",
          enabled: true,
          eyebrow: "OUR PROGRAMMES",
          title: "Find Your Academic Path",
          subtitle: "Explore the Intermediate pathways available to students and understand where each academic combination can lead.",
          programs: [
            {
              id: "mpc",
              name: "MPC",
              subjects: "Mathematics • Physics • Chemistry",
              description: "A foundation for students interested in engineering, technology, mathematics and physical sciences.",
              bgColor: "var(--color-sg-peach)",
              icon: "Atom"
            },
            {
              id: "bipc",
              name: "BiPC",
              subjects: "Biology • Physics • Chemistry",
              description: "A foundation for students interested in medicine, pharmacy, life sciences and allied fields.",
              bgColor: "var(--color-sg-sage)",
              icon: "Dna"
            },
            {
              id: "mec",
              name: "MEC",
              subjects: "Mathematics • Economics • Commerce",
              description: "A foundation for students interested in commerce, finance, economics and management.",
              bgColor: "var(--color-sg-sand)",
              icon: "BarChart2"
            },
            {
              id: "cec",
              name: "CEC",
              subjects: "Civics • Economics • Commerce",
              description: "A foundation for students interested in commerce, management, law and social sciences.",
              bgColor: "var(--color-sg-lavender)",
              icon: "Users"
            }
          ],
          cta: { label: "View All Programmes →", action: "navigate_to", target: "programmes" }
        },
        {
          id: "sg-why",
          type: "sg-why",
          enabled: true,
          eyebrow: "WHY SRI GITAM",
          title: "More Than a Classroom",
          subtitle: "An academic environment designed for learning, guidance, personal development and future preparation.",
          pillars: [
            { id: "p1", icon: "BookOpen", title: "Academic Foundation", desc: "Build clear understanding of core subjects." },
            { id: "p2", icon: "Target", title: "Focused Learning", desc: "Maintain a structured approach towards academic progress." },
            { id: "p3", icon: "Map", title: "Stream-Based Education", desc: "Choose a programme based on interests and future goals." },
            { id: "p4", icon: "Compass", title: "Academic Guidance", desc: "Receive guidance throughout the Intermediate journey." },
            { id: "p5", icon: "Briefcase", title: "Career Awareness", desc: "Understand possible pathways after Intermediate education." },
            { id: "p6", icon: "Users", title: "Student Development", desc: "Develop confidence, discipline and broader skills alongside academics." }
          ],
          cta: { label: "Discover Why Sri GITAM →", action: "navigate_to", target: "why-us" }
        },
        {
          id: "sg-achievements",
          type: "sg-achievements",
          enabled: true,
          eyebrow: "STUDENT ACHIEVEMENTS",
          title: "Celebrating Student Progress",
          subtitle: "Academic achievements reflect the effort of students, teachers and families working together towards a common goal.",
          stats: [
            { label: "Top Scores", icon: "Trophy", value: "—" },
            { label: "Pass Percentage", icon: "Percent", value: "—" },
            { label: "Student Achievements", icon: "Award", value: "—" },
            { label: "Competitive Exam Results", icon: "GraduationCap", value: "—" }
          ],
          cta: { label: "View Achievements →", action: "navigate_to", target: "results" }
        },
        {
          id: "sg-admissions-cta",
          type: "sg-admissions-cta",
          enabled: true,
          eyebrow: "YOUR NEXT STEP",
          title: "Your Next Chapter\nStarts Here",
          subtitle: "Explore our programmes and take the first step towards your Intermediate education journey.",
          primaryCta: { label: "Begin Your Admission Journey →", action: "open_admissions_modal" },
          secondaryCta: { label: "Visit Campus", action: "navigate_to", target: "facilities" },
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        }
      ]
    },
    about: {
      sections: [
        { id: "about-hero", type: "about-hero", title: "About Sri GITAM Junior College", subtitle: "Building academic foundations and helping students move confidently towards higher education." },
        { id: "about-intro", type: "about-content", title: "A Foundation for the Future", content: "Sri GITAM Junior College is an Intermediate college located in Anantapur, Andhra Pradesh. The institution focuses on providing students with a structured academic environment where they can strengthen their subject knowledge, develop academic discipline and prepare for their next stage of education.\n\nStudents can choose from different Intermediate streams according to their interests and future aspirations." },
        { id: "about-philosophy", type: "philosophy", title: "Educational Approach", headline: "Our Approach to Learning", content: "We believe that strong fundamentals, consistent learning and proper academic direction help students make informed decisions about their future." },
        { id: "vision-mission", type: "vision-mission", vision: { title: "Vision", desc: "To provide a focused educational environment where students can develop strong academic foundations, discover their potential and progress confidently towards higher education." }, mission: { title: "Mission", desc: "To support students through structured Intermediate education, academic guidance and opportunities for personal development while preparing them for future academic pathways." } }
      ]
    },
    academics: {
      sections: [
        { id: "academics-hero", type: "about-hero", title: "Learning With Purpose", subtitle: "Develop strong concepts, strengthen subject knowledge and prepare for the next stage of your education." },
        { id: "academics-journey", type: "winning-process", eyebrow: "ACADEMIC JOURNEY", title: "Academic Journey", steps: [
          { title: "Understand", desc: "Build clarity in fundamental concepts." },
          { title: "Learn", desc: "Develop subject knowledge through structured classroom learning." },
          { title: "Practice", desc: "Strengthen understanding through regular practice." },
          { title: "Evaluate", desc: "Identify areas of improvement and track academic progress." },
          { title: "Prepare", desc: "Develop readiness for higher education and future examinations." }
        ]},
        { id: "academics-streams", type: "programs", title: "Academic Streams", programs: [
          { name: "MPC", subjects: ["Mathematics", "Physics", "Chemistry"] },
          { name: "BiPC", subjects: ["Biology", "Physics", "Chemistry"] },
          { name: "MEC", subjects: ["Mathematics", "Economics", "Commerce"] },
          { name: "CEC", subjects: ["Civics", "Economics", "Commerce"] }
        ], cta: null }
      ]
    },
    programmes: {
      sections: [
        { id: "prog-hero", type: "about-hero", title: "Choose the Path That Fits Your Future", subtitle: "Explore the Intermediate programmes available at Sri GITAM Junior College." },
        { id: "prog-list", type: "programs", title: "Academic Streams", programs: [
          { name: "MPC", code: "MPC", title: "MPC", subtitle: "Mathematics • Physics • Chemistry", description: "MPC provides a strong foundation in mathematics and physical sciences for students interested in analytical, technical and scientific fields.\n\nFuture pathways: Engineering, Technology, Computer Science, Mathematics, Physical Sciences, Architecture and related fields." },
          { name: "BiPC", code: "BiPC", title: "BiPC", subtitle: "Biology • Physics • Chemistry", description: "BiPC provides a foundation in biological and physical sciences for students interested in healthcare, life sciences and related fields.\n\nFuture pathways: Medicine, Pharmacy, Biotechnology, Life Sciences, Allied Health Sciences, Agricultural Sciences." },
          { name: "MEC", code: "MEC", title: "MEC", subtitle: "Mathematics • Economics • Commerce", description: "MEC combines mathematics, economics and commerce-oriented learning for students interested in business, finance and analytical disciplines.\n\nFuture pathways: Commerce, Finance, Economics, Business, Management, Accounting." },
          { name: "CEC", code: "CEC", title: "CEC", subtitle: "Civics • Economics • Commerce", description: "CEC provides a foundation in commerce, economics and social sciences for students exploring business, management and related fields.\n\nFuture pathways: Commerce, Management, Law, Economics, Social Sciences, Business Studies." }
        ]}
      ]
    },
    'why-us': {
      sections: [
        { id: "why-hero", type: "about-hero", title: "Why Sri GITAM?", subtitle: "An academic environment focused on learning, guidance, personal development and future preparation." },
        { id: "why-pillars", type: "why-us", title: "Six Major Sections", pillars: [
          { id: "w1", title: "01 Academic Foundation", desc: "Build a strong foundation in the core subjects of your chosen Intermediate stream." },
          { id: "w2", title: "02 Focused Learning", desc: "Follow a structured academic journey designed around consistent learning and progress." },
          { id: "w3", title: "03 Multiple Academic Pathways", desc: "Choose from MPC, BiPC, MEC and CEC based on your interests and future plans." },
          { id: "w4", title: "04 Academic Guidance", desc: "Receive direction and support as you progress through your Intermediate education." },
          { id: "w5", title: "05 Future Awareness", desc: "Understand the higher-education opportunities and career pathways associated with your chosen stream." },
          { id: "w6", title: "06 Student Development", desc: "Develop confidence, discipline, communication and a responsible approach towards learning." }
        ]},
        { id: "why-closing", type: "about-content", title: "The Right Foundation Makes a Difference", content: "Choose an academic pathway that helps you move confidently towards your future.", cta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" } }
      ]
    },
    facilities: {
      sections: [
        { id: "facilities-hero", type: "about-hero", title: "A Space Designed for Learning", subtitle: "Explore the learning environment and facilities that support the Intermediate education journey." },
        { id: "facilities-list", type: "philosophy", title: "Facilities", pillars: [
          { title: "Classrooms", desc: "Learning spaces designed to support focused classroom education and student interaction." },
          { title: "Science Laboratories", desc: "Practical learning spaces that complement science-based academic programmes." },
          { title: "Library", desc: "A resource environment supporting reading, reference and academic learning." },
          { title: "Learning Spaces", desc: "Spaces that support individual study, academic activities and collaborative learning." },
          { title: "Student Facilities", desc: "Facilities intended to support students throughout their academic journey." }
        ]},
        { id: "gallery", type: "gallery", title: "Gallery", categories: ["Campus", "Classrooms", "Laboratories", "Academic Activities", "Events", "Student Activities"], images: [] }
      ]
    },
    'student-life': {
      sections: [
        { id: "sl-hero", type: "about-hero", title: "Life Beyond the Classroom", subtitle: "Academic growth is strengthened by participation, interaction, creativity and personal development." },
        { id: "sl-activities", type: "why-us", title: "Sections", pillars: [
          { id: "sl1", title: "Academic Activities", desc: "Encourage students to actively participate in their academic journey." },
          { id: "sl2", title: "Events & Celebrations", desc: "Provide opportunities for students to participate in institutional and cultural events." },
          { id: "sl3", title: "Student Engagement", desc: "Create opportunities for students to interact, participate and build confidence." },
          { id: "sl4", title: "Sports & Recreation", desc: "Encourage students to maintain a healthy balance between academic responsibilities and physical activity." },
          { id: "sl5", title: "Cultural Activities", desc: "Encourage creativity, expression and participation in cultural experiences." }
        ]}
      ]
    },
    results: {
      sections: [
        { id: "results-hero", type: "about-hero", title: "Student Achievements", subtitle: "Recognising the academic effort, progress and achievements of our students." },
        { id: "results-stats", type: "results", title: "Academic Performance", stats: [{label: "Academic Results", value: "Results will be updated with verified academic data."}], topPerformers: [], achievements: ["Academic Results", "Student Achievements", "Competitive Examinations", "Higher-Education Progress"] }
      ]
    },
    admissions: {
      sections: [
        { id: "admissions-hero", type: "about-hero", title: "Start Your Journey With Sri GITAM", subtitle: "Explore our Intermediate programmes and take the first step towards your higher-education goals." },
        { id: "admissions-process", type: "winning-process", title: "Admission Process", steps: [
          { title: "01 Enquire", desc: "Contact our admissions team to understand the available programmes and admission requirements." },
          { title: "02 Choose Your Programme", desc: "Select MPC, BiPC, MEC or CEC based on your interests and future plans." },
          { title: "03 Counselling", desc: "Discuss your academic interests and understand the available pathway." },
          { title: "04 Submit Documents", desc: "Provide the required documents for the admission process." },
          { title: "05 Complete Admission", desc: "Complete the necessary admission formalities and begin your Intermediate journey." }
        ]},
        { id: "eligibility", type: "trust-strip", title: "Eligibility", features: [
          "Admission is subject to the applicable Intermediate admission requirements and the eligibility criteria prescribed by the college and relevant educational authorities.",
          "Previous Academic Records",
          "Transfer Certificate",
          "Identity Proof",
          "Passport-Size Photographs",
          "Other Documents Required by the College"
        ] },
        { id: "fees", type: "contact-preview", title: "Fee Information", subtitle: "Contact the admissions office for the latest fee structure, payment schedule and admission-related information." },
        { id: "admissions-contact", type: "contact", title: "Enquiry Form", showForm: true }
      ]
    },
    contact: {
      sections: [
        { id: "contact-hero", type: "about-hero", title: "Get In Touch", subtitle: "Have questions about programmes, admissions or Sri GITAM Junior College? Our team is here to help." },
        { id: "contact-full", type: "contact", title: "Contact Information", showForm: true }
      ]
    }
  },
  gallery: {
    categories: ["Campus", "Classrooms", "Laboratories", "Student Activities", "Events", "Academic Activities"],
    images: []
  },
  footer: {
    brand: {
      name: "Sri GITAM",
      subtext: "JUNIOR COLLEGE",
      description: "Building strong academic foundations for the next step in every student's journey."
    },
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", target: "home" },
          { label: "About", target: "about" },
          { label: "Academics", target: "academics" },
          { label: "Programmes", target: "programmes" },
          { label: "Why Sri GITAM", target: "why-us" },
          { label: "Campus", target: "facilities" },
          { label: "Student Life", target: "student-life" },
          { label: "Results", target: "results" },
          { label: "Admissions", target: "admissions" },
          { label: "Contact", target: "contact" }
        ]
      },
      {
        title: "Programmes",
        links: [
          { label: "MPC", target: "programmes" },
          { label: "BiPC", target: "programmes" },
          { label: "MEC", target: "programmes" },
          { label: "CEC", target: "programmes" }
        ]
      }
    ],
    contact: {
      title: "Contact",
      address: "Intell College Building, Old Kalyandurgam Road, Akkampalli Cross, Anantapur, Andhra Pradesh – 515004",
      phone: "+91 89886 86861, +91 89886 86862",
      whatsapp: "+91 89886 86861",
      email: "gitamcollege@gmail.com"
    },
    bottom: {
      copyright: "© 2026 Sri GITAM Junior College. All Rights Reserved.",
      links: []
    }
  }
};

export default sriGitamContent;
