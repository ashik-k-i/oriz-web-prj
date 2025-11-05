import React from 'react';
import { Languages, Calculator, Book } from 'lucide-react';

const CoursesSubjects = () => {
  const subjects = [
    { name: 'Malayalam', icon: Languages, color: 'text-red-500' },
    { name: 'Arabic', icon: Languages, color: 'text-green-500' },
    { name: 'English', icon: Languages, color: 'text-blue-500' },
    { name: 'Hindi', icon: Languages, color: 'text-orange-500' },
    { name: 'Mathematics', icon: Calculator, color: 'text-purple-500' },
    { name: 'Urdu', icon: Languages, color: 'text-pink-500' }
  ];

  const offerings = [
    'KG to 12 (All syllabus, All subjects)',
    'School Text Based Tuition',
    'Madrassa Tuition'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">
            Courses & Subjects Offered
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-6 flex items-center gap-2">
              <Book className="w-6 h-6 text-[#00AEEF]" />
              Subjects:
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#00AEEF]/5 transition-colors duration-300">
                  <subject.icon className={`w-5 h-5 ${subject.color}`} />
                  <span className="text-sm font-medium text-[#0C2D57]">{subject.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-6">Available For:</h3>
            <div className="space-y-3">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#00AEEF]/10 to-[#0C2D57]/5 rounded-lg">
                  <span className="text-[#00AEEF] font-bold">👉</span>
                  <span className="text-sm font-medium text-[#0C2D57]">{offering}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-[#00AEEF]/10 rounded-lg border-l-4 border-[#00AEEF]">
              <h4 className="font-semibold text-[#0C2D57] text-sm mb-2">Special Features:</h4>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Personalized study materials</li>
                <li>• Regular progress assessments</li>
                <li>• Doubt clearing sessions</li>
                <li>• Parent-teacher interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSubjects;