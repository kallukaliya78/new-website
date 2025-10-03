import React from 'react';

// I'm using lucide-react for icons. In a real project, you'd install it: npm install lucide-react
// For this single-file setup, I'll create placeholder SVG components for the icons.
const Trophy = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98-.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
const BrainCircuit = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.59.67.5C21.14 20.16 24 16.42 24 12A10 10 0 0 0 12 2Z"/></svg>
);
const Award = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const BookCopy = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 17h2"/><path d="M2 12h2"/><path d="M2 7h2"/><path d="M13 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M18 22V8a2 2 0 0 0-2-2h-4"/><path d="m18 2 4 4"/><path d="M22 2v4h-4"/></svg>
);
const ChevronDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);

const FlaskConical = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 2v7.31"/><path d="M14 9.31V2"/><path d="M3.26 10.69 5 9h14l1.74 1.69a2 2 0 0 1 0 2.62L19 15H5l-1.74-1.69a2 2 0 0 1 0-2.62Z"/><path d="M7 15v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6"/></svg>
);

const InfoCard = ({ icon, title, children }) => (
    <div className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl"></div>
        <div className="relative flex flex-col h-full">
            <div className="mb-4 text-cyan-400">{icon}</div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{children}</p>
        </div>
    </div>
);

const FeatureCard = ({ icon, title, children }) => (
    <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1">
        <div className="flex items-start gap-4">
            <div className="text-slate-500 mt-1">{icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">{title}</h3>
                <div className="text-slate-400 text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    </div>
);

// New component for the syllabus page
const SyllabusPage = ({ classNumber, onBack }) => {
  // Final syllabus data with updated IQ section
  const syllabusData = {
    '6': {
      'Maths': ['Number system & large numbers', 'Basic operations, factors & multiples', 'Fractions and decimals', 'Basic geometry (lines, angles, polygons)', 'Mensuration basics'],
      'IQ / Reasoning': ['Number & letter series (e.g., 2, 4, 8, ? or A, C, E, ?)', 'Odd one out (shapes, numbers, words)', 'Simple coding–decoding (CAT → DBU type shifts)', 'Simple patterns (shapes, mirror images basics)', 'Basic puzzles (who has which color/fruit type)'],
      'Physics': ['Motion & measurement', 'Force & simple machines', 'Heat & temperature'],
      'Chemistry': ['Materials around us (states of matter)', 'Elements, mixtures & compounds', 'Physical & chemical changes'],
      'Biology': ['Food and nutrition', 'The human body: digestive & respiratory basics', 'Plant parts & their functions', 'Microorganisms: friend & foe']
    },
    '7': {
      'Maths': ['Integers & rational numbers', 'Fractions, decimals & percentage applications', 'Algebraic expressions & simple linear equations', 'Geometry: triangles & basic constructions', 'Data handling'],
      'IQ / Reasoning': ['Numerical series & missing numbers', 'Analogy (number, word, picture)', 'Venn diagram (basic classification)', 'Alphabet tests (position of letters)', 'Simple direction sense problems'],
      'Physics': ['Motion & light (reflection basics)', 'Heat transfer (conduction, convection, radiation)', 'Sound (source, propagation, pitch basics)'],
      'Chemistry': ['Acids, bases & salts', 'Physical & chemical properties of materials', 'Separation techniques'],
      'Biology': ['Nutrition in plants & animals', 'Locomotion & movement', 'Reproduction basics', 'Environmental science: ecosystems & food chains']
    },
    '8': {
      'Maths': ['Rational numbers & linear equations', 'Understanding quadrilaterals & polygons', 'Squares, cubes, exponents & powers', 'Mensuration: area & volume', 'Graphs & data interpretation'],
      'IQ / Reasoning': ['Series (more complex number/letter series)', 'Coding–decoding (rule-based like +2, –3)', 'Blood relations (basic family tree Qs)', 'Ranking tests (3–4 people in line)', 'Visual reasoning (pattern completion)'],
      'Physics': ['Force, pressure & buoyancy basics', 'Light: reflection, images in mirrors', 'Electricity basics (current, circuits)'],
      'Chemistry': ['Chemical reactions & equations', 'Metals & non-metals', 'Carbon & its compounds'],
      'Biology': ['Cell: basic structure & functions', 'Respiration & circulation', 'Plants: photosynthesis overview', 'Biodiversity & conservation basics']
    },
    '9': {
      'Maths': ['Number systems & real numbers', 'Polynomials & linear equations in two variables', 'Coordinate geometry', 'Geometry: triangles (similarity)', 'Statistics & probability'],
      'IQ / Reasoning': ['Arithmetic reasoning (age problems)', 'Number analogy / classification', 'Venn diagrams (2–3 set diagrams)', 'Logical sequences (arranging words/dates)', 'Data interpretation (small table/graph)'],
      'Physics': ['Motion, laws of motion (Newton basics)', 'Work, energy & power', 'Sound (wave properties, speed)'],
      'Chemistry': ['Matter in everyday life', 'Is matter around us pure?', 'Acids, bases & salts'],
      'Biology': ['Cell: structure + cell division basics', 'Tissues (plant & animal)', 'Diversity of living organisms', 'Natural resources & their management']
    },
    '10': {
      'Maths': ['Real numbers & quadratic equations', 'Coordinate geometry & pair of linear equations', 'Triangles & trigonometry basics', 'Mensuration (surface area & volume)', 'Statistics & probability'],
      'IQ / Reasoning': ['Series & analogy', 'Statement & conclusion', 'Direction & distance puzzles', 'Blood relation puzzles', 'Data sufficiency'],
      'Physics': ['Light & optics (lenses + reflection)', 'Electricity & circuits (Ohm’s law problems)', 'Magnetic effects of current'],
      'Chemistry': ['Chemical reactions & equations', 'Metals & non-metals', 'Carbon compounds & their uses'],
      'Biology': ['Life processes', 'Control & coordination', 'Heredity & evolution', 'Human health & diseases']
    },
    '11': {
      'IQ (6 Q)': ['Number/letter coding', 'Syllogisms', 'Seating arrangement basics', 'Statement–assumption/inference', 'Data interpretation (bar/line)', 'Simple analytical puzzle'],
      'Physics (5 Q)': ['Kinematics (motion in straight line & plane)', 'Laws of Motion & force/friction', 'Work, Power & Energy', 'Oscillations & Waves (intro basics)', 'Gravitation (basic problems)'],
      'Chemistry (5 Q)': ['Some basic concepts of Chemistry (mole, stoichiometry)', 'Structure of atom (Bohr + quantum numbers)', 'Periodic table trends', 'Chemical bonding & molecular structure', 'States of matter (gas laws basics)'],
      'English (4 Q)': ['Reading comprehension (1 short passage, 2 Q)', 'Vocabulary (1 Q synonym/antonym)', 'Error spotting (1 Q)']
    },
    '12': {
      'IQ (6 Q)': ['Higher series & analogy', 'Multi-rule coding–decoding', 'Seating arrangement (linear/circular)', 'Assertion–reason logic', 'Quant reasoning (ratio/time)', 'Data sufficiency'],
      'Physics (5 Q)': ['Electrostatics & Current electricity', 'Magnetism & Electromagnetic induction', 'Optics (lenses & wave basics)', 'Alternating current (basic)', 'Modern physics (nuclei, photoelectric effect)'],
      'Chemistry (5 Q)': ['Solid state & solutions', 'Electrochemistry & chemical kinetics', 'Coordination compounds (basic concepts)', 'Organic chemistry: Alcohols, phenols, ethers', 'General principles of isolation of elements (basic metallurgy)'],
      'English (4 Q)': ['Reading comprehension (2 Q)', 'Vocabulary (1 Q synonym/antonym)', 'Cloze/fill in blanks (1 Q)']
    }
  };

  const currentSyllabus = syllabusData[classNumber] || syllabusData['6'];

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in">
        <style>{.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }}</style>
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
          Syllabus for Class {classNumber}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Here is a snapshot of the topics for the RNMC championship quiz.
        </p>
      </header>

      <div className="mb-8 p-4 rounded-lg bg-green-500/10 border border-green-400/30 text-center flex items-center justify-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-300"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
        <p className="font-semibold text-green-300">
            Important Note: There will be no negative marking for incorrect answers.
        </p>
      </div>
      
      <div className="space-y-8">
        {Object.entries(currentSyllabus).map(([subject, topics]) => (
          <div key={subject} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b-2 border-cyan-500/20 pb-3">{subject}</h3>
            <div className="flex flex-wrap gap-3">
              {topics.map(topic => (
                  <span key={topic} className="px-4 py-2 rounded-full bg-slate-700/60 text-slate-300 text-sm font-medium border border-slate-600/80 hover:bg-slate-700 transition-colors cursor-default">
                    {topic}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={onBack}
          className="inline-block self-start px-8 py-3 rounded-full bg-slate-700 text-slate-200 font-bold hover:bg-slate-600 transition-colors">
          &larr; Back to Main Page
        </button>
      </div>
    </div>
  );
};


export default function App() {
  const [selectedClass, setSelectedClass] = React.useState(null);

  const syllabus = [
    { subject: "Maths", count: 5, icon: "➗" },
    { subject: "IQ", count: 5, icon: "🧩" },
    { subject: "Physics", count: 3, icon: "🧪" },
    { subject: "Chemistry", count: 3, icon: "⚗" },
    { subject: "Biology", count: 4, icon: "🧬" },
  ];

  const faqs = [
    {
      q: "How will admit cards be delivered?",
      a: "Admit cards are shared on the phone number provided during registration via WhatsApp. Admit card will be required for class verification before prizes are distributed."
    },
    {
      q: "How long until cashback is credited?",
      a: "Cashback is usually processed within 1–2 business days to the UPI you provide."
    }
  ];

  const MainContent = () => (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in">
       <style>{.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }}</style>
      {/* Header */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-cyan-500/10 text-cyan-400 p-3 rounded-full mb-4">
          <Trophy className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400">
          RNMC — Kerala State Level Championship
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
          Welcome to the Ramanujan National Mathematics Competition (RNMC), a secure, professional quiz platform for learners (classes 6 → 12). Fast, fair and certificate-backed.
        </p>
      </header>

      {/* Top Info Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <InfoCard icon={<BrainCircuit className="w-8 h-8"/>} title="Why Take This Quiz?">
          An engaging, fair test of knowledge across core subjects. Build confidence and prove your academic worth. Top performers receive <span className="font-semibold text-cyan-400">digitally verifiable certificates.</span>
        </InfoCard>
        
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
          <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2"><Award className="w-6 h-6 text-yellow-400"/>Prizes & Rewards</h3>
          <p className="text-slate-400 text-sm mb-6">Celebrate your achievement! Cash awards for top performers and class toppers.</p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="py-4 px-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
              <p className="text-sm text-yellow-400">1st Prize</p>
              <p className="text-2xl font-bold text-white mt-1">₹11,500</p>
            </div>
            <div className="py-4 px-2 rounded-lg bg-slate-500/10 border border-slate-500/20">
              <p className="text-sm text-slate-400">2nd Prize</p>
              <p className="text-2xl font-bold text-white mt-1">₹5,500</p>
            </div>
            <div className="py-4 px-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
              <p className="text-sm text-cyan-400">Class Topper</p>
              <p className="text-2xl font-bold text-white mt-1">₹500</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Prizes Section - COMPACT VERSION */}
      <section className="mb-16">
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-200 text-center mb-1">More Exciting Prizes</h2>
              <p className="text-slate-400 mb-6 text-center text-sm">Top participants also stand a chance to win amazing gadgets.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                      <img src="/images/image1.png" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1E2B3B/FFFFFF?text=💻'; }} alt="Laptop Prize" className="w-24 h-24 rounded-full object-cover mx-auto bg-slate-700/50 border-2 border-slate-600/50 mb-2"/>
                      <h3 className="font-semibold text-slate-300">MacBook</h3>
                  </div>
                  <div className="text-center">
                      <img src="/images/image2.png" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1E2B3B/FFFFFF?text=📱'; }} alt="Mobile Prize" className="w-24 h-24 rounded-full object-cover mx-auto bg-slate-700/50 border-2 border-slate-600/50 mb-2"/>
                      <h3 className="font-semibold text-slate-300">IPhone</h3>
                  </div>
                  <div className="text-center">
                      <img src="/images/image3.png" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1E2B3B/FFFFFF?text=🎧'; }} alt="Headphones Prize" className="w-24 h-24 rounded-full object-cover mx-auto bg-slate-700/50 border-2 border-slate-600/50 mb-2"/>
                      <h3 className="font-semibold text-slate-300">Headphones</h3>
                  </div>
              </div>
          </div>
      </section>

      {/* Main Content Grid */}
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard icon={<BookCopy className="w-5 h-5"/>} title="Syllabus Snapshot">
          <p className="mb-4">Each quiz contains a concise, class-tailored mix of subjects:</p>
          <div className="flex flex-wrap gap-2">
            {syllabus.map(s => (
              <div key={s.subject} className="flex items-center gap-2 text-xs py-1 px-2.5 rounded-full bg-slate-700/50 text-slate-300">
                {s.icon} <span className="font-medium">{s.subject}</span> ({s.count})
              </div>
            ))}
          </div>
           <p className="mt-4 text-xs text-slate-400 border-t border-slate-700 pt-2">
             <span className="font-bold text-cyan-400">Note:</span> Classes 11 & 12 have a revised syllabus including English. See details on their respective pages.
           </p>
        </FeatureCard>

        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>} title="Fair Syllabus Matching">
          Questions are mapped to your declared class (6-12), ensuring a level playing field for all participants in a combined session.
        </FeatureCard>

        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>} title="First-to-Finish Bonus">
          Speed matters! In case of a tie, the fastest submission wins the top prize. This adds an exciting layer of strategy to the competition.
        </FeatureCard>
        
        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><shield-check className="h-5 w-5 lucide lucide-shield-check"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>} title="Protected Exam Environment">
          The exam is conducted in a secure environment with integrity checks in place to prevent cheating and ensure a fair result for everyone.
        </FeatureCard>
        
        <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.06-1.14L9.5 6 3.22 6"/></svg>} title="Referral Cashback">
          Receive a code after registration. If another student signs up with your code, you get a cashback of <span className="font-semibold text-cyan-400">₹30 – ₹119</span>.
        </FeatureCard>

        <FeatureCard icon={<FlaskConical className="w-5 h-5"/>} title="Try a Sample Test">
          <p className="mb-4">Get a feel for the quiz format before registering. Take a short sample test now!</p>
          <a href="https://app.easyevaluate.com/attendee?Test=pAEqZfH76M" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 text-sm font-bold rounded-md bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/20 transition-colors">
              Take Sample Test
          </a>
        </FeatureCard>

        <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
          <div className="md:flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">View Class Syllabus</h3>
                <p className="text-slate-400 text-sm mb-4 md:mb-0">Get prepared by reviewing the syllabus for your class.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                  {['6', '7', '8', '9', '10', '11', '12'].map(c => (
                      <button key={c} onClick={() => setSelectedClass(c)} className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-700/80 text-slate-300 hover:bg-slate-700 transition-colors">
                          Class {c}
                      </button>
                  ))}
              </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>} title="Frequently Asked Questions">
            <div className="space-y-2 mt-2 -mx-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group p-3 rounded-lg hover:bg-slate-700/40" name="faq">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-slate-300 list-none">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="text-slate-400 text-sm mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </FeatureCard>
        </div>
      </main>
      
      {/* Registration & Schedule Section */}
      <section className="mt-16 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-slate-700/50 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white">Ready to Participate?</h3>
          <p className="text-slate-300 mt-2 mb-6">Secure your spot in the championship. The registration fee is just <span className="font-bold text-cyan-300">₹119</span>.</p>
          <a href="https://rnmc-kerala-cham.formaloo.co/2enj8o" target="_blank" rel="noreferrer" className="inline-block self-start px-8 py-3 rounded-full bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_theme(colors.cyan.500/30%)]">
            Register Now
          </a>
        </div>
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
           <h3 className="text-lg font-semibold text-slate-200 mb-2">Key Dates</h3>
           <div className="space-y-3 text-sm">
               <div className="flex items-start gap-3">
                   <span className="text-cyan-400 mt-0.5">📅</span>
                   <div>
                       <p className="font-semibold text-slate-300">Registration Deadline</p>
                       <p className="text-slate-400">8 October 2025</p>
                   </div>
               </div>
               <div className="flex items-start gap-3">
                   <span className="text-cyan-400 mt-0.5">🗓</span>
                   <div>
                       <p className="font-semibold text-slate-300">Exam Day</p>
                       <p className="text-slate-400">Sunday closest to 10 Oct 2025</p>
                   </div>
               </div>
                <div className="flex items-start gap-3">
                   <span className="text-cyan-400 mt-0.5">⏰</span>
                   <div>
                       <p className="font-semibold text-slate-300">Exam Window</p>
                       <p className="text-slate-400">10:00 AM — 5:00 PM</p>
                   </div>
               </div>
           </div>
        </div>
      </section>

      <footer className="mt-24 text-center text-sm text-slate-500">
        <p>RNMC copyrighted ©</p>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-[#0D1117] text-slate-300 font-sans antialiased">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-0 w-1/2 h-2/3 bg-gradient-to-br from-cyan-900/50 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1-2 h-2/3 bg-gradient-to-tl from-indigo-900/50 to-transparent blur-3xl"></div>
      </div>
      
      {selectedClass ? (
        <SyllabusPage classNumber={selectedClass} onBack={() => setSelectedClass(null)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}