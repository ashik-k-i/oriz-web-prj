import React from 'react';
import { Star, Heart } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Fathima Raja',
      image: '/reviews/1.jpg',
      text: 'My name is Fathima Raja, and I am currently pursuing my Master’s in Statistics. I have been working with Oriz Academy, an individual online teaching platform, for the past 8 months. It has been a truly wonderful experience! The founder and team members are very friendly, supportive, and professional, which creates a positive and motivating teaching atmosphere. As a tutor, I’ve had the opportunity to teach more than 10 students during this time, and it’s been so fulfilling to see their academic growth and confidence improve. I’m proud to be part of Oriz Academy and truly appreciate the opportunity to grow as a tutor here. Thank you TEAM ORIZ',
      rating: 5
    },
    {
      name: 'Sumayya Konnola',
      image: '/reviews/2.png',
      text: 'Hi, I am Sumayya Konnola working as a teacher in ORIZ Academy. Being a part of this faculty, I can proudly say that I was able to guide some students who are going to be our future. I am well satisfied and happy with the facilities provided by them and also very much comfortable with the friendly ambience they built. Thank you so much ORIZ Academy for giving me a chance to enlighten our little futures.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D57] mb-4 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-red-500 fill-current" />
            What Our ORIZ Family Says
          </h2>
          <div className="w-16 h-1 bg-[#00AEEF] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#00AEEF]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-[#0C2D57] text-sm">{review.name}</h3>
                  <div className="flex gap-1 mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Join hundreds of satisfied families who trust ORIZ Academy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;