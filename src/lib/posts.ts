export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export function getAllPosts(): Post[] {
  return [
    {
      slug: 'agenda-2063',
      title: 'Agenda 2063: The Digital Transformation of a Continent',
      description: "Exploring Africa's digital transformation journey through the lens of Agenda 2063's strategic framework and implementation progress.",
      date: '2024-12-26',
      author: 'Jamie Forrest, PhD'
    },
    {
      slug: 'ai-future',
      title: "The AI Revolution in Africa: A Path to Transformative Growth",
      description: "Exploring the unprecedented opportunities and transformative potential of artificial intelligence across African markets, with a focus on key sectors and implementation progress.",
      date: '2024-12-26',
      author: 'Jamie Forrest, PhD'
    },
    {
      slug: 'transformation-risks',
      title: "The Hidden Costs of Africa's AI Revolution: Navigating Digital Transformation Risks",
      description: "Exploring the critical challenges and potential pitfalls of Africa's digital transformation while highlighting paths toward sustainable, equitable progress.",
      date: '2024-12-26',
      author: 'Jamie Forrest, PhD'
    }
  ];
}