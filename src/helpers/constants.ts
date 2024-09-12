type Img = {
    htmlIcon: string;
    cssIcon: string;
    postgresqlIcon: string;
    reactIcon: string;
    railsIcon: string;
    rubyIcon: string;
  };
  
  const IMG: Img = {
    htmlIcon:"icons/html5-original-wordmark.svg" ,
    cssIcon: "icons/css3-original-wordmark.svg" ,
    postgresqlIcon: "icons/postgresql-plain-wordmark.svg",
    reactIcon: "icons/react-original.svg",
    railsIcon:"icons/rails-plain-wordmark.svg",
    rubyIcon: "icons/ruby-plain-wordmark.svg"
}

export const PROJECTS = [
  {
   projectName: "Maintain Magic",
   url: "https://www.maintainmagic.com/",
   description: "This app was created for management companies and building owners to keep track of the building maintenance. Some of the functionality includes account creation, ability to create locations, employees and create maintenance work orders and assign it to employees. This app also provides the ability to see open NYC Department of Buildings (DOB) and Housing Preservation and development (HPD) violations and complaints.",
   icons: [IMG.htmlIcon, IMG.cssIcon,IMG.postgresqlIcon,IMG.railsIcon, IMG.reactIcon]
  },
  {
   projectName: "East Harlem Corp",
   url: "https://safe-sands-70988-45596a723e4f.herokuapp.com/",
   description: "This app was created for a construction company to feature their projects and also allow prospecting customer to request a price quote.",
   icons: [IMG.htmlIcon,IMG.cssIcon, IMG.postgresqlIcon, IMG.railsIcon]
  },
  {
   projectName: "Soccer-quiz",
   url: "https://rubygems.org/gems/soccer-quiz",
   description: "This is a ruby gem that tests your knowledge about soccer. This gem has been downloaded more than 14,000 times.",
   icons: [IMG.rubyIcon]
  },

  {
   projectName: "Bet App",
   url: "https://futbol-bet-561e73dd6e15.herokuapp.com/games",
   description: "This is an app where users have the ability to create an account and create bets about upcoming soccer matches. This app is also interactive as users can add comments on games.",
   icons: [IMG.htmlIcon, IMG.cssIcon,IMG.postgresqlIcon,IMG.railsIcon, IMG.reactIcon]
  }
]

export const LABELS = {
   name: "Yarvin Hernandez",
   email: "yarvinhhernandez@gmail.com",
}

