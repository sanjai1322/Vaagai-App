import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Star, Clock, Users, CheckCircle2, ChevronLeft, Share2, Heart } from 'lucide-react';

const syllabus = [
  { title: 'அறிமுகம்', duration: '10:00' },
  { title: 'அடிப்படை கோட்பாடுகள்', duration: '25:00' },
  { title: 'நடைமுறை பயிற்சி - 1', duration: '45:00' },
  { title: 'நடைமுறை பயிற்சி - 2', duration: '50:00' },
  { title: 'மேம்பட்ட தலைப்புகள் (Advanced Topics)', duration: '60:00' },
  { title: 'திட்டப்பணி (Project Work)', duration: '120:00' },
  { title: 'முடிவுரை', duration: '15:00' },
];

export default function CourseDetail() {
  const { id } = useParams();

  const courseData: Record<string, any> = {
    '1': {
      title: 'வாகை தமிழ்ச்சங்கம் - நேரலை வகுப்பு 1',
      instructor: 'தமிழ் அறிஞர்',
      thumb: 'https://img.youtube.com/vi/d5bMG01N_Gs/maxresdefault.jpg',
      category: 'நேரலை',
      level: 'அனைவருக்கும்',
      about: 'இந்த நேரலை வகுப்பில் வாகை தமிழ்ச்சங்கத்தின் சிறப்புப் பாடங்கள் குறித்து விரிவாகக் கலந்துரையாடப்படும்.',
    },
    '2': {
      title: 'வாகை தமிழ்ச்சங்கம் - நேரலை வகுப்பு 2',
      instructor: 'தமிழ் அறிஞர்',
      thumb: 'https://img.youtube.com/vi/rNM3ZpJYf88/maxresdefault.jpg',
      category: 'நேரலை',
      level: 'அனைவருக்கும்',
      about: 'இந்த நேரலை வகுப்பில் வாகை தமிழ்ச்சங்கத்தின் சிறப்புப் பாடங்கள் குறித்து விரிவாகக் கலந்துரையாடப்படும்.',
    },
    'silappathikaram': {
      title: 'சிலப்பதிகாரம்',
      instructor: 'நா. கனகராஜ் M.A., B.Ed., TET.',
      thumb: 'https://picsum.photos/seed/silambu/400/250',
      category: 'இலக்கியம்',
      level: 'மேம்பட்ட நிலை',
      about: 'தமிழ்க் காப்பிய மரபுகளை அறிதல், சிலப்பதிகார உண்மை நிகழ்வுகளைக் காப்பிய நூல் வழி முழுவதும் தெரியப்படுத்துதல், தமிழரின் பண்பாடு, கலை, இசை, நாடகம், ஓவியம், சிற்பம், வீரம், இரக்கம் போன்ற மாண்புகளை இளங்கோவடிகளின் காப்பியத்தின் வழியில் தெரிந்துகொள்ளச் செய்தல்.',
      outcomes: 'சிலப்பதிகாரக் காப்பியத்தை முழுவதும் கதை வழியிலும், மூலச்செய்யுட்கள் வழியிலும் அறிந்துகொள்ளல், கி.பி. இரண்டாம் நூற்றாண்டு காலத் தமிழரின் பண்பாட்டு விழுமியங்களைத் தெரிந்துகொள்ளல்.',
    },
    'ara-ilakkiyam': {
      title: 'அற இலக்கியங்கள்',
      instructor: 'முனைவர் இரா. வேதகனி & குழுவினர்',
      thumb: 'https://picsum.photos/seed/aram/400/250',
      category: 'இலக்கியம்',
      level: 'அனைவருக்கும்',
      about: 'அறப்பண்பு வளர்த்தல், சாதி, மதம் கடந்த மானுட அறத்தை விளக்குதல், செல்வம் மற்றும் யாக்கையின் நிலையாமையை உணர்த்துதல், நீதி நூல்களின் ஒப்பீட்டு ஆய்வு.',
      outcomes: 'தனிமனித ஒழுக்கம் வளர்த்தல், சமூக நல்லிணக்கம் பேணுதல், அறச்செயல்களுக்கு உத்வேகம், ஒப்பீட்டு ஆய்வுத் திறன்.',
    },
    'thirukkural': {
      title: 'திருக்குறள்',
      instructor: 'முனைவர் சு. சத்தியா',
      thumb: 'https://picsum.photos/seed/kural/400/250',
      category: 'இலக்கியம்',
      level: 'அனைவருக்கும்',
      about: 'அறத்துப்பால் வழி ஒழுக்கம், பொருட்பால் வழி தலைமைத்திறன், இன்பத்துப்பால் வழி குடும்ப உறவு, தமிழ் நடை மற்றும் சீர் அமைப்பு.',
      outcomes: 'அறநெறி நடைமுறைப்படுத்தல், அரசியல் & நிர்வாகப் பயன்பாடு, உட்பொருள் விளக்கம், சமூக நல்லிணக்கம்.',
    },
    'azhwargal': {
      title: 'ஆழ்வார்கள்',
      instructor: 'முனைவர் சு. பலராமன் & குழுவினர்',
      thumb: 'https://picsum.photos/seed/azhwar/400/250',
      category: 'பக்தி இலக்கியம்',
      level: 'அனைவருக்கும்',
      about: 'பக்தி இலக்கிய வரலாறு, நாலாயிர திவ்யப் பிரபந்தம், பக்தி & மனிதநேயம், மொழி நயம், ஆய்வுத் திறன்.',
      outcomes: 'பன்னிரு ஆழ்வார் வரலாறு, சரணாகதி தத்துவம், சிற்றிலக்கிய வகைகள், சமத்துவக் கொள்கை.',
    },
    'nayanmargal': {
      title: 'நாயன்மார்கள்',
      instructor: 'திரு. மா. மனோஜ்குமார் & குழுவினர்',
      thumb: 'https://picsum.photos/seed/nayanmar/400/250',
      category: 'பக்தி இலக்கியம்',
      level: 'அனைவருக்கும்',
      about: 'பக்தி இயக்க வரலாறு, பெரியபுராணம் வரலாற்று ஆவணம், சமூகச் சமத்துவம், தியாகம் & இறைப்பற்று.',
      outcomes: '63 நாயன்மார் வரலாறு, அரசியல் & சமூக ஆய்வு, சைவ சித்தாந்தம், விமர்சன ஆய்வு.',
    },
    'thiruppavai': {
      title: 'திருப்பாவை',
      instructor: 'முனைவர் சு. பலராமன் & முனைவர் கோ. காயத்ரி',
      thumb: 'https://picsum.photos/seed/pava/400/250',
      category: 'பக்தி இலக்கியம்',
      level: 'அனைவருக்கும்',
      about: 'திருப்பாவை வரலாறு, ஆண்டாள் ஆன்மிக ஆளுமை, சங்கத் தமிழ், பண்பாட்டுப் பாதுகாப்பு.',
      outcomes: '30 பாசுர விளக்கம், தத்துவப் புரிதல், ஒப்பீட்டு ஆய்வு, தலைமைத் திறன்.',
    },
    'temple-art': {
      title: 'தமிழகக் கோயில்களின் கலை மற்றும் கட்டடக்கலை',
      instructor: 'Er. இரா. கணேஷ் & கா. நாவரசி',
      thumb: 'https://picsum.photos/seed/temple/400/250',
      category: 'கலை & வரலாறு',
      level: 'அனைவருக்கும்',
      about: 'கட்டடக்கலை பரிணாமம், ஆகம விதிகள், ஓவியக்கலை, திராவிடப் பாணி, பாரம்பரிய பாதுகாப்பு, UNESCO பாரம்பரியம்.',
      outcomes: 'வரலாற்றுச் சான்றுகளுடன் விளக்கம், கட்டட நுட்ப பகுப்பாய்வு, ஓவிய பாணி அடையாளம், உலகளாவிய ஒப்பீடு.',
    },
    'uraiyasiriyargal': {
      title: 'உரையாசிரியர்கள்',
      instructor: 'செல்வன் வெ. கார்த்திகேயன்',
      thumb: 'https://picsum.photos/seed/urai/400/250',
      category: 'இலக்கியம்',
      level: 'மேம்பட்ட நிலை',
      about: 'உரை வரலாறு, இலக்கிய வாசிப்பு, இலக்கணக் கொள்கைகள், சமய உரை, சமூக சிந்தனை.',
      outcomes: 'உரையின் முக்கியத்துவம், காலகட்ட மாறுபாடு, உரை எழுதும் திறன்.',
    },
    'python': {
      title: 'Python',
      instructor: 'முனைவர் சு. கனிமொழி சுகுணா',
      thumb: 'https://picsum.photos/seed/python/400/250',
      category: 'தொழில்நுட்பம்',
      level: 'ஆரம்ப நிலை',
      about: 'Python வரலாறு, IDE பயன்பாடு, அடிப்படை நிரலாக்கம், Data Structures, OOP & File Handling.',
      outcomes: 'அடிப்படை முதல் மேம்பட்ட Python, Library பயன்பாடு, Practical Projects.',
    },
    'c-lang': {
      title: 'C',
      instructor: 'முனைவர் சு. கனிமொழி சுகுணா',
      thumb: 'https://picsum.photos/seed/clang/400/250',
      category: 'தொழில்நுட்பம்',
      level: 'ஆரம்ப நிலை',
      about: 'C மொழி அடிப்படை, Compiler பயன்பாடு, Data types, Pointers, Memory allocation.',
      outcomes: 'C Programs எழுதுதல், Advanced Concepts, தமிழ் சூழலில் பயன்பாடு.',
    },
    'sql': {
      title: 'SQL',
      instructor: 'வாகை தமிழ்ச்சங்கம்',
      thumb: 'https://picsum.photos/seed/sql/400/250',
      category: 'தொழில்நுட்பம்',
      level: 'ஆரம்ப நிலை',
      about: 'SQL & DBMS, Relational Structure, Queries, Real-time usage.',
      outcomes: 'Database creation, Joins & Subqueries, Small Applications.',
    },
    'java': {
      title: 'Java',
      instructor: 'வாகை தமிழ்ச்சங்கம்',
      thumb: 'https://picsum.photos/seed/java/400/250',
      category: 'தொழில்நுட்பம்',
      level: 'ஆரம்ப நிலை',
      about: 'Java அடிப்படை, OOP, Exception Handling, Applications.',
      outcomes: 'Java Programs, Inheritance & Polymorphism, Applications உருவாக்குதல்.',
    },
  };

  const currentCourse = courseData[id || '1'] || {
    title: 'பாடம் கிடைக்கவில்லை',
    instructor: '-',
    thumb: 'https://picsum.photos/seed/error/800/600',
    category: '-',
    level: '-',
    about: 'மன்னிக்கவும், நீங்கள் தேடும் பாடம் கிடைக்கவில்லை.',
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header Image */}
      <div className="relative h-64">
        <img 
          src={currentCourse.thumb} 
          alt="Course Cover" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Link to="/courses" className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8 relative z-10 bg-white rounded-t-[32px] pt-8 space-y-6">
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">{currentCourse.category}</span>
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">{currentCourse.level}</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight">{currentCourse.title}</h1>
          <div className="flex items-center gap-4 text-stone-500 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-stone-900">4.9</span>
              <span>(2.5k மதிப்பீடுகள்)</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>12k மாணவர்கள்</span>
            </div>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-2xl">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentCourse.instructor}`} alt="Instructor" className="w-12 h-12 rounded-full bg-white" />
          <div>
            <div className="text-xs text-stone-500">ஆசிரியர்</div>
            <div className="font-bold">{currentCourse.instructor}</div>
          </div>
          <button className="ml-auto text-emerald-600 font-bold text-sm">தொடரவும்</button>
        </div>

        {/* About Course */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold">பாடத்தைப் பற்றி (கற்றல் நோக்கம்)</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            {currentCourse.about}
          </p>
          {currentCourse.outcomes && (
            <>
              <h3 className="text-lg font-bold pt-2">கற்றல் வெளிப்பாடு</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {currentCourse.outcomes}
              </p>
            </>
          )}
        </div>

        {/* Syllabus */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">பாடத்திட்டம்</h3>
            <span className="text-stone-500 text-xs">{syllabus.length} பாடங்கள் • 5 மணி 25 நிமி</span>
          </div>
          <div className="space-y-3">
            {syllabus.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-stone-100 rounded-2xl">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm truncate">{item.title}</div>
                  <div className="text-xs text-stone-400">{item.duration}</div>
                </div>
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <Play className="w-4 h-4 fill-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-stone-100 flex items-center gap-4 z-50">
        <div className="flex-1">
          <div className="text-xs text-stone-500">விலை</div>
          <div className="text-xl font-bold text-emerald-700">இலவசம்</div>
        </div>
        <Link 
          to={`/viewer/${id}`}
          className="flex-[2] bg-emerald-600 text-white font-bold py-4 rounded-2xl text-center shadow-lg shadow-emerald-100 active:scale-95 transition-transform"
        >
          இப்போதே சேருங்கள்
        </Link>
      </div>
    </div>
  );
}
