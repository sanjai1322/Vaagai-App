import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, List, MessageSquare, Download, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

export default function Viewer() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'video' | 'pdf'>('video');
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<any>(null);

  const handlePlayPause = () => setPlaying(!playing);
  const handleToggleMuted = () => setMuted(!muted);
  const handleProgress = (state: { played: number }) => setPlayed(state.played);
  const handleDuration = (dur: number) => setDuration(dur);
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setPlayed(val);
    playerRef.current?.seekTo(val);
  };

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  // Use any to bypass strict typing issues with react-player in this environment
  const Player = ReactPlayer as any;

  // Mapping of course IDs to the provided YouTube live stream URLs
  const videoUrls: Record<string, string> = {
    '1': 'https://www.youtube.com/watch?v=d5bMG01N_Gs',
    '2': 'https://www.youtube.com/watch?v=rNM3ZpJYf88',
    'silappathikaram': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    'python': 'https://www.youtube.com/watch?v=rfscVS0vtbw', // Placeholder
  };

  const courseTitles: Record<string, string> = {
    '1': 'நேரலை வகுப்பு - 1',
    '2': 'நேரலை வகுப்பு - 2',
    'silappathikaram': 'சிலப்பதிகாரம் - அறிமுகம்',
    'ara-ilakkiyam': 'அற இலக்கியங்கள் - அறிமுகம்',
    'thirukkural': 'திருக்குறள் - அறிமுகம்',
    'azhwargal': 'ஆழ்வார்கள் - அறிமுகம்',
    'nayanmargal': 'நாயன்மார்கள் - அறிமுகம்',
    'thiruppavai': 'திருப்பாவை - அறிமுகம்',
    'temple-art': 'தமிழகக் கோயில்களின் கலை - அறிமுகம்',
    'uraiyasiriyargal': 'உரையாசிரியர்கள் - அறிமுகம்',
    'python': 'Python - அறிமுகம்',
    'c-lang': 'C - அறிமுகம்',
    'sql': 'SQL - அறிமுகம்',
    'java': 'Java - அறிமுகம்',
  };

  const currentUrl = videoUrls[id || '1'] || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const currentTitle = courseTitles[id || '1'] || 'பாடம் - அறிமுகம்';

  return (
    <div className="flex flex-col h-screen bg-stone-900 text-white overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center justify-between bg-black/20">
        <Link to={`/courses/${id}`} className="flex items-center gap-2">
          <ChevronLeft className="w-6 h-6" />
          <span className="font-bold text-sm truncate max-w-[200px]">
            {currentTitle}
          </span>
        </Link>
        <button className="p-2">
          <List className="w-6 h-6" />
        </button>
      </div>

      {/* Media Player Area */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'video' ? (
          <div className="aspect-video bg-black relative group">
            <Player
              ref={playerRef}
              url={currentUrl}
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              muted={muted}
              onProgress={handleProgress}
              onDuration={handleDuration}
              config={{
                youtube: {
                  playerVars: { rel: 0, autoplay: 1 }
                }
              }}
            />
            
            {/* Custom Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <button 
                onClick={handlePlayPause}
                className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-transform"
              >
                {playing ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-1" />}
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent space-y-2">
              <input
                type="range"
                min={0}
                max={0.999999}
                step="any"
                value={played}
                onChange={handleSeekChange}
                className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={handlePlayPause}>
                    {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button onClick={handleToggleMuted}>
                    {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="text-[10px] font-mono">
                    {formatTime(played * duration)} / {formatTime(duration)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                   <button onClick={() => playerRef.current?.seekTo(0)} className="p-1">
                     <RotateCcw className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-stone-100 p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 space-y-6 text-stone-800">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">பாடக் குறிப்புகள்: அறிமுகம்</h2>
                <button className="p-2 bg-stone-50 rounded-lg text-stone-400">
                  <Download className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>இந்த பாடத்தில் நாம் வலைத்தள உருவாக்கத்தின் அடிப்படைகளை பார்க்கப் போகிறோம்.</p>
                <h3 className="font-bold text-stone-900">முக்கிய குறிப்புகள்:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTML - கட்டமைப்பை உருவாக்குகிறது</li>
                  <li>CSS - வடிவமைப்பை வழங்குகிறது</li>
                  <li>JavaScript - செயல்பாட்டை சேர்க்கிறது</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tabs & Content */}
        <div className="bg-stone-800 flex-1 flex flex-col rounded-t-3xl mt-[-20px] relative z-10">
          <div className="flex border-b border-white/10">
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'video' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-stone-400'}`}
            >
              வீடியோ
            </button>
            <button 
              onClick={() => setActiveTab('pdf')}
              className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'pdf' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-stone-400'}`}
            >
              குறிப்புகள் (PDF)
            </button>
          </div>

          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">கேள்வி பதில்கள்</h3>
              <button className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                கேள்வி கேட்க
              </button>
            </div>

            <div className="space-y-4">
              {[1,2].map(i => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-stone-600 rounded-full"></div>
                    <span className="text-xs font-bold">மாணவர் {i}</span>
                    <span className="text-[10px] text-stone-500">2 மணிநேரம் முன்பு</span>
                  </div>
                  <p className="text-xs text-stone-300">இந்த பாடம் மிகவும் பயனுள்ளதாக இருந்தது. நன்றி!</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-6 bg-stone-900 border-t border-white/10 flex items-center justify-between">
        <button className="flex items-center gap-2 text-stone-400 font-bold text-sm">
          <ChevronLeft className="w-5 h-5" />
          முந்தையது
        </button>
        <button className="bg-emerald-600 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/40">
          அடுத்த பாடம்
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
