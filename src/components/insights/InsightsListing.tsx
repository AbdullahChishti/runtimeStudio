import React from 'react';
import Link from 'next/link';

interface Insight {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

interface InsightsListingProps {
  insights: Insight[];
}

const InsightsListing: React.FC<InsightsListingProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {insights.map((insight) => (
        <div key={insight.id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-2">
            <Link href={`/insights/${insight.slug}`} className="hover:text-blue-600">
              {insight.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm mb-4">{insight.date}</p>
          <p className="text-gray-700 mb-4">{insight.excerpt}</p>
          <Link href={`/insights/${insight.slug}`} className="text-blue-600 hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InsightsListing;
