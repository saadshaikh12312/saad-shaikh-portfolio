import { personalInfo } from './personal';

export const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: 'github',
    ariaLabel: 'Saad Shaikh on GitHub',
  },
  {
    name: 'LinkedIn',
    url: personalInfo.linkedin,
    icon: 'linkedin',
    ariaLabel: 'Saad Shaikh on LinkedIn',
  },
  {
    name: 'LeetCode',
    url: personalInfo.leetcode,
    icon: 'leetcode',
    ariaLabel: 'Saad Shaikh on LeetCode',
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.email}`,
    icon: 'mail',
    ariaLabel: `Send an email to ${personalInfo.email}`,
  },
];
