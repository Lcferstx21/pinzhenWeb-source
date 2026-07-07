export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: number;
  instructors: string[];
  location: string;
  term: string;
  description: { text: string; bold?: boolean }[] | string;
  images?: { src: string; size: "large" | "small" }[];
  collaborator?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "sister-no-sister",
    title: "Sister No Sister",
    subtitle: "Between body skin and queer spatial surface",
    tags: ["#Performance", "#Drawing"],
    year: 2024,
    instructors: ["Mark Anderson", "Arnel Sancianco", "C. Greig Crysler"],
    location: "UC Berkeley, CED \n Arch 204, Arch239, Theater 179",
    term: "2024 Spring",
    description: [
      {
        text: `You are my twin sister, when I am you, I aspire to be born,
Yet voices decree,
To induce, to miscarry, I am denied to be born.
Inhumane instruments intrude,
Separating me from you, from mother,
Mother pleads with voice low and keen,
The nurse’s long eyelashes remain unmoved,
Turning a blind eye to the murder,
But my dear sister,
Please forgive my grimness,
Within you lies an eternal trait,
To my relief, you were never born.

I am your mother, when you are me, yet you attempt to escape,
How distant, how suspicious the light that impregnated you,
When the judge declares you cannot reject childbirth,
Across borders of Ohio you flee, 
Into the secret clinic hidden in the alley,
I was once a part of you, now taken away,
My dear mother, what you bear was not me,
But the shackles of modernity.

My mother, my sister,
Your eyes are like two wounds,
Only when I curl up in pain in your eyes,
Can I see your ankles, your breasts,
Your slightly swollen belly
And the umbilical cord wrapped around your neck.

Named woman, in expectations we're confined,
The orange-red light stares down upon us,
Manipulaed by invisible puppet strings,
Mortal flesh is constantly replaced,
Everything is disappearing, everything assimilating,
Every mother born from a mother
Will eventually perish from birth.\n\n\n\n`,
      },
      { text: "ABSTRACTION\n", bold: true },
      {
        text: `
The work attempts to respond to the inherent societal normalization of bodies, particularly in the context of reproductive rights and gender roles. This proposal serves as a reflection on female body politics and urges a reconsideration of the body's role within societal and spatial contexts. It juxtaposes the standardized female characters in China's shift from the one-child policy to the three-child policy encouragement, alongside the varying stances and policies on abortion across different U.S. states. Some policies claim to liberate women's reproductive rights while still regulating them. This highlights how modern society transforms 'people' into 'population' and controls individual sexual behavior. Regardless of the positive or negative stance, these policies ultimately restrict and instrumentalize women as societal reproductive tools.`,
      },
    ],
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister2.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister6.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister7.webp`,
        size: "small",
      },

      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister3.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister4.webp`,
        size: "large",
      },

      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister5.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister8.webp`,
        size: "small",
      },
      // video
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister9.mp4`,
        size: "large",
      },

      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister10.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister11.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister12.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister13.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister14.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister15.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister16.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister17.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister18.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister19.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister20.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister21.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister22.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister23.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister24.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister25.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/sisterNoSister/sisterNoSister26.webp`,
        size: "small",
      },

      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns1.webp`, size: "large" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns2.webp`, size: "small" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns3.webp`, size: "small" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns4.webp`, size: "small" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns5.webp`, size: "small" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns6.webp`, size: "large" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns7.webp`, size: "large" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns8.webp`, size: "small" },
      // { src: `${import.meta.env.BASE_URL}imgPrj/sns/sns9.webp`, size: "small" },
      // {
      //   src: `${import.meta.env.BASE_URL}imgPrj/sns/sns10.webp`,
      //   size: "large",
      // },
      // {
      //   src: `${import.meta.env.BASE_URL}imgPrj/sns/sns11.webp`,
      //   size: "large",
      // },
    ],
  },
  {
    id: "library-of-silenced-voices",
    title: "Library Of Silenced Voices",
    subtitle: "memorial space for media freedom",
    tags: ["#Memorial Space"],
    year: 2019,
    instructors: ["Jianing Zhang", "Xinyu Cao", "Kun Zhang"],
    location: "Istanbul",
    term: "2019 Summer",
    collaborator: "Zhang Yicheng",
    description: `Khashoggi is a Saudi-born journalist at the Washington Post, who opposes the country's current crown prince, insists on a free press and writes regularly about the state of affairs.
On October 2, 2018, Khashoggi entered the Saudi consulate in Istanbul and was immediately controlled and dismembered by Saudi agents while he was on conscious.

