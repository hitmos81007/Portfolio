type CertificateImage = {
  title: string;
  issuer: string;
  image: string;
  source?: string;
};

function linkedinPost(activityId: string) {
  return `https://www.linkedin.com/feed/update/urn:li:activity:${activityId}/`;
}

export const certificateGallery: CertificateImage[] = [
  {
    title: "Machine Learning Internship",
    issuer: "Edufyi Tech Solutions",
    image: "/certificates/edufyi-machine-learning-internship.webp",
    source: linkedinPost("7477005218954772480"),
  },
  {
    title: "Introduction to Internet of Things",
    issuer: "NPTEL · IIT Kharagpur",
    image: "/certificates/nptel-internet-of-things.webp",
    source: linkedinPost("7528438220880220161"),
  },
  {
    title: "Getting Started with Competitive Programming",
    issuer: "NPTEL · IIT Gandhinagar",
    image: "/certificates/nptel-competitive-programming.webp",
    source: linkedinPost("7528438220880220161"),
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-machine-learning.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "Deep Learning Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-deep-learning.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "Image Processing Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-image-processing.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-matlab.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "Calculations with Vectors and Matrices",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-matlab-vectors-matrices.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "Simulink Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-simulink.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "Simscape Onramp",
    issuer: "MathWorks Training Services",
    image: "/certificates/mathworks-simscape.webp",
    source: linkedinPost("7528435129116176384"),
  },
  {
    title: "C++ Bootcamp",
    issuer: "LetsUpgrade",
    image: "/certificates/letsupgrade-cpp.webp",
    source: linkedinPost("7528430778616209410"),
  },
  {
    title: "GenAI 101: Mastering LLMs",
    issuer: "LetsUpgrade",
    image: "/certificates/letsupgrade-genai.webp",
    source: linkedinPost("7528430778616209410"),
  },
  {
    title: "Python Using AI Workshop",
    issuer: "AI for Techies",
    image: "/certificates/python-using-ai.webp",
    source: linkedinPost("7500520258559119360"),
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Walmart Global Tech · Forage",
    image: "/certificates/walmart-software-engineering.webp",
    source: linkedinPost("7421097613971636224"),
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS · Forage",
    image: "/certificates/aws-solutions-architecture.webp",
    source: linkedinPost("7420989356498382848"),
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte Australia · Forage",
    image: "/certificates/deloitte-technology.webp",
    source: linkedinPost("7420814088785747968"),
  },
  {
    title: "Winter Internship Technical Training Program 2026",
    issuer: "India Space Lab",
    image: "/certificates/india-space-lab-training.webp",
    source: linkedinPost("7500519531140771840"),
  },
  {
    title: "Internship Common Aptitude Test",
    issuer: "ICAT · Participation",
    image: "/certificates/icat-participation.webp",
    source: linkedinPost("7500527216544460800"),
  },
  {
    title: "Internal Smart India Hackathon 2025",
    issuer: "Vel Tech High Tech · Best Idea Presentation Award",
    image: "/certificates/sih-2025-best-idea.webp",
    source: linkedinPost("7500522467296280576"),
  },
  {
    title: "24-Hour Internal Smart India Hackathon 2026",
    issuer: "Vel Tech High Tech · Participation",
    image: "/certificates/sih-2026-participation.webp",
    source: linkedinPost("7518209293901303808"),
  },
  {
    title: "Bharatiya Antariksh Hackathon 2026",
    issuer: "ISRO and Hack2Skill · Participation",
    image: "/certificates/bharatiya-antariksh-hackathon.webp",
    source: linkedinPost("7500521273299648512"),
  },
  {
    title: "SAMHITA’26 Hackathon",
    issuer: "Madras Institute of Technology, Anna University · Participation",
    image: "/certificates/samhita-hackathon.webp",
    source: linkedinPost("7500527919253958657"),
  },
  {
    title: "ITERXY’26 Hackathon",
    issuer: "St. Joseph’s College of Engineering · Participation",
    image: "/certificates/iterxy-hackathon.webp",
    source: linkedinPost("7528459098019913728"),
  },
  {
    title: "Binary Brains Build, Code, Innovate",
    issuer: "SIMATS Engineering · Participation",
    image: "/certificates/binary-brains-hackathon.webp",
    source: linkedinPost("7528459098019913728"),
  },
  {
    title: "Signal Shift 2K26",
    issuer: "SIMATS Engineering · Participation",
    image: "/certificates/signal-shift-hackathon.webp",
    source: linkedinPost("7528459098019913728"),
  },
  {
    title: "Zephoria’25 Project Expo",
    issuer: "Vel Tech High Tech · Participation",
    image: "/certificates/zephoria-2025.webp",
    source: linkedinPost("7528456588710563840"),
  },
  {
    title: "Zephoria’26 Project Expo",
    issuer: "Vel Tech High Tech · Participation",
    image: "/certificates/zephoria-2026.webp",
    source: linkedinPost("7528456588710563840"),
  },
  {
    title: "Crevante 2K26 Business Plan",
    issuer: "Vel Tech High Tech · Certificate of Appreciation",
    image: "/certificates/crevante-business-plan.webp",
    source: linkedinPost("7528456588710563840"),
  },
  {
    title: "General Proficiency · First Rank",
    issuer: "St. John’s Matric. Hr. Sec. School · Class XII, 2024–25",
    image: "/certificates/st-johns-academic-excellence.webp",
  },
  {
    title: "English Speech · First Place",
    issuer: "St. John’s Matric. Hr. Sec. School · Class XII, 2024–25",
    image: "/certificates/st-johns-english-elocution-2024.webp",
  },
  {
    title: "Chandrayaan-3 Essay · First Place",
    issuer: "St. John’s Matric. Hr. Sec. School · Class XI, 2023–24",
    image: "/certificates/st-johns-chandrayaan-3-essay.webp",
  },
  {
    title: "English Speech · First Place",
    issuer: "St. John’s Matric. Hr. Sec. School · Class X, 2022–23",
    image: "/certificates/st-johns-english-speech-2023.webp",
  },
];
