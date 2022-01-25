const useAbsoluteUrls = true
const prefix = useAbsoluteUrls ? 'https://todotoit5.netlify.app' : ''

export const substatements = [
  {
    id: 1,
    label: 'interactive-exhibits',
    copy: 'We create interactive exhibits, turning new ideas into truly unique experiences that people enjoy and remember.',
    file: {
      poster: {
        horizontal: prefix + '/videos/desktop/01_Poster.jpg',
        vertical: prefix + '/videos/mobile/01_Poster.jpg'
      },
      videos: {
        horizontal: prefix + '/videos/desktop/01_InteractiveExhibit.mp4',
        vertical: prefix + '/videos/mobile/01_InteractiveExhibit.mp4'
      }
    }
  },
  {
    id: 2,
    label: 'kinetic-installations',
    copy: 'We design and deliver kinetic installations, with technical mastery and beauty. Always finding new ways to stand out.',
    file: {
      poster: {
        horizontal: prefix + '/videos/desktop/02_Poster.jpg',
        vertical: prefix + '/videos/mobile/02_Poster.jpg'
      },
      videos: {
        horizontal: prefix + '/videos/desktop/02_KineticInstallations.mp4',
        vertical: prefix + '/videos/mobile/02_KineticInstallations.mp4'
      }
    }
  },
  {
    id: 3,
    label: 'dataviz',
    // eslint-disable-next-line quotes
    copy: 'We unleash data’s untapped potential by sensing the environment and turning numbers into engaging content and stories for your audience.',
    file: {
      poster: {
        horizontal: prefix + '/videos/desktop/03_Poster.jpg',
        vertical: prefix + '/videos/mobile/03_Poster.jpg'
      },
      videos: {
        horizontal: prefix + '/videos/desktop/03_Dataviz.mp4',
        vertical: prefix + '/videos/mobile/03_Dataviz.mp4'
      }
    }
  },
  {
    id: 4,
    label: 'digital-products',
    copy: 'We craft strong concepts and tailor digital communication, to shape and improve the relationship between people and brands.',
    file: {
      poster: {
        horizontal: prefix + '/videos/desktop/04_Poster.jpg',
        vertical: prefix + '/videos/mobile/04_Poster.jpg'
      },
      videos: {
        horizontal: prefix + '/videos/desktop/04_DigitalProducts.mp4',
        vertical: prefix + '/videos/mobile/04_DigitalProducts.mp4'
      }
    }
  },
  {
    id: 5,
    label: 'museums',
    copy: 'We leverage a wide spectrum of design tools to explain what matters to you, making even the most complex idea engaging for everyone.',
    file: {
      poster: {
        horizontal: prefix + '/videos/desktop/05_Poster.jpg',
        vertical: prefix + '/videos/mobile/05_Poster.jpg'
      },
      videos: {
        horizontal: prefix + '/videos/desktop/05_Museum.mp4',
        vertical: prefix + '/videos/mobile/05_Museum.mp4'
      }
    }
  }
]

export const team = [
  {
    id: 1,
    name: 'Andrea Clemente',
    jobs: 'Co-Founder & Managing director',
    file: prefix + '/team/AndreaClemente.mp4'
  },
  {
    id: 2,
    name: 'Fabio Franchino',
    jobs: 'Co-Founder & CTO',
    file: prefix + '/team/FabioFranchino.mp4'
  },
  {
    id: 3,
    name: 'Julie Faure',
    jobs: 'Project Manager',
    file: prefix + '/team/JulieFaure.mp4'
  },
  {
    id: 4,
    name: 'Luca Zanconi',
    jobs: 'Technical Artist & Software Developer',
    file: prefix + '/team/LucaZanconi.mp4'
  },
  {
    id: 5,
    name: 'Emilio Bondioli',
    jobs: 'Interaction designer & Developer',
    file: prefix + '/team/EmilioBondioli.mp4'
  },
  {
    id: 6,
    name: 'Kerem Türkyilmaz',
    jobs: 'Graphic Designer & Developer',
    file: prefix + '/team/KeremTurkyilmaz.mp4'
  },
  {
    id: 7,
    name: 'Marta Monge',
    jobs: 'Art Director & Designer',
    file: prefix + '/team/MartaMonge.mp4'
  },
  {
    id: 8,
    name: 'Federica Zucchini',
    jobs: 'Visual Designer',
    file: prefix + '/team/FedericaZucchini.mp4'
  },
  {
    id: 9,
    name: 'Matteo Palù',
    jobs: 'Information Designer',
    file: prefix + '/team/MatteoPalu.mp4'
  },
  {
    id: 10,
    name: 'Alice Mela',
    jobs: 'Design Director & Interaction Designer',
    file: prefix + '/team/AliceMela.mp4'
  },
  {
    id: 12,
    name: 'Eric Tron Gianet',
    jobs: 'UX Designer Intern',
    file: prefix + '/team/EricTron.mp4'
  },
  {
    id: 13,
    name: 'Alessandra Martina',
    jobs: 'Administrative Assistant',
    file: prefix + '/team/AlessandraMartina.mp4'
  }
]
