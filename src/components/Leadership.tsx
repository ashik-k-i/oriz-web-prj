import React from 'react';
import { Crown, Briefcase, Settings } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      title: 'CEO',
      name: 'Mohammed Rashid',
      icon: Crown,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Managing Director',
      name: 'Sarah Ahmed',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Manager',
      name: 'Ali Hassan',
      icon: Settings,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Leadership Team
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-3 left-3 p-2 rounded-lg bg-gradient-to-r ${leader.gradient} text-white`}>
                  <leader.icon className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-[#0C2D57] text-sm mb-1">{leader.title}</h3>
                <p className="text-xs text-gray-600">{leader.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;