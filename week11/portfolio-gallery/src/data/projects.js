// My real projects from this course. `demo` is null when a project has no live site.
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'My portfolio site with a dark/light toggle, a skill explorer, project filters and detail dialogs. Accessibility 100 in Lighthouse.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahimjonkomiljonov/portfolio',
    demo: 'https://rahimjonkomiljonov.github.io/portfolio/',
  },
  {
    id: 2,
    title: 'Book Search',
    description:
      'Searches the Open Library API with fetch and async/await, and shows each book as a card with loading, error and empty states.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahimjonkomiljonov/webpro-book-search',
    demo: 'https://rahimjonkomiljonov.github.io/webpro-book-search/',
  },
  {
    id: 3,
    title: 'Web Programming Course Site',
    description:
      'The archive of all my classwork for K0126002, with one shared design system and Node build scripts that minify the CSS.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node'],
    github: 'https://github.com/rahimjonkomiljonov/Web-Programming',
    demo: 'https://rahimjonkomiljonov.github.io/Web-Programming/',
  },
  {
    id: 4,
    title: 'React Components & Props',
    description:
      'The Week 11 class exercises: components, props, children, lists with keys, conditional rendering and a ProductCard challenge.',
    tech: ['React', 'Node'],
    github: 'https://github.com/rahimjonkomiljonov/Web-Programming/tree/main/week11',
    demo: 'https://rahimjonkomiljonov.github.io/Web-Programming/week11/',
  },
  {
    id: 5,
    title: 'Portfolio Gallery',
    description:
      'This app: a ProjectList of ProjectCards with a FilterBar, made with Create React App.',
    tech: ['React', 'CSS'],
    github: 'https://github.com/rahimjonkomiljonov/Web-Programming/tree/main/week11/portfolio-gallery',
    demo: 'https://rahimjonkomiljonov.github.io/Web-Programming/week11/gallery/',
  },
  {
    id: 6,
    title: 'webpro-w9',
    description:
      'My first repository published with GitHub Pages: an index page with my name and the date, plus a custom 404 page.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/rahimjonkomiljonov/webpro-w9',
    demo: 'https://rahimjonkomiljonov.github.io/webpro-w9/',
  },
  {
    id: 7,
    title: 'git-exercise',
    description:
      'Git practice: a first commit, a feature branch merged into main, a push to GitHub and a pull request.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/rahimjonkomiljonov/git-exercise',
    demo: null,
  },
];

export default projects;
