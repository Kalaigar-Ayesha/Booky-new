import React from 'react';
import { TrendingUp, Users, BookOpen, Star } from 'lucide-react';

export const Stats = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "150K+",
      label: "Books Tracked",
      color: "text-amber-600",
      bgColor: "from-amber-100 to-orange-100"
    },
    {
      icon: Users,
      value: "12K+",
      label: "Active Readers",
      color: "text-red-600",
      bgColor: "from-red-100 to-orange-100"
    },
    {
      icon: Star,
      value: "89K+",
      label: "Reviews Written",
      color: "text-orange-600",
      bgColor: "from-orange-100 to-amber-100"
    },
    {
      icon: TrendingUp,
      value: "2.4M+",
      label: "Pages Read",
      color: "text-amber-700",
      bgColor: "from-amber-100 to-red-100"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-6xl px-3 sm:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-4 sm:p-6 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`flex justify-center mb-3 sm:mb-4`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${stat.bgColor} rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className={`h-8 sm:h-10 w-8 sm:w-10 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
