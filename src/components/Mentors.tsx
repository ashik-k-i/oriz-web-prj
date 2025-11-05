import React from 'react';
import { GraduationCap } from 'lucide-react';

const Mentors = () => {
  // Generate 17 mentors with diverse names and Pexels images
  const mentors = [
    { name: 'Dr. Fatima Khan', subject: 'Mathematics', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Ahmed Ali', subject: 'English', image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Priya Menon', subject: 'Malayalam', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Mohammed Salim', subject: 'Arabic', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Aisha Rahman', subject: 'Hindi', image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Rajesh Kumar', subject: 'Science', image: 'https://images.pexels.com/photos/3777932/pexels-photo-3777932.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Zainab Hussain', subject: 'Urdu', image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Suresh Nair', subject: 'Social Studies', image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Mariam Ahmed', subject: 'Islamic Studies', image: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Anoop Krishnan', subject: 'Physics', image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Khadija Noor', subject: 'Chemistry', image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Vishnu Pillai', subject: 'Biology', image: 'https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Safiya Begum', subject: 'Geography', image: 'https://images.pexels.com/photos/3771603/pexels-photo-3771603.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Arjun Menon', subject: 'History', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Nadia Khan', subject: 'Computer Science', image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Ibrahim Sheikh', subject: 'Economics', image: 'https://images.pexels.com/photos/3777688/pexels-photo-3777688.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
    { name: 'Leela Devi', subject: 'Arts', image: 'https://images.pexels.com/photos/3785073/pexels-photo-3785073.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
  ];

  return (
    <section id="mentors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-2">
            Our Mentors
          </h2>
          <p className="text-sm text-gray-600 mb-4">Meet our team of 17 expert educators</p>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-[#00AEEF]/5"
            >
              <div className="relative">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-1 right-1 bg-[#00AEEF] p-1 rounded-full">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="p-2 text-center">
                <h3 className="font-semibold text-[#0C2D57] text-xs mb-0.5 line-clamp-1">{mentor.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-1">{mentor.subject}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            All mentors are qualified professionals with years of teaching experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;