import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      title: 'Manager',
      name: 'Safa anshida',
      image: '/lead/m.jpg',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'CEO',
      name: 'Abdul Kareem',
      image: '/lead/ceo.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Managing Director',
      name: 'Arshid Arif k',
      image: '/lead/md.jpg',
      color: 'from-blue-500 to-cyan-500'
    }
    
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D57] mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00AEEF] to-[#0C2D57] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                <div className="relative pt-12 pb-6 px-6">
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-[#0C2D57] mb-1">{leader.name}</h3>
                    <div className="inline-block">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${leader.color} text-white`}>
                        {leader.title}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <div className={`h-1 w-16 bg-gradient-to-r ${leader.color} rounded-full opacity-60`}></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br ${leader.color} rounded-full opacity-10 blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;