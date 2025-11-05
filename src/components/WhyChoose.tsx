import React from 'react';
import { GraduationCap, Users, FileCheck, Clock, DollarSign, Video } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: 'Expert Teachers',
      desc: 'Qualified & specialized teachers to provide complete coverage of the subject for your child.'
    },
    {
      icon: Users,
      title: 'One-on-One Learning',
      desc: 'Individualized instruction for your child to receive full attention and focused study.'
    },
    {
      icon: FileCheck,
      title: 'Chapter-Wise Exams',
      desc: 'Practice chapter-wise tests and unlimited application-level questions.'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      desc: 'Our class timing is customizable according to the student\'s convenience.'
    },
    {
      icon: DollarSign,
      title: 'Price – Quality',
      desc: 'High-quality education at an affordable fee.'
    },
    {
      icon: Video,
      title: 'Live Classes',
      desc: 'Interactive live sessions ensure an instant and engaging learning experience.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Why Choose ORIZ Individual Tuition?
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-[#00AEEF]/5 border hover:border-[#00AEEF]/20"
            >
              <div className="flex items-start gap-3">
                <div className="bg-[#00AEEF] p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#0C2D57] text-sm mb-2 flex items-center gap-2">
                    <span className="text-[#00AEEF]">➡</span>
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;