The disappearance of Khashoggi is not only the disappearance of a media reporter but also the reduction of the diversity of media information under the unequal power. From this, we aim to commemorate the disappearing journalist and his voice.
`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices1.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices2.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices3.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices4.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices6.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices7.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/libraryOfSilencedVoices/libraryOfSilencedVoices8.webp`,
        size: "small",
      },
    ],
  },
  {
    id: "lobotomized-city",
    title: "Lobotomized City",
    subtitle: "Fictionalized urban body politics",
    tags: ["#Urban", "#Drawing"],
    year: 2023,
    instructors: ["Raveevarn \n Choksombatchai"],
    location: "UC Berkeley, CED \n Arch 229",
    term: "2023 Fall",
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity1.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity2.webp`,
        size: "small",
      },

      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity3.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity4.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/lobotomizedCity/lobotomizedCity6.webp`,
        size: "large",
      },
    ],
    description: `Each city undergoes lobotomy.

Beneath its skin, the acquiescent disease deteriorates.

Parcelled land remains unoccupied.

A vestige of unwarranted accusation remains.

Matters under consideration have not yet manifested.

Arbitrary infrastructure persists solely as delirious bonds.

Attempts to conceal only exacerbate its conspicuous contagion.`,
  },
  {
    id: "mirage-in-the-mirror",
    title: "Mirage In The Mirror",
    subtitle: "Urban daily life as a performance",
    tags: ["#Theater"],
    year: 2023,
    instructors: ["Elizabeth Bishop"],
    location: "UC Berkeley, CED \n Arch 203",
    term: "2023 Fall",
    collaborator: "Jeremy Chen",
    description: `This project aims to redefine urban structures
by implementing operable facades that seamlessly integrate with the dynamic street activity while reflecting the ever-changing sky into the building, and vice versa.

The design concept underscores transparency, openness, and street performance as central elements, creating a symbiotic relationship between the built environment and the vibrant life of the city.`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror2.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror3.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror4.webp`,
        size: "small",
      },

      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror5.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror6.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror7.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror8.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror9.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror10.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/mirageInTheMirror/mirageInTheMirror11.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "fishing-house",
    title: "Fishing House",
    subtitle: "Experiment of Rural Locality ",
    tags: ["#Single-Family House"],
    year: 2023,
    instructors: [],
    location: "Hepu Island, Zhejiang, China",
    term: "2023",
    collaborator: "Yicheng Zhang",
    description: `Situated on a rural island in South China, the project contends with unique challenges posed by the coastal climate, stringent county appearance regulations, a restricted client budget, and the isolated construction environment. These constraints serve as both barriers and catalysts, driving the development of a distinctly localized form and intricate detailing.

At every scale, from structural elements to furniture and even the skirting line, each design decision is meticulously crafted to honor the traditional fishing lifestyle of the local community while also envisioning the future living needs and aspirations of the clients.
`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse2.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse3.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse4.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/fishingHouse/fishingHouse6.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "mass-of-glow",
    title: "Mass Of Glow",
    subtitle: "Lighting as spatial division",
    tags: ["#Single-Family House"],
    year: 2020,
    instructors: ["Rudabeh Pakravan", "Lisa M.Iwamoto"],
    location: "UC Berkeley, CED \n Arch 200A, 269",
    term: "2020 Fall",
    images: [
      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow1.webp`,
        size: "large",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow3.webp`,
        size: "small",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow2.gif`,
        size: "small",
      },

      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow6.webp`,
        size: "large",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow4.webp`,
        size: "small",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/massOfGlow/massOfGlow7.webp`,
        size: "small",
      },
    ],

    description: `Besides a solid wall, what else can be the boundary?

The boundaries inside the round residence are made of an orthometric system. And all the single boundary is thickened beyond a wall, into the functional elements.

The thickened boundaries are divided into void boundaries and solid boundaries. 

The void boundaries divide the space through lighting effects; The solid boundaries are the lightwells that provide both physical division and lighting effect, which are furthered developed and proved to be attainable.`,
  },

  {
    id: "orpheus-and-eurydice",
    title: "Orpheus And Eurydice",
    subtitle: "Fabricated Urban Furniture",
    tags: ["#Furniture"],
    year: 2019,
    instructors: [
      "Tim Lai and Yen-cheng Lu \n from University Stuttgart, ITECH",
    ],
    location: "",
    term: "2019 Summer",
    collaborator: "Zilin Zhou \n Yicheng Zhang",
    description: `Carbon-fibre Weaving Assistant: Nanjia Jiang

