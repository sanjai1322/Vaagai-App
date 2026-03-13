import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, MapPin, Award, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff9e6] to-[#f5f2ed] pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 py-3 flex items-center gap-4">
        <Link to="/" className="p-2 hover:bg-stone-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-stone-600" />
        </Link>
        <h1 className="text-xl font-bold text-emerald-800">எங்களைப் பற்றி</h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-100"
        >
          <div className="p-8 space-y-8">
            {/* Title */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
                வாகை தமிழ்ச்சங்கம் - அறிமுகம்
              </h2>
            </div>

            {/* Content Text */}
            <div className="space-y-4 text-stone-700 leading-relaxed text-justify text-sm md:text-base">
              <p>
                தமிழன்னையின் மணிமகுடத்தில் மற்றுமொரு மாணிக்கமாய் மிளிர்கிறது நமது வாகை தமிழ்ச்சங்கம். 
                தமிழக அரசு அனுமதி பெற்று, தமிழ் மொழி, இலக்கியம், பண்பாடு ஆகியவை சார்ந்த அறிவை 
                இக்கால அறிவியல் சிந்தனை & திறன்களுடன் அனைத்து தரப்பினரிடமும் ஊக்குவித்தலையும் 
                வளர்த்தலையும் மேம்படுத்துதலையும் நோக்கமாகக்கொண்டு வாகை தமிழ்ச்சங்கம் இயங்கி வருகிறது.
              </p>
              <p>
                நமது வாகை தமிழ்ச்சங்கம், தமிழ்நாடு அரசு மற்றும் இந்திய அரசின் மேலும் பல செயல்திட்டங்களின் கீழும் 
                அனுமதி பெற்ற தன்னார்வல, தமிழ்சார்ந்த சமூக சேவை நோக்கம் கொண்ட அமைப்பாகும். 
                மதுரை உலக தமிழ்ச் சங்கத்தின் அதிகாரப்பூர்வ உறுப்பினராக இணைத்தது மட்டுமின்றி, 
                உள்நாட்டு & பன்னாட்டு அளவிலான பலதரப்பட்ட மக்கள் வயது வேறுபாடின்றி நமது வாகை தமிழ்ச்சங்கத்தில் 
                இணைந்து தத்தமது திறன்களை மேம்படுத்தவும் வெளிக்கொணரவுமான களமாகத் திகழ்ந்து வருகிறது.
              </p>
              <p>
                இவ்வமைப்பின் தொடர் சாதனைகளுக்குக் காரணம் என்னுடன் பயணித்து வரும் தமிழ்ச்சான்றோரும் 
                வாகை தமிழ்ச்சங்க குடும்ப உறுப்பினருமே ஆவர். தொடர்ந்து தமிழ்ப்பணியாற்றிட உந்துதலாக இருக்கும் 
                அனைவருக்கும் நன்றிகளைத் தெரிவித்துக்கொள்கிறேன்.
              </p>
            </div>

            {/* President Card - Matching Screenshot */}
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-sm bg-white border border-stone-100 rounded-2xl p-8 flex flex-col items-center space-y-4 shadow-sm">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-stone-50">
                  <img 
                    src="/manoj.jpg" 
                    alt="மா. மனோஜ்குமார்" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-stone-800">மா. மனோஜ்குமார்</h3>
                  <p className="text-stone-600 font-medium">தலைவர்</p>
                  <p className="text-stone-500 text-sm">வாகை தமிழ்ச்சங்கம்</p>
                  <p className="text-stone-400 text-xs mt-2">நாமக்கல்</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
