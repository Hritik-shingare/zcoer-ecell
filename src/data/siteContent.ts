import blogMentorshipImg from '../assets/blogs/mentorship.jpg';
import blogPitchImg from '../assets/blogs/pitch.jpg';
import blogProductImg from '../assets/blogs/product.jpg';
import communityImg from '../assets/community.jpg';
import eventBootcampImg from '../assets/events/bootcamp.jpg';
import eventHackathonImg from '../assets/events/hackathon.jpg';
import eventInvestorMixerImg from '../assets/events/investormixer.jpg';
import eventMasterclassImg from '../assets/events/masterclass.jpg';
import eventPitchArenaImg from '../assets/events/pitcharena.jpg';
import campuskiteLogo from '../assets/startups/campuskite.svg';
import ecochargeLogo from '../assets/startups/ecocharge.svg';
import nexalogixLogo from '../assets/startups/nexalogix.svg';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  format: string;
  location: string;
  description: string;
  image: string;
  images?: string[];
}

export const events: EventItem[] = [
  { id: 'pitch-perfect', title: 'Pitch Perfect', date: '25 August 2026', month: 'AUG', day: '25', format: 'Pitch competition', location: 'ZCOER Auditorium', description: 'Present your venture to a panel of operators, investors, and incubator partners for direct feedback.', image: '/assets/events/Pitch perfect/DSC03584.JPG', images: ['/assets/events/Pitch perfect/DSC03584.JPG', '/assets/events/Pitch perfect/DSC03568.JPG', '/assets/events/Pitch perfect/DSC03583.JPG'] },
  { id: 'induction-program', title: 'Induction Program', date: '09 October 2026', month: 'OCT', day: '09', format: 'Orientation', location: 'ZCOER Campus', description: 'An introductory program for first-year students, introducing them to E-Cell, its activities, opportunities, and upcoming events.', image: '/assets/events/Induction program/DSC03564.JPG', images: ['/assets/events/Induction program/DSC03564.JPG', '/assets/events/Induction program/DSC03565.JPG', '/assets/events/Induction program/DSC03411.JPG'] },
  { id: 'illuminate-workshop', title: 'Illuminate Workshop', date: '15 October 2026', month: 'OCT', day: '15', format: 'Hands-on workshop', location: 'Innovation Lab', description: 'Work through validation, unit economics, and a practical 90-day execution plan for your venture.', image: '/assets/events/illuminate2025/IMG_2563.jpg', images: ['/assets/events/illuminate2025/IMG_2563.jpg', '/assets/events/illuminate2025/IMG_2577.jpg', '/assets/events/illuminate2025/IMG_2567.jpg'] },
];

export interface StartupItem {
  id: string;
  name: string;
  category: string;
  stage: string;
  description: string;
  story: string;
  logo: string;
}

export const startups: StartupItem[] = [
  { id: 'campuskite', name: 'CampusKite', category: 'EdTech and tools', stage: 'Idea to validation', description: 'An AI-driven peer-learning and academic resource network built for engineering students.', story: 'CampusKite is exploring how course communities can make revision, peer support, and trusted learning resources more accessible for every student.', logo: campuskiteLogo },
  { id: 'ecocharge', name: 'EcoCharge', category: 'CleanTech and IoT', stage: 'Prototype', description: 'Smart modular battery-swapping infrastructure and telemetry for electric two-wheelers.', story: 'EcoCharge is developing a practical way to reduce charging downtime with a campus-scale battery swapping system and usable fleet telemetry.', logo: ecochargeLogo },
  { id: 'nexalogix', name: 'NexaLogix', category: 'DeepTech and robotics', stage: 'Prototype', description: 'Autonomous indoor-navigation rovers for smart warehouse logistics and tracking.', story: 'NexaLogix applies approachable robotics and sensor fusion to repetitive warehouse movement, tracking, and delivery problems.', logo: nexalogixLogo },
];

export interface ArticleSection {
  heading?: string;
  text: string;
  quote?: string;
  image?: string;
  imageCaption?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  image: string;
  images?: string[];
  body: string[];
  sections?: ArticleSection[];
}

