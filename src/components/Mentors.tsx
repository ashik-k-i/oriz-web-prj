import React from 'react';

const Mentors = () => {
  // Generate mentors with diverse names and Pexels images
  const mentors = [
    { name: 'Sumayya konnola', image: '/mentors/1.jpg' },
    { name: 'Shyamili', image: '/mentors/2.jpg' },
    { name: 'Nefida', image: '/mentors/3.jpg' },
    { name: 'Shahida', image: '/mentors/4.jpg' },
    { name: 'Anzila', image: '/mentors/5.jpg' },
    { name: 'Shefeena', image: '/mentors/6.jpg' },
    { name: 'Mushrifa Niyas', image: '/mentors/7.jpg' },
    { name: 'Jaseela', image: '/mentors/8.jpg' },
    { name: 'Amrutha', image: '/mentors/9.jpg' },
    { name: 'Hisana thasni', image: '/mentors/10.jpg' },
    { name: 'Mujeeba', image: '/mentors/11.jpg' },
    { name: 'Anaswara', image: '/mentors/12.jpg' },
    { name: 'Fathima hiba', image: '/mentors/13.jpg' },
    { name: 'Shamna', image: '/mentors/14.jpg' },
    { name: 'Fathima Raja', image: '/mentors/15.jpg' },
    { name: 'Rishana', image: '/mentors/16.jpg' },
    { name: 'Naseeba', image: '/mentors/17.jpg' },
    { name: 'Sabira', image: '/mentors/18.jpg' }
  ];

  return (
    <section id="mentors" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-2">
            Our Mentors
          </h2>
          <p className="text-sm text-gray-600 mb-4">Meet our team of expert educators</p>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[#00AEEF] transition-colors duration-300">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-[#0C2D57] text-sm">{mentor.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-gray-600">
            All mentors are qualified professionals with years of teaching experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;