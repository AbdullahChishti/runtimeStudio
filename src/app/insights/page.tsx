import React from 'react';
import Link from 'next/link';
import InsightsListing from '../../components/insights/InsightsListing';

const InsightsHubPage: React.FC = () => {
  const insightsData = [
    { id: '1', title: 'The Future of AI in Business', slug: 'future-of-ai', date: 'July 1, 2026', excerpt: 'Exploring the transformative impact of artificial intelligence on various industries.' },
    { id: '2', title: 'Mastering Cloud Computing Strategies', slug: 'cloud-computing', date: 'June 15, 2026', excerpt: 'A deep dive into effective cloud adoption and optimization techniques.' },
    { id: '3', title: 'Cybersecurity Best Practices for 2026', slug: 'cybersecurity-2026', date: 'May 20, 2026', excerpt: 'Essential tips and strategies to protect your digital assets in the current threat landscape.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Insights Hub</h1>
      <p className="text-lg mb-8">
        Welcome to our Insights Hub, where we share our expertise, research, and perspectives on the latest trends and innovations.
        Explore our articles to stay informed and inspired.
      </p>

      <InsightsListing insights={insightsData} />
    </div>
  );
};

export default InsightsHubPage;
