const gitamContent = {
  id: "gitam",
  seo: {
    title: "GITAM Junior College, Anantapur | Shape Your Future",
    metaDescription: "A focused Intermediate learning environment designed to build strong academic foundations and prepare students for their next stage of education."
  },
  college: {
    name: "GITAM Junior College",
    shortName: "GITAM",
    tagline: "Shape Your Future With Confidence",
    logo: "/gitam.png",
    location: "Anantapur, Andhra Pradesh",
    contact: {
      phone: "+91 00000 00000",
      email: "admissions@gitamjunior.example.com",
      address: "GITAM Junior College Campus, Anantapur, Andhra Pradesh",
      workingHours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    }
  },
  navigation: {
    brand: {
      name: "GITAM",
      subtext: "JUNIOR COLLEGE",
      hideText: true,
      fullLogo: true
    },
    links: [
      { label: "Home", target: "home", action: "navigate_to" },
      { label: "About GITAM", target: "about", action: "navigate_to" },
      { label: "Academics", target: "academics", action: "navigate_to" },
      { label: "Programmes", target: "programmes", action: "navigate_to" },
      { label: "Campus", target: "facilities", action: "navigate_to" },
      { label: "Student Life", target: "student-life", action: "navigate_to" },
      { label: "Achievements", target: "results", action: "navigate_to" },
      { label: "Admissions", target: "admissions", action: "navigate_to" },
      { label: "Contact", target: "contact", action: "navigate_to" }
    ],
    cta: {
      label: "Apply for Admission",
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
          eyebrow: "GITAM JUNIOR COLLEGE",
          title: "Shape Your Future With Confidence",
          subtitle: "A focused Intermediate learning environment designed to build strong academic foundations and prepare students for their next stage of education.",
          heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
          primaryCta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Admissions", action: "navigate_to", target: "admissions" },
          highlights: ["Academic Excellence", "Career Guidance", "Student Development"]
        },
        {
          id: "gitam-about",
          type: "about",
          enabled: true,
          title: "About GITAM",
          headline: "Preparing Students for What Comes Next",
          content: "The college is an institution focused on Intermediate education, academic development, career awareness and student growth.",
          features: [
            "Strong academic foundation",
            "Experienced educators",
            "Structured learning",
            "Career guidance",
            "Student support",
            "Future readiness"
          ],
          image: "https://images.unsplash.com/photo-1571260899304-4250764120ec?auto=format&fit=crop&w=800&q=80",
          cta: { label: "Learn More", action: "navigate_to", target: "about" }
        },
        {
          id: "gitam-why",
          type: "why-us",
          enabled: true,
          title: "Why GITAM",
          subtitle: "An environment designed for student success.",
          pillars: [
            { id: "p1", title: "Academic Focus", desc: "Strong emphasis on understanding subjects and developing academic fundamentals." },
            { id: "p2", title: "Experienced Faculty", desc: "Learning supported by qualified and experienced educators." },
            { id: "p3", title: "Structured Learning", desc: "A disciplined and organised approach to Intermediate education." },
            { id: "p4", title: "Career Guidance", desc: "Helping students understand opportunities after Intermediate." },
            { id: "p5", title: "Student Support", desc: "Guidance throughout the academic journey." },
            { id: "p6", title: "Future Readiness", desc: "Preparing students to make informed decisions about higher education." }
          ]
        },
        {
          id: "gitam-programmes",
          type: "programs",
          enabled: true,
          title: "Academic Programmes",
          subtitle: "Explore the Intermediate pathways available to students and understand where each academic combination can lead.",
          programs: [
            { id: "mpc", name: "MPC", subjects: ["Mathematics", "Physics", "Chemistry"], description: "Possible pathways: Engineering, Technology, Physical Sciences, Mathematics-related fields" },
            { id: "bipc", name: "BiPC", subjects: ["Biology", "Physics", "Chemistry"], description: "Possible pathways: Medicine, Life Sciences, Biological Sciences, Allied fields" },
            { id: "mec", name: "MEC", subjects: ["Mathematics", "Economics", "Commerce"], description: "Possible pathways: Commerce, Economics, Business, Management, Finance-related fields" },
            { id: "cec", name: "CEC", subjects: ["Civics", "Economics", "Commerce"], description: "Possible pathways: Commerce, Management, Humanities, Social Sciences" }
          ],
          cta: { label: "View All Programmes", action: "navigate_to", target: "programmes" }
        },
        {
          id: "gitam-academics",
          type: "academics-preview",
          enabled: true,
          title: "Learning With Purpose",
          subtitle: "A purpose-driven approach to education.",
          features: [
            { title: "Concept Building", desc: "Understanding concepts rather than relying only on memorisation." },
            { title: "Subject Mastery", desc: "Building confidence across core Intermediate subjects." },
            { title: "Regular Assessment", desc: "Tracking academic understanding and progress." },
            { title: "Academic Support", desc: "Helping students overcome learning difficulties." },
            { title: "Career Guidance", desc: "Connecting Intermediate education with future academic pathways." }
          ]
        },
        {
          id: "gitam-pathways",
          type: "student-experience",
          enabled: true,
          title: "Where Can Your Journey Take You?",
          subtitle: "This should communicate possible pathways, not guaranteed outcomes.",
          content: "We help students build the awareness needed to pursue diverse fields.",
          features: [
            { title: "Engineering", icon: "laptop" },
            { title: "Medicine & Life Sciences", icon: "heart" },
            { title: "Science & Research", icon: "flask" },
            { title: "Commerce", icon: "pie-chart" },
            { title: "Management", icon: "briefcase" },
            { title: "Design", icon: "pen-tool" },
            { title: "Defence", icon: "shield" },
            { title: "Humanities", icon: "book" }
          ],
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "gitam-facilities",
          type: "campus-preview",
          enabled: true,
          title: "A Place to Learn and Grow",
          subtitle: "Designed for Focused Learning",
          tabs: [
            { label: "Classrooms", title: "Classrooms", desc: "Air-conditioned classrooms.", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" },
            { label: "Laboratories", title: "Laboratories", desc: "Science labs for practical learning.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" },
            { label: "Library", title: "Library", desc: "Resources to support the curriculum.", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" },
            { label: "Sports", title: "Sports", desc: "Sports facilities.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" }
          ],
          cta: { label: "Explore Facilities", action: "navigate_to", target: "facilities" }
        },
        {
          id: "gitam-student-life",
          type: "student-life-preview",
          enabled: true,
          title: "Life Beyond the Classroom",
          subtitle: "Life Beyond the Classroom",
          statement: "Life Beyond the Classroom",
          substatement: "Academic activities, events, and student development.",
          categories: ["Academic activities", "Events", "Sports", "Cultural activities", "Career-awareness"],
          activities: [
            { title: "Academic Activities", desc: "Seminars and guidance sessions." },
            { title: "Sports", desc: "Physical activities for holistic development." },
            { title: "Events", desc: "Cultural and college events." }
          ],
          cta: { label: "Explore Student Life", action: "navigate_to", target: "student-life" }
        },
        {
          id: "gitam-results",
          type: "results",
          enabled: true,
          title: "Celebrating Student Success",
          subtitle: "Celebrating student effort and progress.",
          stats: [
            { label: "Academic Results", value: "Verified Data Placeholder" },
            { label: "Subject Toppers", value: "Verified Data Placeholder" }
          ],
          cta: { label: "View Results", action: "navigate_to", target: "results" }
        },
        {
          id: "gitam-admissions-cta",
          type: "admissions-cta",
          enabled: true,
          title: "Begin Your Journey",
          subtitle: "Explore the right academic pathway and take the next step towards your future.",
          primaryCta: { label: "Explore Programmes", action: "navigate_to", target: "programmes" },
          secondaryCta: { label: "Enquire Now", action: "open_admissions_modal" }
        }
      ]
    },
    about: {
      sections: [
        { id: "about-hero", type: "about-hero", title: "Building Strong Foundations for the Future", subtitle: "An overview of the institution, its educational focus and its approach to Intermediate education.", eyebrow: "ABOUT GITAM" },
        { id: "story", type: "story-layout", title: "Our Story", content: "The institution's role in Intermediate education, academic development, student guidance, career awareness, and future preparation." },
        { id: "approach", type: "commitment-layout", title: "An Approach Focused on Students", features: [{title: "Academic Foundation", desc: "Build strong subject fundamentals."}, {title: "Individual Support", desc: "Help students address academic challenges."}, {title: "Career Awareness", desc: "Help students understand future choices."}, {title: "Future Readiness", desc: "Prepare students for higher education and career pathways."}] },
        { id: "faculty", type: "faculty", title: "Guidance From Experienced Educators", subtitle: "Subject expertise, academic guidance, student support, career awareness, and goal-oriented learning.", members: [] },
        { id: "values", type: "mission-vision-layout", title: "What We Value", values: ["Learning", "Discipline", "Integrity", "Growth", "Guidance", "Opportunity"] },
        { id: "career", type: "student-experience", title: "Helping Students Understand What's Next", subtitle: "Explain that students need to understand their options after Intermediate.", features: [{title: "Engineering"}, {title: "Medicine"}, {title: "Science"}, {title: "Commerce"}, {title: "Management"}, {title: "Design"}, {title: "Defence"}, {title: "Humanities"}] }
      ]
    },
    academics: {
      sections: [
        { id: "academics-hero", type: "about-hero", title: "Learning With Purpose", subtitle: "Strong fundamentals, structured learning and guidance for the next stage of education." },
        { id: "learning-approach", type: "academics-preview", title: "Learning Approach", features: [{title:"Concept Building", desc:"Develop clarity in fundamental concepts."}, {title:"Subject Mastery", desc:"Build deeper understanding of core subjects."}, {title:"Regular Assessment", desc:"Use assessments to understand academic progress."}, {title:"Doubt Support", desc:"Provide opportunities to clarify difficult concepts."}, {title:"Academic Guidance", desc:"Help students stay focused on their academic goals."}] },
        { id: "subject-focus", type: "programs", title: "Subject Areas", programs: [{name: "Science", subjects: ["Mathematics", "Physics", "Chemistry", "Biology"]}, {name: "Commerce / Humanities", subjects: ["Economics", "Commerce", "Civics"]}] },
        { id: "support", type: "trust-strip", title: "Academic Support", features: ["Academic guidance", "Student mentoring", "Doubt clarification", "Progress support", "Career guidance"] },
        { id: "beyond", type: "student-experience", title: "Education Beyond the Textbook", subtitle: "Students need more than subject knowledge. They also need awareness of higher education, entrance examinations and career opportunities." }
      ]
    },
    programmes: {
      sections: [
        { id: "programmes-hero", type: "about-hero", title: "Academic Programmes", subtitle: "Explore the Intermediate combinations and understand the future pathways associated with each one." },
        { id: "all-programmes", type: "programs", title: "Our Programmes", programs: [
          { name: "MPC", subjects: ["Mathematics", "Physics", "Chemistry"], description: "A science-focused combination for students interested in mathematics, physical sciences, engineering and technology-related pathways." },
          { name: "BiPC", subjects: ["Biology", "Physics", "Chemistry"], description: "A biology-focused combination for students interested in medicine, life sciences and related fields." },
          { name: "MEC", subjects: ["Mathematics", "Economics", "Commerce"], description: "A combination that brings together mathematics, economics and commerce, supporting pathways related to business, commerce, economics and management." },
          { name: "CEC", subjects: ["Civics", "Economics", "Commerce"], description: "A commerce/social-science-oriented combination supporting future pathways in commerce, management, humanities and related fields." }
        ]},
        { id: "comparison", type: "winning-process", title: "Programme Comparison", steps: [{title:"MPC", desc:"Science & Mathematics -> Engineering, Technology"}, {title:"BiPC", desc:"Biological Sciences -> Medicine, Life Sciences"}, {title:"MEC", desc:"Business & Economics -> Commerce, Management"}, {title:"CEC", desc:"Commerce & Social Sciences -> Management, Humanities"}] },
        { id: "admissions-cta", type: "admissions-cta", title: "Take the Next Step", primaryCta: { label: "ENQUIRE NOW", action: "open_admissions_modal" } }
      ]
    },
    facilities: {
      sections: [
        { id: "facilities-hero", type: "about-hero", title: "Campus & Facilities", subtitle: "An environment designed to support focused learning and student development." },
        { id: "gallery", type: "gallery", title: "Campus Facilities", categories: ["Classrooms", "Laboratories", "Library", "Computer Facilities", "Sports", "Student Support"], images: [
          { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", category: "Classrooms", title: "Focused Learning Spaces", caption: "Air-conditioned classrooms." },
          { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", category: "Laboratories", title: "Learning Through Practice" },
          { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", category: "Library", title: "Library & Learning Resources" },
          { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", category: "Sports", title: "Sports & Recreation" }
        ]},
        { id: "contact-preview", type: "contact-preview" }
      ]
    },
    'student-life': {
      sections: [
        { id: "sl-hero", type: "about-hero", title: "Life at GITAM", subtitle: "Learning, interaction and experiences beyond the classroom." },
        { id: "sl-activities", type: "student-life-preview", title: "Academic Activities", statement: "Life Beyond the Classroom", substatement: "Seminars, Guidance sessions, Academic events, Career-awareness sessions", categories: ["Academic activities", "Events", "Sports", "Cultural activities", "Career-awareness activities"] },
        { id: "sl-development", type: "academics-preview", title: "Growing Beyond Academics", features: [{title: "Communication"}, {title: "Leadership"}, {title: "Confidence"}, {title: "Personality development"}, {title: "Career awareness"}] },
        { id: "gallery", type: "gallery", title: "Gallery", categories: ["Events & Engagement", "Sports & Recreation", "Cultural Activities"], images: [] }
      ]
    },
    results: {
      sections: [
        { id: "results-hero", type: "about-hero", title: "Student Achievements", subtitle: "Recognising academic effort, progress and achievement." },
        { id: "results-stats", type: "results", title: "Celebrating Student Success", stats: [{label: "Academic Results", value: "Verified Data Only"}], topPerformers: [], achievements: ["Academic Results", "Subject Toppers", "Academic Achievements", "Competitive Examination Achievements"] }
      ]
    },
    admissions: {
      sections: [
        { id: "admissions-hero", type: "about-hero", title: "Begin Your Journey", subtitle: "Take the next step towards your Intermediate education." },
        { id: "admissions-programs", type: "programs", title: "Choose Your Programme", programs: [{name: "MPC"}, {name: "BiPC"}, {name: "MEC"}, {name: "CEC"}], cta: { label: "Explore Programme", action: "navigate_to", target: "programmes" } },
        { id: "admissions-process", type: "winning-process", title: "Admission Guidance", steps: [{title: "01 — Enquire", desc: "Submit your enquiry."}, {title: "02 — Choose Programme", desc: "Select the academic combination aligned with your interests."}, {title: "03 — Counselling", desc: "Discuss academic and future options."}, {title: "04 — Complete Admission", desc: "Complete the required admission formalities."}] },
        { id: "eligibility", type: "trust-strip", title: "Eligibility & Documents Required", features: ["Previous academic documents", "Identity document", "Photographs", "Transfer certificate"] },
        { id: "fees", type: "contact-preview", title: "Fee Information", subtitle: "Contact Admissions for Current Fee Details." },
        { id: "admissions-contact", type: "contact", title: "Enquiry Form", showForm: true }
      ]
    },
    contact: {
      sections: [
        { id: "contact-hero", type: "about-hero", title: "Get in Touch", subtitle: "Have questions about programmes, admissions or the college? Connect with us." },
        { id: "contact-full", type: "contact", title: "Contact Information", showForm: true }
      ]
    }
  },
  gallery: {
    categories: ["Classrooms", "Laboratories", "Library", "Computer Facilities", "Sports", "Student Support"],
    images: [
      { id: "g1", src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", category: "Classrooms", title: "Focused Learning Spaces", caption: "Air-conditioned classrooms." },
      { id: "g2", src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80", category: "Laboratories", title: "Learning Through Practice", caption: "Physics, Chemistry and Biology Labs." },
      { id: "g3", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", category: "Library", title: "Library & Learning Resources", caption: "Dedicated learning resource space." },
      { id: "g4", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", category: "Sports", title: "Sports & Recreation", caption: "Verified sports facilities." }
    ]
  },
  footer: {
    brand: {
      name: "GITAM",
      subtext: "JUNIOR COLLEGE",
      description: "Building strong academic foundations and supporting students as they prepare for their next stage of education."
    },
    columns: [
      {
        title: "Explore",
        links: [
          { label: "About GITAM", target: "about" },
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
      address: "GITAM Junior College Campus, Anantapur, Andhra Pradesh",
      phone: "+91 00000 00000",
      email: "admissions@gitamjunior.example.com"
    },
    bottom: {
      copyright: "© 2026 GITAM Junior College. All rights reserved.",
      links: [
        { label: "Privacy Policy", target: "privacy" },
        { label: "Terms", target: "terms" }
      ]
    }
  }
};

export default gitamContent;
