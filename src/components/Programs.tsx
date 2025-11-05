import React from 'react';
import { Baby, BookOpen, Fuel as Mosque } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: 'Foundation Programs',
      desc: 'Online foundation courses for classes KG to 12 to strengthen reading, writing, and fundamental skills, creating a strong base for academic success.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Academic Tuition',
      desc: 'Personalized one-on-one live sessions for KG to 12 students (State, CBSE, ICSE & others), designed by expert teachers to ensure better understanding and performance.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mosque,
      title: 'Madrassa Tuition',
      desc: 'One-on-one live Islamic education programs, from basic to advanced levels, for different age groups. Includes personalized attention, flexible scheduling, and affordable fees.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Our Specialized Programs
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${program.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#0C2D57] text-lg">{program.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;