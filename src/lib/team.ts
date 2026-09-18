export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  years: string;
  initials: string;
  photo?: string;
  featured?: boolean;
  bio?: string;
};

/** Portraits extracted from the client team deck. */
export const teamMembers: TeamMember[] = [
  {
    name: "Ajay Kumar",
    role: "Director & Principal Urban Landscape Designer",
    focus: "Landscape master plans across residential, commercial, campus and urban scales",
    years: "30+ yrs",
    initials: "AK",
    photo: "/images/team/ajay-kumar.png",
    featured: true,
    bio: "With over three decades of professional practice, Ajay Kumar stands as a pioneering figure in Indian urban landscaping. Trained in India, he has dedicated his career to the balance between built environments and natural ecosystems. As Director and Principal Urban Landscape Designer at Hind Landscape Co., he leads planning, design and execution of sophisticated landscape master plans — with academic work focused on sustainable, climate-resilient methods for dense megacities.",
  },
  {
    name: "Nisha Rao",
    role: "Design Director",
    focus: "Landscape urbanism expert",
    years: "Director",
    initials: "NR",
    photo: "/images/team/nisha-rao.png",
  },
  {
    name: "Sanjay Kumar",
    role: "Chief Horticulturist & Site Manager",
    focus: "Plant health, nursery selection and on-site delivery",
    years: "Chief",
    initials: "SK",
    photo: "/images/team/sanjay-kumar.png",
  },
  {
    name: "Sunil Agarwal",
    role: "Design Director",
    focus: "Experiential landscape expert",
    years: "Director",
    initials: "SA",
    photo: "/images/team/sunil-agarwal.png",
  },
  {
    name: "Pankaj Kumar",
    role: "Senior Architect",
    focus: "Expert at private residences and estates",
    years: "Senior",
    initials: "PK",
    photo: "/images/team/pankaj-kumar.png",
  },
  {
    name: "Arvind Kumar",
    role: "Design Director",
    focus: "Sustainable and resilient design specialist",
    years: "Director",
    initials: "AR",
    photo: "/images/team/arvind-kumar.png",
  },
  {
    name: "Neha Yadav",
    role: "Senior Design Director",
    focus: "Principal planner — institutional & master development",
    years: "Senior",
    initials: "NY",
    photo: "/images/team/neha-yadav.png",
  },
  {
    name: "Pooja Jain",
    role: "Senior Architect",
    focus: "Expert at government and township projects",
    years: "Senior",
    initials: "PJ",
    photo: "/images/team/pooja-jain.png",
  },
  {
    name: "Sandeep Hooda",
    role: "Chief Landscape Engineer",
    focus: "Technical detailing, grading and construction coordination",
    years: "Chief",
    initials: "SH",
    photo: "/images/team/sandeep-hooda.png",
  },
  {
    name: "Anjali Tanwar",
    role: "Landscape Architect",
    focus: "Schematic design, planting plans and site drawings",
    years: "Architect",
    initials: "AT",
    photo: "/images/team/anjali-tanwar.png",
  },
  {
    name: "Rizwan Siddique",
    role: "Landscape Architect",
    focus: "Design development and site coordination",
    years: "Architect",
    initials: "RS",
    photo: "/images/team/rizwan-siddique.png",
  },
];
