import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactElement } from 'react';

type Link = {
  url: string;
  icon: ReactElement;
};

export const Links = () => {
  const links: Link[] = [
    {
      icon: <GitHubIcon fontSize="large" />,
      url: 'https://github.com/Waryen',
    },
    {
      icon: <TwitterIcon fontSize="large" />,
      url: 'https://twitter.com/aka_waryen',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      url: 'https://www.linkedin.com/in/jonathan-gomand',
    },
    {
      icon: <ArticleIcon fontSize="large" />,
      url: 'https://garden.mirahi.io',
    },
  ];

  return (
    <ul className="flex flex-row my-4">
      {links.map((link) => (
        <li key={link.url} className="mx-2">
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
