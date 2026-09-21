const fs = require('fs');
const path = require('path');

const content = `import './theme.css';

const gitamContent = {
  id: "gitam",
  seo: {
    title: "Sri GITAM Junior College, Anantapur | Build Your Foundation. Shape Your Future.",
    metaDescription: "A focused Intermediate education environment designed to help students strengthen their academic foundation, discover their interests and prepare confidently for the next stage of their education."
  },
  college: {
    name: "Sri GITAM Junior College",
    shortName: "Sri GITAM",
    tagline: "Build Your Foundation. Shape Your Future.",
    logo: "/gitam.png",
    location: "Anantapur, Andhra Pradesh",
    contact: {
      phone: "+91 00000 00000",
      email: "admissions@gitamjunior.example.com",
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
      { label: "Why Sri GITAM", target: "why-us", action: "navigate_to" },
      { label: "Campus", target: "facilities", action: "navigate_to" },
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
          id: "gitam-hero",
          type: "hero",
          enabled: true,
          eyebrow: "SRI GITAM JUNIOR COLLEGE · ANANTAPUR",
          title: "Build Your Foundation. Shape Your Future.",
          subtitle: "A focused Intermediate education environment designed to help students strengthen their academic foundation, discover their interests and prepare confidently for the next stage of their education.",
          heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
          primaryCta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Admissions", action: "navigate_to", target: "admissions" },
          highlights: ["Quick Highlights", "Intermediate Education", "Academic Guidance", "Career-Focused Learning", "Student Development"]
        },
        {
          id: "gitam-about",
          type: "about",
          enabled: true,
          title: "About Preview",
          headline: "Education That Builds Your Future",
          content: "Sri GITAM Junior College provides Intermediate education with a focus on academic learning, student guidance and preparation for future higher-education pathways. Students can choose from multiple academic streams based on their interests and career aspirations.",
          features: [
            "Strong academic foundation",
            "Experienced educators",
            "Structured learning",
            "Career guidance",
            "Student support",
            "Future readiness"
          ],
          image: "https://images.unsplash.com/photo-1571260899304-4250764120ec?auto=format&fit=crop&w=800&q=80",
          cta: { label: "Discover Sri GITAM", action: "navigate_to", target: "about" }
        },
        {
          id: "gitam-programmes",
          type: "programs",
          enabled: true,
          title: "Choose Your Academic Path",
          subtitle: "Explore the Intermediate pathways available to students and understand where each academic combination can lead.",
          programs: [
            { id: "mpc", name: "MPC", subjects: ["Mathematics", "Physics", "Chemistry"], description: "A foundation for students interested in engineering, technology, mathematics and physical sciences." },
            { id: "bipc", name: "BiPC", subjects: ["Biology", "Physics", "Chemistry"], description: "A foundation for students exploring medicine, life sciences, pharmacy and allied health fields." },
            { id: "mec", name: "MEC", subjects: ["Mathematics", "Economics", "Commerce"], description: "Develop quantitative, economic and commerce-oriented knowledge for future studies in business, finance and related fields." },
            { id: "cec", name: "CEC", subjects: ["Civics", "Economics", "Commerce"], description: "Build a foundation in commerce, economics, social sciences, management and related disciplines." }
          ],
          sectionCta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" }
        },
        {
          id: "gitam-why",
          type: "why-us",
          enabled: true,
          title: "Why Sri GITAM",
          subtitle: "An environment designed for student success.",
          pillars: [
            { id: "p1", title: "01 — Academic Foundation", desc: "Build strong fundamentals for higher education." },
            { id: "p2", title: "02 — Stream-Based Learning", desc: "Choose an academic pathway aligned with your interests." },
            { id: "p3", title: "03 — Academic Guidance", desc: "Receive guidance throughout your Intermediate journey." },
            { id: "p4", title: "04 — Career Direction", desc: "Understand possible pathways after Intermediate education." },
            { id: "p5", title: "05 — Focused Learning", desc: "Learn in an environment centred around academic progress." },
            { id: "p6", title: "06 — Student Development", desc: "Encourage confidence, discipline and broader personal development." }
          ]
        },
        {
          id: "admissions-cta",
          type: "admissions-cta",
          enabled: true,
          title: "Your Next Chapter Starts Here",
          subtitle: "Explore our programmes and take the first step towards your Intermediate education journey.",
          primaryCta: { label: "Begin Your Admission Journey", action: "open_admissions_modal" }
        }
      ]
    },
    about: {
      sections: [
        { id: "about-hero", type: "about-hero", title: "About Sri GITAM Junior College", subtitle: "A learning environment focused on academic foundations, student guidance and preparation for future opportunities." },
        { id: "about-intro", type: "about-content", title: "Introduction", headline: "Building Strong Foundations for Tomorrow", content: "Sri GITAM Junior College is an Intermediate education institution in Anantapur serving students at an important stage of their academic journey. The college focuses on helping students develop subject knowledge, academic discipline and clarity about their future educational pathways.\\n\\nThrough stream-based learning and academic guidance, students are encouraged to build the knowledge and confidence required for higher education." },
        { id: "about-philosophy", type: "philosophy", title: "Our Approach", headline: "Our Approach to Learning", pillars: [
          { title: "Strong Fundamentals", desc: "Develop conceptual understanding across core subjects." },
          { title: "Focused Academics", desc: "Encourage consistent learning and academic discipline." },
          { title: "Guidance & Direction", desc: "Help students understand opportunities available after Intermediate." },
          { title: "Future Readiness", desc: "Prepare students for higher education and their chosen career pathways." }
        ]},
        { id: "vision-mission", type: "vision-mission", vision: { title: "Our Vision", desc: "To create a focused learning environment where students can develop strong academic foundations, discover their potential and move confidently towards higher education and future careers." }, mission: { title: "Our Mission", desc: "To support students through quality Intermediate education, academic guidance and a learning environment that encourages knowledge, discipline, confidence and continuous growth." } }
      ]
    },
    academics: {
      sections: [
        { id: "academics-hero", type: "about-hero", title: "Learning With Purpose", subtitle: "A structured academic experience designed to strengthen concepts, encourage consistent learning and prepare students for higher education." },
        { id: "academics-journey", type: "winning-process", eyebrow: "ACADEMIC JOURNEY", title: "Academic Journey", steps: [
          { title: "01 — Understand", desc: "Build clarity in fundamental concepts." },
          { title: "02 — Learn", desc: "Develop subject knowledge through structured classroom learning." },
          { title: "03 — Practice", desc: "Strengthen understanding through regular practice." },
          { title: "04 — Evaluate", desc: "Identify areas of improvement and track academic progress." },
          { title: "05 — Prepare", desc: "Develop readiness for higher education and future examinations." }
        ]},
        { id: "academics-focus", type: "academics-preview", title: "Academic Focus", features: [
          { title: "Conceptual Understanding", desc: "Focus on understanding core concepts rather than relying only on memorisation." },
          { title: "Regular Practice", desc: "Reinforce learning through continuous academic practice." },
          { title: "Subject Focus", desc: "Develop deeper knowledge within the selected Intermediate stream." },
          { title: "Academic Guidance", desc: "Support students in understanding their academic and future pathways." }
        ]},
        { id: "academics-streams", type: "programs", title: "Academic Streams", programs: [
          { name: "MPC", subjects: ["Mathematics", "Physics", "Chemistry"] },
          { name: "BiPC", subjects: ["Biology", "Physics", "Chemistry"] },
          { name: "MEC", subjects: ["Mathematics", "Economics", "Commerce"] },
          { name: "CEC", subjects: ["Civics", "Economics", "Commerce"] }
        ], cta: null },
        { id: "future-prep", type: "about-content", title: "Future Preparation", headline: "From Intermediate to Higher Education", content: "Intermediate education is an important foundation for the next stage of a student\\'s academic journey. Students can use their chosen stream as a foundation for further studies across engineering, medicine, sciences, commerce, management, social sciences and other disciplines." }
      ]
    },
    programmes: {
      sections: [
        { id: "prog-hero", type: "about-hero", title: "Find the Right Academic Path", subtitle: "Explore the Intermediate programmes available at Sri GITAM Junior College and choose a stream that matches your interests and future goals." },
        { id: "prog-list", type: "programs", title: "Academic Streams", programs: [
          { name: "MPC", code: "MPC", title: "MPC", subtitle: "Mathematics • Physics • Chemistry", description: "MPC provides a strong foundation in mathematics and physical sciences for students interested in technical and analytical fields.\\n\\nPossible Higher-Education Pathways: Engineering, Technology, Computer Science, Mathematics, Physical Sciences, Architecture and related fields." },
          { name: "BiPC", code: "BiPC", title: "BiPC", subtitle: "Biology • Physics • Chemistry", description: "BiPC provides a foundation in biological and physical sciences for students interested in health, life sciences and related fields.\\n\\nPossible Higher-Education Pathways: Medicine, Pharmacy, Life Sciences, Biotechnology, Allied Health Sciences, Agricultural Sciences." },
          { name: "MEC", code: "MEC", title: "MEC", subtitle: "Mathematics • Economics • Commerce", description: "MEC combines mathematical, economic and commerce-oriented learning for students interested in business and analytical disciplines.\\n\\nPossible Higher-Education Pathways: Commerce, Finance, Economics, Business, Management, Accounting." },
          { name: "CEC", code: "CEC", title: "CEC", subtitle: "Civics • Economics • Commerce", description: "CEC provides a foundation in commerce, economics and social sciences for students exploring business, management and related areas.\\n\\nPossible Higher-Education Pathways: Commerce, Management, Law, Economics, Social Sciences, Business Studies." }
        ]},
        { id: "prog-cta", type: "admissions-cta", title: "Not sure which stream is right for you?", primaryCta: { label: "Talk to Admissions", action: "open_admissions_modal" } }
      ]
    },
    'why-us': {
      sections: [
        { id: "why-hero", type: "about-hero", title: "More Than a Classroom", subtitle: "An Intermediate education experience designed around learning, guidance and future preparation." },
        { id: "why-pillars", type: "why-us", title: "Six Pillars", pillars: [
          { id: "w1", title: "01 — Academic Foundation", desc: "Build a strong understanding of the subjects that form the foundation of your chosen stream." },
          { id: "w2", title: "02 — Focused Learning", desc: "Maintain attention on academic progress and consistent learning." },
          { id: "w3", title: "03 — Stream-Based Education", desc: "Follow a structured academic pathway based on your interests and future direction." },
          { id: "w4", title: "04 — Academic Guidance", desc: "Receive guidance to understand subjects, academic progress and future study options." },
          { id: "w5", title: "05 — Career Awareness", desc: "Develop awareness of the opportunities and educational pathways available after Intermediate." },
          { id: "w6", title: "06 — Student Development", desc: "Encourage confidence, responsibility, discipline and personal growth alongside academics." }
        ]},
        { id: "why-closing", type: "about-content", title: "Closing", content: "The right foundation can make the next step clearer." }
      ]
    },
    facilities: {
      sections: [
        { id: "facilities-hero", type: "about-hero", title: "A Place to Learn, Grow and Prepare", subtitle: "A supportive learning environment designed around the needs of Intermediate students." },
        { id: "facilities-list", type: "philosophy", title: "Facilities", pillars: [
          { title: "Classrooms", desc: "Spaces designed to support focused classroom learning and interaction." },
          { title: "Science Laboratories", desc: "Practical learning environments that complement science-based education." },
          { title: "Library", desc: "A learning resource space supporting reading, reference and academic preparation." },
          { title: "Learning Spaces", desc: "Dedicated environments that support individual and collaborative learning." },
          { title: "Student Facilities", desc: "Facilities designed to support students during their academic journey." },
          { title: "Campus Environment", desc: "A learning-focused environment where students can concentrate on their academic goals." }
        ]},
        { id: "gallery", type: "gallery", title: "Gallery", categories: ["Campus", "Classrooms", "Laboratories", "Student Activities", "Events", "Academic Activities"], images: [
          { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", category: "Classrooms", title: "Classrooms" },
          { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", category: "Laboratories", title: "Laboratories" },
          { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", category: "Library", title: "Library" }
        ]}
      ]
    },
    'student-life': {
      sections: [
        { id: "sl-hero", type: "about-hero", title: "Learning Beyond the Classroom", subtitle: "Student life is an important part of developing confidence, communication, teamwork and a sense of responsibility." },
        { id: "sl-activities", type: "why-us", title: "Sections", pillars: [
          { id: "sl1", title: "Academic Activities", desc: "Encourage students to participate actively in their academic journey." },
          { id: "sl2", title: "Events & Celebrations", desc: "Create opportunities for students to participate in institutional and cultural activities." },
          { id: "sl3", title: "Sports & Recreation", desc: "Encourage students to maintain balance between academics, physical activity and recreation." },
          { id: "sl4", title: "Student Engagement", desc: "Provide opportunities for students to interact, participate and develop confidence." },
          { id: "sl5", title: "Cultural Activities", desc: "Celebrate creativity, expression and student participation." }
        ]},
        { id: "sl-quote", type: "about-content", title: "Quote", headline: "Learn with purpose. Participate with confidence. Grow with every experience." }
      ]
    },
    results: {
      sections: [
        { id: "results-hero", type: "about-hero", title: "Celebrating Student Progress", subtitle: "Academic achievements reflect the effort of students, teachers and families working together towards a common goal." },
        { id: "results-stats", type: "results", title: "Achievement Categories", stats: [{label: "Academic Results", value: "Verified Data Only"}], topPerformers: [], achievements: ["Academic Results", "Student Achievements", "Competitive Examinations", "Higher-Education Progress"] },
        { id: "results-achievements", type: "about-content", title: "Student Achievement Section", headline: "Every Achievement Has a Story", content: "Showcase verified student achievements, examination performance, academic milestones and recognitions here." },
        { id: "results-cta", type: "admissions-cta", title: "Explore Our Academic Journey", primaryCta: { label: "Explore Our Academic Journey", action: "navigate_to", target: "about" } }
      ]
    },
    admissions: {
      sections: [
        { id: "admissions-hero", type: "about-hero", title: "Start Your Intermediate Journey", subtitle: "Take the first step towards choosing the right academic stream and beginning your next chapter." },
        { id: "admissions-process", type: "winning-process", title: "Admission Process", steps: [
          { title: "01 — Enquiry", desc: "Connect with the admissions team and understand the available programmes." },
          { title: "02 — Choose Your Stream", desc: "Explore MPC, BiPC, MEC and CEC based on your interests and future plans." },
          { title: "03 — Counselling", desc: "Discuss your academic interests and understand the next steps." },
          { title: "04 — Documentation", desc: "Submit the required documents for the admission process." },
          { title: "05 — Admission Confirmation", desc: "Complete the admission formalities and begin your Intermediate journey." }
        ]},
        { id: "eligibility", type: "trust-strip", title: "Admission Eligibility", features: [
          "Students seeking admission should meet the applicable Intermediate admission requirements prescribed by the relevant educational authorities and the college.",
          "Previous academic records",
          "Transfer Certificate",
          "Identity proof",
          "Passport-size photographs",
          "Other documents required by the college"
        ] },
        { id: "fees", type: "contact-preview", title: "Fee Information", subtitle: "For current fee structure and payment details, please contact the admissions office." },
        { id: "admissions-contact", type: "contact", title: "Enquiry Form", showForm: true }
      ]
    },
    contact: {
      sections: [
        { id: "contact-hero", type: "about-hero", title: "Connect With Sri GITAM", subtitle: "Have a question about admissions, programmes or the college? Get in touch with us." },
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
      description: "Building strong academic foundations and supporting students as they prepare for their next stage of education."
    },
    columns: [
      {
        title: "Explore",
        links: [
          { label: "About", target: "about" },
          { label: "Academics", target: "academics" },
          { label: "Programmes", target: "programmes" },
          { label: "Campus", target: "facilities" },
          { label: "Student Life", target: "student-life" }
        ]
      },
      {
        title: "Admissions",
        links: [
          { label: "Programmes", target: "programmes" },
          { label: "Admissions", target: "admissions" },
          { label: "Achievements", target: "results" },
          { label: "Enquire Now", action: "open_admissions_modal" }
        ]
      }
    ],
    contact: {
      title: "Contact",
      address: "Intell College Building, Old Kalyandurgam Road, Akkampalli Cross, Anantapur, Andhra Pradesh – 515004",
      phone: "+91 00000 00000",
      email: "admissions@gitamjunior.example.com"
    },
    bottom: {
      copyright: "© 2026 Sri GITAM Junior College. All rights reserved.",
      links: [
        { label: "Privacy Policy", target: "privacy" },
        { label: "Terms", target: "terms" }
      ]
    }
  }
};

export default gitamContent;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'colleges', 'gitam', 'content.js'), content);
