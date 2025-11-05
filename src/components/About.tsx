import React, { useRef, useEffect } from 'react';
import { Users, BookOpen, Target, TrendingUp, MessageSquare, ClipboardList, Headphones } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Users, title: 'Personalized Attention', desc: 'Individual focus for every student' },
    { icon: BookOpen, title: 'Experienced Faculties', desc: 'Qualified and specialized teachers' },
    { icon: Target, title: 'Customized Learning', desc: 'Tailored study plans for each child' },
    { icon: TrendingUp, title: 'Progress Tracking', desc: 'Continuous monitoring and improvement' },
    { icon: MessageSquare, title: 'Real-Time Doubt Clearance', desc: 'Instant support during sessions' },
    { icon: ClipboardList, title: 'Regular Assessment', desc: 'Ongoing evaluation and feedback' },
    { icon: Headphones, title: 'Dedicated Support', desc: '24/7 academic assistance' }
  ];

  // Duplicate the highlights array for seamless scrolling
  const duplicatedHighlights = [...highlights, ...highlights];
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const transformRef = useRef(0);

  // Animation frame for smooth scrolling
  const animate = () => {
    if (scrollContentRef.current) {
      transformRef.current -= 0.9; // Adjust speed here (smaller = slower)
      
      // Reset position when we've scrolled through one complete set
      if (Math.abs(transformRef.current) >= scrollContentRef.current.scrollWidth / 2) {
        transformRef.current = 0;
      }
      
      scrollContentRef.current.style.transform = `translateX(${transformRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation on mount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4">About ORIZ Academy</h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl font-semibold text-[#0C2D57] mb-4">
              The best online learning platform that is ready to assist your child in all ways.
            </h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                ORIZ Academy provides one-to-one individual tuition with flexible timing 
                and personalized study plans.
              </p>
              <p>
                Our goal is to help every student learn confidently and reach academic excellence.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Online Learning"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-[#00AEEF]/10 rounded-lg"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-[#0C2D57] mb-6 text-center">Our Key Highlights</h4>
          <div className="overflow-hidden">
            <div 
              ref={scrollContentRef}
              className="flex will-change-transform"
              style={{ 
                width: 'fit-content'
              }}
            >
              {duplicatedHighlights.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-[#00AEEF]/5 transition-colors duration-300 min-w-[250px] mx-2 flex-shrink-0"
                >
                  <item.icon className="w-8 h-8 text-[#00AEEF] mx-auto mb-2" />
                  <h5 className="font-semibold text-[#0C2D57] text-sm mb-1">{item.title}</h5>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;