export const articles: ArticleItem[] = [
  {
    id: 'zuckerberg-image-overhaul',
    title: 'Rebranding, Trust, and Technology: Examining Zuckerberg’s Image Overhaul',
    category: 'Founder journey',
    readTime: '6 min read',
    description: 'A deep dive into how Mark Zuckerberg overhauled his public persona, navigated historic congressional scrutiny, and pivoted Meta towards the metaverse and AI.',
    image: '/assets/blogs/zuckerberg/zuckerberg-hearing.png',
    images: [
      '/assets/blogs/zuckerberg/zuckerberg-hearing.png',
      '/assets/blogs/zuckerberg/meta-ai-keynote.png',
      '/assets/blogs/zuckerberg/zuckerberg-surfing.png',
      '/assets/blogs/zuckerberg/meta-controversies-infographic.png',
      '/assets/blogs/zuckerberg/meta-ecosystem.png',
    ],
    body: [
      'Mark Zuckerberg, the CEO of Facebook (now Meta), has undergone a deliberate transformation to reshape public perception of himself and his company. In the face of growing scrutiny over Facebook’s impact on society, Zuckerberg has aimed to project a more transparent and empathetic image. This rebranding is particularly evident in his approach during the 2018 congressional hearings, where he openly acknowledged Facebook’s failings regarding data privacy and misinformation. By apologizing publicly and stating, “We didn’t do enough to prevent these tools from being used for harm,” he aimed to demonstrate accountability. This marked a shift from the often distant and tech-driven persona to one that acknowledged the human and societal implications of Facebook’s operations.',
      'Another key step in this rebranding journey was Zuckerberg’s 2017 cross-country tour to engage with diverse communities and perspectives. Visiting small towns and hosting discussions, he attempted to present himself as a relatable leader committed to understanding the lives of ordinary people. The tour, documented in videos and posts, was seen as an effort to humanize his image and counter the perception of him as a detached billionaire. Additionally, Zuckerberg’s philanthropic initiatives, such as the pledge to donate 99% of his Facebook shares to societal causes, further cemented his commitment to addressing global challenges. His philanthropic focus on personalized education and health highlighted his willingness to address deeper societal issues beyond the scope of Meta’s business operations.',
      'Despite these efforts, Zuckerberg and Meta continue to face criticism for controversies that have significantly tarnished their reputation. The Cambridge Analytica scandal, where data from 87 million users was misused, remains one of the most damaging incidents in Meta’s history. Coupled with allegations of monopolistic practices, the spread of misinformation, and mental health concerns related to its platforms, these issues have raised questions about the company’s priorities. Zuckerberg’s leadership style, often described as “move fast and break things,” has also come under fire for prioritizing growth over user safety and security. While his apologies and attempts at reform have been noted, critics argue that meaningful changes—such as simplifying privacy settings and fostering transparency—are still lacking.',
      'In recent years, Zuckerberg has pivoted Meta’s focus to the metaverse and artificial intelligence, rebranding the company to align with his vision of a virtual future. This ambitious shift involves a multi-billion dollar investment in creating immersive virtual and augmented reality experiences. While the metaverse promises groundbreaking applications in education, entertainment, and social interaction, it also raises concerns about data privacy and potential monopolization of virtual spaces. Zuckerberg’s portrayal of this move as an opportunity to build a new digital frontier is part of his broader effort to position Meta as a forward-thinking leader in technology. However, challenges persist, as other tech giants like Microsoft and Apple also compete in this space.',
      'Finally, Zuckerberg’s rebranding efforts illustrate the broader challenges leaders face when attempting to reshape public perception. Psychological factors such as confirmation bias influence how audiences interpret his actions, with many skeptics dismissing his transparency and philanthropic endeavors as damage control. However, his case demonstrates how CEOs can shape their companies’ narratives, for better or worse, by aligning their personal branding with their organization’s evolving goals. For Zuckerberg, the battle for trust remains ongoing, as Meta navigates the balance between innovation, public accountability, and ethical leadership.',
    ],
    sections: [
      {
        heading: 'The 2018 Congressional Testimony & Shift Towards Accountability',
        text: 'Mark Zuckerberg, the CEO of Facebook (now Meta), has undergone a deliberate transformation to reshape public perception of himself and his company. In the face of growing scrutiny over Facebook’s impact on society, Zuckerberg has aimed to project a more transparent and empathetic image. This rebranding is particularly evident in his approach during the 2018 congressional hearings, where he openly acknowledged Facebook’s failings regarding data privacy and misinformation. By apologizing publicly and stating, “We didn’t do enough to prevent these tools from being used for harm,” he aimed to demonstrate accountability. This marked a shift from the often distant and tech-driven persona to one that acknowledged the human and societal implications of Facebook’s operations.',
        quote: '“We didn’t do enough to prevent these tools from being used for harm. That was my mistake, and I’m sorry.” — Mark Zuckerberg',
        image: '/assets/blogs/zuckerberg/zuckerberg-hearing.png',
        imageCaption: 'Facebook chief Mark Zuckerberg testifies in the historic 2018 congressional hearing, facing intense questions regarding user privacy and institutional governance.',
      },
      {
        heading: 'Humanizing the Image: Cross-Country Tours, Philanthropy, and Viral PR',
        text: 'Another key step in this rebranding journey was Zuckerberg’s 2017 cross-country tour to engage with diverse communities and perspectives. Visiting small towns and hosting discussions, he attempted to present himself as a relatable leader committed to understanding the lives of ordinary people. The tour, documented in videos and posts, was seen as an effort to humanize his image and counter the perception of him as a detached billionaire. Additionally, Zuckerberg’s philanthropic initiatives, such as the pledge to donate 99% of his Facebook shares to societal causes, further cemented his commitment to addressing global challenges. His philanthropic focus on personalized education and health highlighted his willingness to address deeper societal issues beyond the scope of Meta’s business operations.',
        image: '/assets/blogs/zuckerberg/zuckerberg-surfing.png',
        imageCaption: 'Mark Zuckerberg surfs and sips beer in a tux for a viral July 4 video, projecting a lighter, relatable, and meme-friendly persona.',
      },
      {
        heading: 'Persistent Controversies & The Trust Deficit',
        text: 'Despite these efforts, Zuckerberg and Meta continue to face criticism for controversies that have significantly tarnished their reputation. The Cambridge Analytica scandal, where data from 87 million users was misused, remains one of the most damaging incidents in Meta’s history. Coupled with allegations of monopolistic practices, the spread of misinformation, and mental health concerns related to its platforms, these issues have raised questions about the company’s priorities. Zuckerberg’s leadership style, often described as “move fast and break things,” has also come under fire for prioritizing growth over user safety and security. While his apologies and attempts at reform have been noted, critics argue that meaningful changes—such as simplifying privacy settings and fostering transparency—are still lacking.',
        image: '/assets/blogs/zuckerberg/meta-controversies-infographic.png',
        imageCaption: 'Key controversies surrounding Meta’s global dynamics: privacy policy updates, hate speech scrutiny, and data compliance disputes.',
      },
      {
        heading: 'The Metaverse & Meta AI: Engineering the Next Era',
        text: 'In recent years, Zuckerberg has pivoted Meta’s focus to the metaverse, rebranding the company to align with his vision of a virtual future. This ambitious shift involves a multi-billion dollar investment in creating immersive virtual and augmented reality experiences. While the metaverse promises groundbreaking applications in education, entertainment, and social interaction, it also raises concerns about data privacy and potential monopolization of virtual spaces. Zuckerberg’s portrayal of this move as an opportunity to build a new digital frontier is part of his broader effort to position Meta as a forward-thinking leader in technology. However, challenges persist, as other tech giants like Microsoft and Apple also compete in this space.',
        image: '/assets/blogs/zuckerberg/meta-ai-keynote.png',
        imageCaption: 'Mark Zuckerberg unveils Meta AI with Voice, positioning Meta at the cutting edge of consumer artificial intelligence and spatial computing.',
      },
      {
        heading: 'The Psychology of Perception and the Future of Leadership',
        text: 'Finally, Zuckerberg’s rebranding efforts illustrate the broader challenges leaders face when attempting to reshape public perception. Psychological factors such as confirmation bias influence how audiences interpret his actions, with many skeptics dismissing his transparency and philanthropic endeavors as damage control. However, his case demonstrates how CEOs can shape their companies’ narratives, for better or worse, by aligning their personal branding with their organization’s evolving goals. For Zuckerberg, the battle for trust remains ongoing, as Meta navigates the balance between innovation, public accountability, and ethical leadership.',
        image: '/assets/blogs/zuckerberg/meta-ecosystem.png',
        imageCaption: 'Meta’s unified multi-platform ecosystem spanning Facebook, Instagram, WhatsApp, and next-generation immersive tech.',
      },
    ],
  },
  { id: 'aurora-pitch-story', title: 'From Campus Pitch to Seed Funding', category: 'Founder journey', readTime: '5 min read', description: 'How student teams can turn early feedback into a clearer story, stronger proof, and the next useful conversation.', image: blogPitchImg, body: ['A good student pitch begins with a problem close enough to observe. The strongest early teams keep their first claim narrow, speak with users often, and record what changes their assumptions.', 'Momentum comes from small evidence: a prototype people return to, a pilot that solves one painful workflow, or a partner willing to introduce the team to the next customer.', 'The goal of a campus pitch is not to perform certainty. It is to show that the team can learn quickly, make disciplined choices, and move from insight to a useful experiment.'] },
  { id: 'student-production-systems', title: 'Building Production Systems as a Student Developer', category: 'Tech and product', readTime: '6 min read', description: 'A practical way to grow a project from a weekend prototype into a product that people can rely on.', image: blogProductImg, body: ['The shift from a prototype to a product starts with choosing what must stay dependable. Authentication, data ownership, error states, and clear feedback are usually more important than the next visual flourish.', 'Build small vertical slices. Give one user a complete path from intent to outcome, learn where it breaks, and improve that flow before expanding scope.', 'Production thinking is not about using the most tools. It is about making intentional trade-offs, documenting constraints, and respecting the people who rely on the system.'] },
  { id: 'what-investors-look-for', title: 'What Investors Look For in First-Time Student Founders', category: 'Venture insights', readTime: '4 min read', description: 'The questions behind market sizing, early traction, and why a team is particularly suited to a problem.', image: blogMentorshipImg, body: ['Early conversations are often about clarity, not polish. Can the team explain a specific user problem, why it matters now, and what they have learned that others might miss?', 'Investors look for evidence of speed and honesty. A team that names its risks, tests its assumptions, and changes direction with good reason is easier to support than one that claims every answer is settled.', 'For student founders, the advantage is proximity to emerging behavior. Use that access to interview users, run small pilots, and build a learning loop that compounds.'] },
];

