export default class DataService {
  _data = {
    projectRepo: 'https://github.com/InsafKhamzin/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I’m Steven Rhodes, AKA Steve Rex. This is my personal site where I’ll be keeping track of different projects and musings in business, art and culture.",
            "Currently, I’m enjoying expanding my thinking about what’s possible with Web3. This includes spending 95% of my waking hours in Solidity and the other 5% in Discord. I’m here for the !vibes.",
            'Previously, I was an GPU miner for Ethereum and ZCash. One time I bought dark web entheogens using bitcoin that’s now worth tens of millions of today’s dollars. Inflation, yay!',
            'I own an IRL b2b software and supply chain optimization business. Working on a stealth Web3 consumer health startup.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1N0wxkXMOcJFfxvhmwQsMTn18I6QYEcbZ/view?usp=sharing',
          workExperience: [
            {
              jobTitle: 'Dad',
              company: 'Rhodes Fam',
              location: 'Turkey Hill',
              period: 'SEP 2018 – PRESENT',
              accomplishments: [
                'Useless birth partner',
                'Changed first 100 diapers, then 0',
                'Clown, cook, story teller, snuggler',
                'So fun we did it again',
                'Never known more joy',
                'Having fun every day :)',
              ],
            },
            {
              jobTitle: 'Founder Entrepreneur',
              company: 'Myco',
              location: 'All Over the USA',
              period: 'MAY 2017 – Now',
              accomplishments: [
                'Learned how to sell using story telling',
                'Took way longer than I thought it would',
                'Way more fulfilling than I imagined',
                'Reached $400M GMV',
                'Love our clients',
              ],
            },
            {
              jobTitle: 'Bullshit Artist',
              company: 'Fortune 100',
              location: ''Merica',
              period: 'MAY 2010 – May 2017',
              accomplishments: [
                'Learned a shit ton from really smart people',
                'Got really good at excel, contracts and drug stuff',
                'Discovered coorporate life is not for me',
                'Peaced the fuck out. CEO asked me to stay. I told him he couldn't afford to keep me, lol.',
              ],
            },
          ],
          education: [
            {
              credit: 'Post-Graduate Database Application Development',
              place: 'Seneca College, Canada, Toronto',
              gpa: '3.9/4.0 GPA',
              period: 'SEPT 2019 – APR 2020',
            },
            {
              credit: 'Bachelor in Software Engineering',
              place: 'Kazan National Research Technical University, Russia',
              gpa: '3.8/4.0 GPA',
              period: 'SEPT 2014 – AUG 2018',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Story On Chain',
              description:
                'Story On Chain is an eternal user-generated NFT on the ethereum blockchain benefiting the World Literacy Foundation. We are forking NounsDAO to create a daily auction where the winning bidder writes the next line of the story on their NFT.',
              myRole: 'creator, solidity developer',
              url: 'https://www.twitter.com/steverx',
            },
            {
              title: 'bootjack',
              description:
                'Bootjack is a "loot"-style loadout card NFT for the Chain Runners Universe. We optimized a loot fork to reduce gas fees by 70% and incorporated the first cipher key gated NFT mint experience, fully created and stored on the ethereum blockchain.',
              myRole: 'co-creator, solidity developer',
              techStack: 'React, Solidity',
              url: 'https://bootjack.run/',
              contract: 'https://etherscan.io/address/0xa138cc52e9baa400c1105debb42904afd9cbfb59#code',
            },                   
            {
              title: 'Stealth Consumer Web3',
              description:
                'Web3 powered startup to empower normies to reclaim value from a multi-billion dollar industry',
              techStack: 'Node.js, Serverless, AWS S3, Telegram API',
              myRole: 'founder',
              url: 'https://www.twitter.com/steverx',
            }
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Napping',
              progress: 100,
            },
            {
              name: 'Cooking Chicken',
              progress: 100,
            },
            {
              name: 'Memes',
              progress: 90,
            },
            {
              name: 'Shit Posting',
              progress: 90,
            },
            {
              name: 'Apeing',
              progress: 90,
            },
            {
              name: 'Degeneracy',
              progress: 80,
            },
            {
              name: 'Accumulatooor',
              progress: 20,
            },
            {
              name: 'Web 3 Hacking',
              progress: 20,
            },
            {
              name: 'Solidity',
              progress: 60,
            },
            {
              name: 'Creative Production',
              progress: 50,
            },
          ],
          other shit: 'Plant watering, Pourover Coffee, Mycology, Pharmaceuticals, Entheogens',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'Please, do not email me. Ever.',
          email: 'swrhodes@me.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/steverx/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/steverx',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/steverhodes/',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/steverx',
            },
            {
              name: 'FaMedium',
              link: 'https://medium.com/@steverx',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
