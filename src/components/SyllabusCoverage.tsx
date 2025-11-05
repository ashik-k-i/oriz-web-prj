import React from 'react';
import { BookOpen, Globe } from 'lucide-react';

const SyllabusCoverage = () => {
  const syllabuses = [
    { name: 'Kerala State Board', color: 'bg-green-100 text-green-800' },
    { name: 'CBSE', color: 'bg-blue-100 text-blue-800' },
    { name: 'ICSE', color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">Syllabus Coverage</h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#00AEEF]" />
              We Cover All Syllabus:
            </h3>
            
            <div className="space-y-3 mb-8">
              {syllabuses.map((syllabus, index) => (
                <div key={index} className={`inline-block px-4 py-2 rounded-full text-sm font-medium mr-3 ${syllabus.color}`}>
                  {syllabus.name}
                </div>
              ))}
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#00AEEF]">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#00AEEF] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#0C2D57] text-sm mb-1">Global Access</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ORIZ provides tuition to students worldwide – no matter where you are, 
                    your child can access expert tutors and personalized lessons from the comfort of home.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Student Learning"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D57]/20 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
              <p className="text-xs font-semibold text-[#0C2D57]">Available Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusCoverage;