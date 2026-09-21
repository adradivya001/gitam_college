import './theme.css';

const tejaContent = {
  id: "teja",
  seo: {
    title: "Teja Junior College",
    metaDescription: "Teja Junior College provides a focused Intermediate education environment designed to strengthen academic fundamentals."
  },
  college: {
    name: "Teja Junior College",
    shortName: "Teja",
    tagline: "Build Strong Concepts. Shape Your Future.",
    logo: "/teja-logo.png", // Ensure this exists or fallback
    location: "Anantapur, Andhra Pradesh",
    contact: {
      phone: "9948567527, 9490859421",
      email: "info@tejajuniorcollege.edu.in", // Configurable fallback
      address: "Raghuveera Towers, ANANTAPURAMU.",
      mapUrl: ""
    }
  },
  navigation: {
    brand: {
      name: "TEJA JUNIOR COLLEGE",
      subtext: "",
      hideText: false,
      fullLogo: false
    },
    links: [
      { label: "Home", target: "", action: "navigate_to_route" },
      { label: "About", target: "about", action: "navigate_to_route" },
      { label: "Academics", target: "academics", action: "navigate_to_route" },
      { label: "Programmes", target: "programmes", action: "navigate_to_route" },
      { label: "Why Teja", target: "why-teja", action: "navigate_to_route" },
      { label: "Campus", target: "campus", action: "navigate_to_route" },
      { label: "Student Life", target: "student-life", action: "navigate_to_route" },
      { label: "Results", target: "results", action: "navigate_to_route" },
      { label: "Admissions", target: "admissions", action: "navigate_to_route" },
      { label: "Contact", target: "contact", action: "navigate_to_route" }
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
          id: "teja-hero",
          type: "sg-hero",
          enabled: true,
          eyebrow: "TEJA JUNIOR COLLEGE",
          title: "Build Strong Concepts.\nShape Your Future.",
          subtitle: "Teja Junior College provides a focused Intermediate education environment designed to strengthen academic fundamentals, encourage disciplined learning and prepare students for their next stage of education.",
          heroImage: "/teja/gallery/smart_classrooms_1789976999081.jpg", // Using placeholder image
          primaryCta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Apply Now", action: "open_admissions_modal" },
          highlights: [
            { icon: "BookOpen", label: "Intermediate Education" },
            { icon: "Target", label: "Concept-Based Learning" },
            { icon: "Compass", label: "Academic Guidance" },
            { icon: "Users", label: "Student Development" }
          ]
        },
        {
          id: "teja-about",
          type: "sg-about",
          enabled: true,
          title: "Building Strong Academic Foundations",
          headline: "A Foundation for the Next Step",
          content: "Teja Junior College focuses on creating a strong academic foundation through structured learning, subject understanding and consistent preparation for higher education.\n\n• Strong subject fundamentals\n• Structured classroom learning\n• Regular academic practice\n• Student guidance\n• Examination preparation\n• Future academic awareness",
          features: [],
          image: "/teja/gallery/smart_classrooms_1789976999081.jpg",
          cta: { label: "Learn More About Teja", action: "navigate_to", target: "about" }
        },
        {
          id: "teja-programmes",
          type: "sg-programmes",
          enabled: true,
          title: "Choose the Right Academic Path",
          subtitle: "Explore our configurable intermediate programmes.",
          programs: [
            { id: "mpc", name: "MPC", subjects: "Mathematics • Physics • Chemistry", description: "Mathematics, Physics and Chemistry based Intermediate pathway designed for students interested in engineering, technology and other science-oriented higher education options.\n\nPossible Pathways: Engineering, Technology, Physical Sciences, Architecture.", bgColor: "var(--color-sg-peach)", icon: "Atom" },
            { id: "bipc", name: "BiPC", subjects: "Biology • Physics • Chemistry", description: "Biology, Physics and Chemistry based pathway for students interested in medicine, life sciences and related fields.\n\nPossible Pathways: Medicine, Pharmacy, Biotechnology, Life Sciences.", bgColor: "var(--color-sg-sage)", icon: "Dna" },
            { id: "mec", name: "MEC", subjects: "Mathematics • Economics • Commerce", description: "Mathematics, Economics and Commerce oriented pathway supporting higher education in commerce, management, economics and related fields.\n\nPossible Pathways: Commerce, Finance, Economics, Business, Management.", bgColor: "var(--color-sg-sand)", icon: "BarChart2" },
            { id: "cec", name: "CEC", subjects: "Civics • Economics • Commerce", description: "Commerce, Economics and Civics oriented pathway supporting students interested in commerce, business, management and related areas.\n\nPossible Pathways: Commerce, Management, Law, Economics, Social Sciences.", bgColor: "var(--color-sg-lavender)", icon: "Users" }
          ],
          cta: { label: "Explore Programmes →", action: "navigate_to", target: "programmes" }
        },
        {
          id: "teja-why",
          type: "sg-why",
          enabled: true,
          eyebrow: "WHY TEJA",
          title: "More Than Just Classroom Learning",
          subtitle: "Our core pillars for student development and academic success.",
          pillars: [
            { title: "01 Strong Fundamentals", desc: "Building a solid base of core concepts." },
            { title: "02 Focused Learning", desc: "A structured approach to academics." },
            { title: "03 Regular Evaluation", desc: "Continuous assessment to track progress." },
            { title: "04 Academic Guidance", desc: "Mentorship and direction for every student." },
            { title: "05 Personal Attention", desc: "Individual focus to ensure understanding." },
            { title: "06 Future Preparation", desc: "Readiness for higher education and beyond." }
          ],
          cta: { label: "Learn More", action: "navigate_to", target: "why-teja" }
        },
        {
          id: "teja-results",
          type: "sg-stats",
          enabled: true,
          title: "Student Progress & Achievements",
          subtitle: "Academic Performance and Student Achievements will be updated as verified data becomes available.",
          stats: [
            { label: "Academic Performance", value: "—", suffix: "" },
            { label: "Student Achievements", value: "—", suffix: "" },
            { label: "Year-wise Results", value: "—", suffix: "" },
            { label: "Notable Progress", value: "—", suffix: "" }
          ],
          cta: { label: "View All Results →", action: "navigate_to", target: "results" }
        },
        {
          id: "teja-process",
          type: "sg-process",
          enabled: true,
          eyebrow: "ACADEMIC APPROACH",
          title: "Learning With Purpose",
          steps: [
            { title: "Understand", desc: "Build conceptual understanding." },
            { title: "Learn", desc: "Structured classroom learning." },
            { title: "Practice", desc: "Regular academic practice." },
            { title: "Evaluate", desc: "Periodic evaluation." },
            { title: "Improve", desc: "Focus on academic progress." },
            { title: "Prepare", desc: "Examination and future preparation." }
          ]
        },
        {
          id: "teja-admissions-cta",
          type: "sg-admissions-cta",
          enabled: true,
          eyebrow: "YOUR NEXT STEP",
          title: "Begin Your Journey With Teja",
          subtitle: "Take the first step towards a focused Intermediate education.",
          primaryCta: { label: "Apply Now", action: "open_admissions_modal" },
          secondaryCta: { label: "Contact Us", action: "navigate_to", target: "contact" },
          image: "/teja/gallery/smart_classrooms_1789976999081.jpg"
        }
      ]
    },
    about: {
      sections: [
        { id: "about-hero", type: "about-hero", title: "Building Strong Academic Foundations", subtitle: "Teja Junior College focuses on creating a strong academic foundation through structured learning, subject understanding and consistent preparation for higher education." },
        { id: "about-intro", type: "about-content", title: "A Foundation for the Next Step", content: "• Strong subject fundamentals\n• Structured classroom learning\n• Regular academic practice\n• Student guidance\n• Examination preparation\n• Future academic awareness" }
      ]
    },
    academics: {
      sections: [
        {
          id: "academics-hero",
          type: "about-hero",
          eyebrow: "ACADEMICS",
          title: "Strong Foundations. Focused Learning.",
          subtitle: "Build strong subject fundamentals through structured learning, regular practice and consistent academic preparation."
        },
        {
          id: "academics-intro",
          type: "academic-intro",
          eyebrow: "OUR APPROACH",
          title: "Building Strong Academic Foundations",
          content: "Teja Junior College focuses on developing strong academic fundamentals through structured learning, subject understanding, regular practice and consistent preparation."
        },
        {
          id: "academics-journey",
          type: "winning-process",
          eyebrow: "THE LEARNING JOURNEY",
          title: "A Structured Approach to Academic Progress",
          description: "Guide students from understanding fundamental concepts to consistent practice, evaluation and preparation for their next academic stage.",
          steps: [
            { n: "01", h: "Understand", label: "Concept Clarity", p: "Concept Clarity" },
            { n: "02", h: "Learn", label: "Knowledge Building", p: "Knowledge Building" },
            { n: "03", h: "Practice", label: "Skill Development", p: "Skill Development" },
            { n: "04", h: "Evaluate", label: "Academic Progress", p: "Academic Progress" },
            { n: "05", h: "Prepare", label: "Future Readiness", p: "Future Readiness" }
          ]
        },
        {
          id: "academics-pathways",
          type: "programs",
          eyebrow: "OUR PROGRAMMES",
          title: "Choose Your Academic Path",
          description: "Explore Intermediate pathways aligned with students' academic interests and future goals.",
          programs: [
            { id: "mpc", name: "MPC", subjects: "Mathematics • Physics • Chemistry", bgColor: "var(--color-sg-peach)", icon: "Atom" },
            { id: "bipc", name: "BiPC", subjects: "Biology • Physics • Chemistry", bgColor: "var(--color-sg-sage)", icon: "Dna" },
            { id: "mec", name: "MEC", subjects: "Mathematics • Economics • Commerce", bgColor: "var(--color-sg-sand)", icon: "BarChart2" },
            { id: "cec", name: "CEC", subjects: "Civics • Economics • Commerce", bgColor: "var(--color-sg-lavender)", icon: "Users" }
          ]
        },
        {
          id: "academics-focus",
          type: "academic-focus",
          eyebrow: "ACADEMIC FOCUS",
          title: "What Drives Academic Growth",
          features: [
            { icon: "Brain", h: "Conceptual Understanding", p: "Build a clear understanding of important subject concepts." },
            { icon: "Target", h: "Regular Practice", p: "Strengthen knowledge through consistent academic practice." },
            { icon: "TrendingUp", h: "Academic Progress", p: "Identify areas for improvement and work towards steady progress." },
            { icon: "Compass", h: "Future Preparation", p: "Build the academic foundation required for higher education." }
          ]
        },
        {
          id: "academics-cta",
          type: "cta-banner",
          title: "Build Your Academic Foundation With Teja",
          desc: "Explore the Intermediate pathways available at Teja Junior College.",
          primaryLabel: "Explore Programmes",
          primaryTarget: "programmes"
        }
      ]
    },
    programmes: {
      sections: [
        { id: "prog-hero", type: "about-hero", title: "Choose the Right Academic Path", subtitle: "Explore our configurable intermediate programmes." },
        { id: "prog-list", type: "programs", title: "Academic Streams", programs: [
          { name: "MPC", code: "MPC", title: "MPC", subtitle: "Mathematics • Physics • Chemistry", description: "Mathematics, Physics and Chemistry based Intermediate pathway designed for students interested in engineering, technology and other science-oriented higher education options.\n\nPossible Pathways: Engineering, Technology, Physical Sciences, Architecture.", bgColor: "#F8E9E3", icon: "Atom" },
          { name: "BiPC", code: "BiPC", title: "BiPC", subtitle: "Biology • Physics • Chemistry", description: "Biology, Physics and Chemistry based pathway for students interested in medicine, life sciences and related fields.\n\nPossible Pathways: Medicine, Pharmacy, Biotechnology, Life Sciences.", bgColor: "#EAF2EE", icon: "Dna" },
          { name: "MEC", code: "MEC", title: "MEC", subtitle: "Mathematics • Economics • Commerce", description: "Mathematics, Economics and Commerce oriented pathway supporting higher education in commerce, management, economics and related fields.\n\nPossible Pathways: Commerce, Finance, Economics, Business, Management.", bgColor: "#F5EFE3", icon: "BarChart2" },
          { name: "CEC", code: "CEC", title: "CEC", subtitle: "Civics • Economics • Commerce", description: "Commerce, Economics and Civics oriented pathway supporting students interested in commerce, business, management and related areas.\n\nPossible Pathways: Commerce, Management, Law, Economics, Social Sciences.", bgColor: "#F0ECF6", icon: "Users" }
        ]}
      ]
    },
    'why-us': {
      sections: [
        { id: "why-hero", type: "about-hero", title: "More Than Just Classroom Learning", subtitle: "A focused environment designed to support academic learning, guidance and student development." },
        { id: "why-pillars", type: "why-us", title: "Our Pillars", pillars: [
          { id: "w1", title: "01 Strong Fundamentals", desc: "Building a solid base of core concepts." },
          { id: "w2", title: "02 Focused Learning", desc: "A structured approach to academics." },
          { id: "w3", title: "03 Regular Evaluation", desc: "Continuous assessment to track progress." },
          { id: "w4", title: "04 Academic Guidance", desc: "Mentorship and direction for every student." },
          { id: "w5", title: "05 Personal Attention", desc: "Individual focus to ensure understanding." },
          { id: "w6", title: "06 Future Preparation", desc: "Readiness for higher education and beyond." }
        ]}
      ]
    },
    facilities: {
      sections: [
        { id: "facilities-hero", type: "about-hero", title: "Learning Beyond the Classroom", subtitle: "Explore the learning environment and facilities that support the Intermediate education journey." },
        { id: "facilities-list", type: "philosophy", title: "Facilities", pillars: [
          { title: "Classrooms", desc: "Learning spaces designed to support focused classroom education.", icon: "BookOpen" },
          { title: "Laboratories", desc: "Practical learning spaces that complement science-based academic programmes.", icon: "FlaskConical" },
          { title: "Library", desc: "A resource environment supporting reading, reference and academic learning.", icon: "BookMarked" },
          { title: "Learning Spaces", desc: "Spaces that support individual study, academic activities and collaborative learning.", icon: "Layers" },
          { title: "Student Facilities", desc: "Facilities intended to support students throughout their academic journey.", icon: "Users" },
          { title: "Campus Environment", desc: "A focused and safe environment for student growth.", icon: "Map" }
        ]}
      ]
    },
    'student-life': {
      sections: [
        { id: "sl-hero", type: "about-hero", title: "Student Life at Teja", subtitle: "Academic growth is strengthened by participation, interaction, creativity and personal development." },
        { id: "sl-activities", type: "why-us", title: "Activities", pillars: [
          { id: "sl1", title: "Academic Activities", desc: "Encourage students to actively participate in their academic journey." },
          { id: "sl2", title: "Student Engagement", desc: "Create opportunities for students to interact, participate and build confidence." },
          { id: "sl3", title: "Sports & Recreation", desc: "Encourage students to maintain a healthy balance between academic responsibilities and physical activity." },
          { id: "sl4", title: "Cultural Activities", desc: "Encourage creativity, expression and participation in cultural experiences." },
          { id: "sl5", title: "Events", desc: "Provide opportunities for students to participate in institutional events." },
          { id: "sl6", title: "Student Experiences", desc: "Building skills and memories that last a lifetime." }
        ]}
      ]
    },
    results: {
      sections: [
        { id: "results-hero", type: "about-hero", title: "Student Progress & Achievements", subtitle: "Recognising the academic effort, progress and achievements of our students." }
      ]
    },
    admissions: {
      sections: [
        { id: "admissions-hero", type: "about-hero", title: "Begin Your Journey With Teja", subtitle: "Admission eligibility is subject to the applicable Intermediate education requirements and college admission guidelines." },
        { id: "admissions-process", type: "winning-process", eyebrow: "ADMISSIONS", title: "Admission Process", steps: [
          { title: "01 — Enquire", desc: "Contact our admissions team." },
          { title: "02 — Choose Programme", desc: "Select from MPC, BiPC, MEC, CEC." },
          { title: "03 — Counselling", desc: "Academic guidance and consultation." },
          { title: "04 — Submit Documents", desc: "Provide necessary academic records." },
          { title: "05 — Complete Admission", desc: "Finalize your enrollment." }
        ]}
      ]
    },
    contact: {
      sections: [
        { id: "contact-hero", type: "about-hero", title: "Get in Touch With Teja Junior College", subtitle: "Our team is here to help you with any questions." }
      ]
    }
  },
  gallery: {
    images: [
      { src: "/teja/gallery/campus_kamalanagar_1789976860423.jpg", category: "Campus" },
      { src: "/teja/gallery/campus_ramnagar_1789977013402.jpg", category: "Campus" },
      { src: "/teja/gallery/girls_campus_1789977026225.jpg", category: "Campus" },
      { src: "/teja/gallery/smart_classrooms_1789976999081.jpg", category: "Classrooms" },
      { src: "/teja/gallery/sports_field_1789977041806.jpg", category: "Campus" },
      { src: "/teja/gallery/student_activities_1789977201922.jpg", category: "Academic Activities" }
    ]
  },
  footer: {
    brand: {
      description: "Empowering Students. Shaping Futures."
    },
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", target: "" },
          { label: "About", target: "about" },
          { label: "Academics", target: "academics" },
          { label: "Programmes", target: "programmes" },
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
      address: "Raghuveera Towers, ANANTAPURAMU.",
      phone: "9948567527, 9490859421",
      email: "info@tejajuniorcollege.edu.in"
    },
    bottom: {
      copyright: "© Teja Junior College. All Rights Reserved."
    }
  },
  faq: [
    { q: "What programmes are available at Teja Junior College?", a: "Teja Junior College offers multiple Intermediate programmes. Please check the Programmes page for detailed information." },
    { q: "How can I enquire about admission?", a: "You can contact the admissions office directly by phone or email. You can also fill in the enquiry form on our website." },
    { q: "What documents are required for admission?", a: "You may need previous academic records, a transfer certificate, identity proof, passport-size photographs and any other documents required by the college. Contact the admissions office for the most current requirements." },
    { q: "How can I contact the admissions team?", a: "You can reach the Teja admissions team using the contact details provided." },
    { q: "Where is Teja Junior College located?", a: "Teja Junior College is located in Anantapur, Andhra Pradesh." }
  ]
};

export default tejaContent;