export const resources = [
  { title: 'Startup India learning portal', type: 'Government resource', description: 'Explore startup guides, policy information, and the national entrepreneurship ecosystem.', url: 'https://www.startupindia.gov.in/' },
  { title: 'Y Combinator startup library', type: 'Founder playbook', description: 'Straightforward essays and talks on ideation, product, fundraising, and company building.', url: 'https://www.ycombinator.com/library' },
  { title: 'Google for Startups', type: 'Product and growth', description: 'Programs, training, and resources for founders building technology products.', url: 'https://startup.google.com/' },
  { title: 'GitHub Student Developer Pack', type: 'Developer tools', description: 'Access tools and learning resources available to verified students.', url: 'https://education.github.com/pack' },
  { title: 'AWS Activate', type: 'Cloud credits', description: 'Discover startup support, cloud training, and infrastructure resources.', url: 'https://aws.amazon.com/startups/credits' },
];

export const teamRoles = [
  { role: 'Strategy and operations', description: 'Shapes the yearly roadmap, partner relationships, and the systems behind every E-Cell initiative.' },
  { role: 'Events and community', description: 'Designs welcoming, useful experiences that bring student builders, mentors, and founders together.' },
  { role: 'Startup support', description: 'Helps early teams turn a rough idea into customer conversations, prototypes, and pitch-ready ventures.' },
  { role: 'Content and design', description: 'Documents learning, shares founder stories, and keeps the E-Cell experience clear and consistent.' },
  { role: 'Technology', description: 'Builds the digital tools and workflows that make programs and opportunities easier to access.' },
  { role: 'Faculty and mentors', description: 'Offers context, connections, and grounded guidance while students lead the work.' },
];

export const galleryItems = [
  { image: eventHackathonImg, title: 'E-Summit build floor' },
  { image: eventMasterclassImg, title: 'Founder-led learning session' },
  { image: eventPitchArenaImg, title: 'Student pitch arena' },
  { image: eventInvestorMixerImg, title: 'Community and investor mixer' },
  { image: eventBootcampImg, title: 'Venture-building bootcamp' },
  { image: communityImg, title: 'The student builder community' },
];
