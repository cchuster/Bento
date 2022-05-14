// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Conner',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good night,',

  // Weather
  weatherKey: 'f7f5f52f032c84d50403c302e460c28e',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '34.149490',
  defaultLongitude: '-118.439957',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Outlook',
      icon: 'mail',
     link: 'https://outlook.live.com/mail/0/inbox',
    },
    {
      id: '2',
      name: 'Gmail',
      icon: 'inbox',
      link: 'https://mail.google.com/mail/u/1/#inbox',
    },
    {
      id: '5',
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://linkedin.com/',
    },
    {
      id: '3',
      name: 'Schoology',
      icon: 'briefcase',
      link: 'https://lms.lausd.net/home',
    },
    {
      id: '4',
      name: 'Google Docs',
      icon: 'file-text',
      link: 'https://docs.google.com/document/u/1/',
    },
    {
      id: '6',
      name: 'Google Sheets',
      icon: 'layout',
      link: 'https://docs.google.com/spreadsheets/u/0/',
    },
  ],
  
  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'send',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Webull',
        link: 'https://www.webull.com/',
      },
      {
        name: 'TelePAWS',
        link: 'https://www.telepaws.com/',
      },
      {
        name: 'CPU Advantage',
        link: 'https://www.cpua.org/',
      },
      {
        name: 'Gainsboro',
        link: 'https://www.gainsboro.tech/',
      },
    ],
    secondList: [
      {
        name: 'Spotify',
        link: 'https://open.spotify.com/playlist/3Jo6FyvoZwGLWQPA0d9dGD',
      },
      {
        name: 'YouTube',
        link: 'http://youtube.com/',
      },
      {
        name: 'Reddit',
        link: 'https://www.reddit.com/',
      },
      {
        name: 'Look Movie',
        link: 'https://lookmovie2.to/',
      },
    ],
  },
};