In this research, we made rules. 
Within the rule, the whole state got influenced though changing parameters. In the phase of form-finding, there was a rule to generate boundaries from geometry. In the phase of pattern-finding, there was a rule to weave divided points on boundaries in sequence. 
Based on the inherent material properties of fibers, this research explored the flexibility of form-finding, specific syntax pattern and application potential provided by the new materials. 
`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice1.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice2.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice3.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice4.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice6.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice7.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice8.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice9.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice10.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/orpheusAndEurydice/orpheusAndEurydice11.webp`,
        size: "large",
      },
    ],
  },

  {
    id: "through-veiled-eyes",
    title: "Through Veiled Eyes",
    subtitle: "between housing and the urban commons",
    tags: ["#Multi-Family Housing"],
    year: 2021,
    instructors: ["Rudabeh Pakravan"],
    location: "UC Berkeley, CED \n Arch 201",
    term: "2021 Fall",
    description: `In the Bay Area, accessibility between housing and urban commons is a great issue. The connection between neighborhoods and pedestrians is fading away after freeway segregations and redlining zoning policies. The crisis is typical on Oakland Broadway, where housing and urban commons are clearly divided. Thickness and intersection of the space hardly happen. 

As Walter Benjamin calls the “space between the building fronts”, the proposal searches for ambiguous living conditions, a kissing and re-orientated space between the interior and urban environment. Instead of creating dividing boundaries, the proposal investigates the building front as an active connection between the large-scale housing and the urban commons.`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes2.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes3.gif`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes4.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes5.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/throughVeiledEyes/throughVeiledEyes6.webp`,
        size: "small",
      },
    ],
  },
  {
    id: "phantom-of-chapel",
    title: "Phantom Of Chapel",
    subtitle: "Reciprocity of the San Giovanni",
    tags: ["#Renovation"],
    year: 2022,
    instructors: [],
    location: "",
    term: "2022 Spring",
    collaborator: "Tianchen Xu \n Paul Wang",
    description: `At the moment, the San Giovanni in Val di Lago is represented as an octagonal enclosed structure of walls without a roof covering. A new life of the chapel can be brought by connecting with new structure to accommodate programs of a pilgrim center. 
    
  The proposal suggests the new structure that both corresponds to the existing structure and reflects a contemporary instance of historic reuse by the operations of reversal and connection. The new structure serves as a stop on their route to the Holy See for the pilgrims to relate their journey today to the historic pilgrimage and the religious life of the inhabitants of the old settlements of San Lorenzo. `,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel2.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel3.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel4.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/phantomOfChapel/phantomOfChapel6.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "anna-in-the-tropics",
    title: "Anna In The Tropics",
    subtitle: "",
    tags: ["#Scenic Design"],
    year: 2024,
    instructors: ["Arnel Sancianco"],
    location: "UC Berkeley, tdps \n Theater 179",
    term: "2024 Spring",
    description: "",
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics2.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics3.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics4.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics5.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics6.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics7.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics8.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics9.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics10.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/annaInTheTropics/annaInTheTropics11.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "opera-of-heent",
    title: "Opera Of Heent",
    subtitle: "",
    tags: ["#Performance", "#Drawing"],
    year: 2022,
    instructors: [],
    location: "",
    term: "2022",
    description: "",
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/operaOfHeent/operaOfHeent1.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "hedda-gabler",
    title: "Hedda Gabler",
    subtitle: "",
    tags: ["#Scenic Design"],
    year: 2024,
    instructors: ["Arnel Sancianco"],
    location: "UC Berkeley, tdps \n Theater 179",
    term: "2024 Spring",
    description: "",
    images: [
      {
        src: `${import.meta.env.BASE_URL}imgPrj/heddaGabLer/heddaGabLer1.webp`,
        size: "large",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/heddaGabLer/heddaGabLer2.webp`,
        size: "large",
      },
      {
        src: `${import.meta.env.BASE_URL}imgPrj/heddaGabLer/heddaGabLer3.webp`,
        size: "large",
      },
    ],
  },
  {
    id: "bubbeled-tears",
    title: "Bubbeled Tears",
    subtitle: "wearable emotion transformer",
    tags: ["#Object"],
    year: 2022,
    instructors: ["Jill Miller"],
    location: "ART and NEWMEDIA C166",
    term: "2022 Spring",
    description: `The wearable device is designed to transform personal emotion into a more visible, sensible, and approachable signal to attract surrounding attention. When the passive event happens silently, the emotion keeps others away. It also brings out a difficult position for the individual to ask for help. The emotion would be accumulated, leading to a worse condition. As a product of passive emotion, the tear is proposed to be transformed into the opposite side signal, the bubble. After the collection, the transportation, the decomposition of the tear into the bubble, the personal emotion is emitted to the social environment to get more connection. From tear to bubble, the material status of the original emotional product is changed, and the character is also changed from the passive to the joy.

In a gallery space. The performer is allowed to cry in the corner, which is the invisible but inessential part of the gallery. Starting from the minute behavior to conspicuous action, the performer sheds tear which is decomposed into more and more bubbles. The audiences are encouraged to switch from the “observer” to the “responders”, to react to the passive emotion of the performer. 
`,
    images: [
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/bubbeledTears/bubbeledTears1.webp`,
        size: "large",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/bubbeledTears/bubbeledTears2.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/bubbeledTears/bubbeledTears3.webp`,
        size: "small",
      },
      {
        src: `${
          import.meta.env.BASE_URL
        }imgPrj/bubbeledTears/bubbeledTears4.webp`,
        size: "small",
      },
    ],
  },
];
