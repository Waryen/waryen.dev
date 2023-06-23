import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactElement } from 'react';

type Link = {
  url: string;
  icon: ReactElement;
  label: string;
};

export const Links = () => {
  const links: Link[] = [
    {
      icon: <GitHubIcon fontSize="large" />,
      url: 'https://github.com/Waryen',
      label: 'Github',
    },
    {
      icon: <TwitterIcon fontSize="large" />,
      url: 'https://twitter.com/aka_waryen',
      label: 'Twitte',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      url: 'https://www.linkedin.com/in/jonathan-gomand',
      label: 'LinkedIn',
    },
    {
      icon: <ArticleIcon fontSize="large" />,
      url: 'https://garden.mirahi.io',
      label: 'Mirahi Digital Garden',
    },
  ];

  return (
    <ul className="flex flex-row my-4">
      {links.map((link) => (
        <li key={link.url} className="mx-2">
          <a href={link.url} target="_blank" aria-label={link.label}>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
