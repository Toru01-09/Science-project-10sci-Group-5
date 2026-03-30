import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FlaskConical, Atom, Leaf, MonitorPlay, 
  CheckCircle2, ChevronDown, Droplets, Flame, 
  Wind, FileText, Video, Image as ImageIcon,
  Beaker, ThermometerSun, Zap, Globe, ArrowRight,
  Menu, X
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string, key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('chemistry');
  const [openRubric, setOpenRubric] = useState<string | null>('chemistry');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-cream/90 backdrop-blur-md z-50 border-b border-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-sage-dark">
              <Leaf className="w-6 h-6 text-sage" />
              <span>Group 5</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Science', 'Process', 'Team', 'Rubric'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-charcoal-light hover:text-sage-dark transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-charcoal p-2">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream border-b border-sage/20 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {['About', 'Science', 'Process', 'Team', 'Rubric'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-charcoal hover:bg-sage/10 rounded-md font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="flame-container">
              <div className="flame flame-outer"></div>
              <div className="flame flame-inner"></div>
              <div className="flame flame-core"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight"
          >
            Eco-Friendly <br className="hidden md:block" />
            <span className="text-sage-dark">Soy Wax Candle</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xl text-charcoal-light max-w-2xl mx-auto mb-10"
          >
            A Grade 10 Science Project exploring the intersection of Chemistry, Physics, Biology, and ICT through sustainable product design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button onClick={() => scrollTo('science')} className="px-8 py-4 bg-sage text-white rounded-full font-medium hover:bg-sage-dark transition-colors shadow-lg shadow-sage/30 flex items-center justify-center gap-2">
              Explore the Science <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollTo('process')} className="px-8 py-4 bg-white text-charcoal border border-sage/30 rounded-full font-medium hover:bg-cream-dark transition-colors flex items-center justify-center gap-2">
              See the Process
            </button>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-sage uppercase mb-2">Project Overview</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">A Multidisciplinary Approach</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: FlaskConical, title: "Chemistry", desc: "Combustion reactions and hydrocarbon structures.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Atom, title: "Physics", desc: "Atomic models and energy transformations.", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Leaf, title: "Biology", desc: "Ecosystem impact and renewable resources.", color: "text-sage-dark", bg: "bg-sage/10" },
              { icon: MonitorPlay, title: "ICT", desc: "Digital design, research, and presentation.", color: "text-amber", bg: "bg-amber/10" }
            ].map((subject, idx) => (
              <FadeIn key={subject.title} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl border border-cream-dark hover:shadow-xl transition-shadow bg-white h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full ${subject.bg} flex items-center justify-center mb-6`}>
                    <subject.icon className={`w-8 h-8 ${subject.color}`} />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-3">{subject.title}</h4>
                  <p className="text-charcoal-light text-sm">{subject.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-sm border border-sage/20">
              <h4 className="text-2xl font-serif font-bold text-center mb-8">Why Soy Wax?</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 border-b-2 border-sage/30 font-serif text-lg">Feature</th>
                      <th className="p-4 border-b-2 border-sage/30 font-serif text-lg text-sage-dark">Soy Wax (Our Choice)</th>
                      <th className="p-4 border-b-2 border-sage/30 font-serif text-lg text-charcoal-light">Paraffin Wax</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Source", soy: "Soybeans (Renewable)", paraffin: "Petroleum (Non-renewable)" },
                      { feature: "Burn Time", soy: "Slower, lasts up to 50% longer", paraffin: "Burns quickly" },
                      { feature: "Soot Production", soy: "Clean burn, minimal soot", paraffin: "Produces black soot (petro-carbon)" },
                      { feature: "Toxicity", soy: "Non-toxic, biodegradable", paraffin: "Releases VOCs when burned" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/50 transition-colors">
                        <td className="p-4 border-b border-cream-dark font-medium">{row.feature}</td>
                        <td className="p-4 border-b border-cream-dark text-sage-dark flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> {row.soy}
                        </td>
                        <td className="p-4 border-b border-cream-dark text-charcoal-light">{row.paraffin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SCIENCE HUB SECTION */}
      <section id="science" className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold tracking-widest text-amber uppercase mb-2">Science Hub</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">The Science Behind the Flame</h3>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'chemistry', label: 'Chemistry', icon: FlaskConical },
              { id: 'physics', label: 'Physics', icon: Atom },
              { id: 'biology', label: 'Biology', icon: Leaf },
              { id: 'ict', label: 'ICT', icon: MonitorPlay }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-amber text-charcoal shadow-lg shadow-amber/20' 
                    : 'bg-charcoal-light/30 text-cream hover:bg-charcoal-light/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-charcoal-light/20 border border-charcoal-light/30 rounded-3xl p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'chemistry' && (
                <motion.div
                  key="chemistry"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                        <FlaskConical className="w-6 h-6" /> Introduction to Wax
                      </h4>
                      <p className="text-cream-dark leading-relaxed text-sm">
                        Candle wax is mainly made of <strong>hydrocarbons</strong>, which are compounds containing only Carbon (C) and Hydrogen (H). An example of wax is paraffin wax. It consists mostly of long-chain alkanes (typically C<sub>20</sub>-C<sub>40</sub>).
                        <br/><br/>
                        The general formula of alkanes is <strong>C<sub>n</sub>H<sub>2n+2</sub></strong>. The alkanes make the wax solid at room temperature, have a high melting point, and are combustible (burn easily).
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                        <Beaker className="w-6 h-6" /> Saturated vs Unsaturated
                      </h4>
                      <div className="bg-charcoal/50 rounded-xl p-4 border border-charcoal-light text-sm">
                        <div className="grid grid-cols-2 gap-4 mb-2 border-b border-charcoal-light pb-2 font-bold text-amber-light">
                          <div>Saturated (Alkanes)</div>
                          <div>Unsaturated (Alkenes)</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-cream-dark">
                          <ul className="space-y-2">
                            <li>• Single bond (C-C)</li>
                            <li>• Less reactive</li>
                            <li>• No reaction with bromine water</li>
                            <li>• e.g., Methane (CH<sub>4</sub>)</li>
                          </ul>
                          <ul className="space-y-2">
                            <li>• Double bond (C=C)</li>
                            <li>• More reactive</li>
                            <li>• Decolourises bromine water</li>
                            <li>• e.g., Ethene (C<sub>2</sub>H<sub>4</sub>)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Flame className="w-6 h-6" /> Combustion of Hydrocarbons
                    </h4>
                    <p className="text-cream-dark leading-relaxed text-sm mb-4">
                      When hydrocarbons burn in oxygen, they undergo combustion reactions.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-charcoal/50 p-4 rounded-xl border border-charcoal-light">
                        <h5 className="font-bold text-sage-light mb-2">Complete Combustion (Enough Oxygen)</h5>
                        <p className="text-sm text-cream-dark mb-2">Produces carbon dioxide (CO<sub>2</sub>), water vapour, and energy.</p>
                        <code className="text-xs text-amber block bg-charcoal p-2 rounded">
                          Hydrocarbon + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O(g) + energy
                        </code>
                      </div>
                      
                      <div className="bg-charcoal/50 p-4 rounded-xl border border-charcoal-light">
                        <h5 className="font-bold text-amber-light mb-2">Incomplete Combustion (Limited Oxygen)</h5>
                        <p className="text-sm text-cream-dark mb-2">Produces soot (C), carbon monoxide (CO), and water.</p>
                        <code className="text-xs text-amber block bg-charcoal p-2 rounded">
                          Hydrocarbon + O<sub>2</sub> → CO + H<sub>2</sub>O + C
                        </code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'physics' && (
                <motion.div
                  key="physics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Atom className="w-6 h-6" /> Rutherford's Atom
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      Understanding the atom is crucial to understanding how light is produced. Rutherford's model showed a dense nucleus surrounded by electrons. When wax burns, energy excites these electrons. As they return to their ground state, they release energy in the form of photons (light), giving the candle its glow.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Zap className="w-6 h-6" /> Chemical vs Nuclear Change
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      Burning a candle is a <strong>chemical change</strong>. The atoms rearrange to form new molecules (CO<sub>2</sub> and H<sub>2</sub>O), but the atoms themselves remain intact. This is vastly different from a <strong>nuclear change</strong> (like in the sun), where the nucleus of the atom itself is altered, releasing millions of times more energy.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'biology' && (
                <motion.div
                  key="biology"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Globe className="w-6 h-6" /> Ecosystem Impact
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      Paraffin wax extraction and refining can lead to oil spills and habitat destruction. Soy wax, derived from soybeans, supports agricultural ecosystems. However, we must also consider the impact of monoculture farming and ensure sustainable agricultural practices are used to prevent soil depletion.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Leaf className="w-6 h-6" /> Renewable Resources
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      Soybeans are a renewable resource; they can be planted and harvested annually. Petroleum (paraffin) takes millions of years to form. By choosing soy wax, we are utilizing the carbon cycle efficiently—the CO<sub>2</sub> released during burning is roughly equal to what the soybean plant absorbed while growing.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ict' && (
                <motion.div
                  key="ict"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-12"
                >
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <MonitorPlay className="w-6 h-6" /> Digital Tools & Canva
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      We utilized Canva to design our product labels, promotional flyers, and presentation slides. This required understanding visual hierarchy, color theory (matching our eco-friendly theme), and typography to effectively communicate our scientific findings to a general audience.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-amber mb-4 flex items-center gap-3">
                      <Globe className="w-6 h-6" /> Internet Research & QR Codes
                    </h4>
                    <p className="text-cream-dark leading-relaxed">
                      Extensive internet research was conducted using credible scientific databases to gather data on wax properties. We also generated a dynamic QR code for our physical product label, linking directly to this digital portfolio, bridging the physical and digital aspects of our project.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MAKING PROCESS SECTION */}
      <section id="process" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-sage uppercase mb-2">Methodology</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">The Making Process</h3>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stepper */}
            <div className="space-y-8">
              {[
                { step: 1, title: "Prepare Container", desc: "Clean the glass jar and secure the cotton wick to the bottom center." },
                { step: 2, title: "Melt Soy Wax", desc: "Use a double boiler to gently melt soy wax flakes to 185°F (85°C)." },
                { step: 3, title: "Add Fragrance", desc: "Remove from heat. Add natural essential oils at 175°F (80°C) and stir gently." },
                { step: 4, title: "Pour Wax", desc: "Carefully pour the wax into the prepared container at 135°F (57°C)." },
                { step: 5, title: "Cure & Trim", desc: "Allow to cool undisturbed for 24 hours. Trim wick to 1/4 inch before lighting." }
              ].map((item, idx) => (
                <FadeIn key={item.step} delay={idx * 0.1}>
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center font-bold text-xl shadow-md z-10">
                        {item.step}
                      </div>
                      {idx < 4 && <div className="w-0.5 h-full bg-sage/30 mt-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                      <p className="text-charcoal-light">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Materials Grid & Video Link */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-cream-dark mb-8">
                <div className="bg-amber/10 border border-amber/20 rounded-2xl p-6 mb-8 text-center">
                  <Video className="w-8 h-8 text-amber mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-lg mb-2">Watch Our Process</h4>
                  <p className="text-sm text-charcoal-light mb-4">See the step-by-step video of our group making the eco-friendly soy wax candle.</p>
                  <a href="https://drive.google.com/file/d/14v1ZWi7euEEXdnltR-T2ehD-BHoBTHUZ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-amber hover:text-amber-light transition-colors">
                    Open Video <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-2xl font-serif font-bold text-center mb-8">Required Materials</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Soy Wax Flakes", icon: Droplets },
                    { name: "Cotton Wicks", icon: Wind },
                    { name: "Glass Jars", icon: Beaker },
                    { name: "Essential Oils", icon: Leaf },
                    { name: "Double Boiler", icon: Flame },
                    { name: "Thermometer", icon: ThermometerSun }
                  ].map((material, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-cream rounded-xl border border-sage/10">
                      <material.icon className="w-6 h-6 text-amber" />
                      <span className="font-medium text-charcoal">{material.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-sage uppercase mb-2">Group 5</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">Meet the Team</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Evelyn", role: "Chemistry Lead", icon: FlaskConical, color: "bg-blue-100 text-blue-600" },
              { name: "Rex", role: "Physics Lead", icon: Atom, color: "bg-purple-100 text-purple-600" },
              { name: "Giovanna", role: "Design Lead", icon: ImageIcon, color: "bg-green-100 text-green-600" },
              { name: "Toru", role: "ICT & Biology Lead", icon: MonitorPlay, color: "bg-amber-100 text-amber-600" }
            ].map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-cream p-8 text-center hover:shadow-xl transition-all border border-sage/10">
                  <div className="absolute top-0 left-0 w-full h-2 bg-sage transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className={`w-20 h-20 mx-auto rounded-full ${member.color} flex items-center justify-center mb-6 shadow-inner`}>
                    <member.icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-charcoal mb-1">{member.name}</h4>
                  <p className="text-sage-dark font-medium text-sm uppercase tracking-wider">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-20 bg-sage text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-cream uppercase mb-2">Outputs</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">Project Deliverables</h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Digital Label", icon: ImageIcon, desc: "Product label designed with QR code integration.", link: null },
              { title: "Canva Flyer", icon: FileText, desc: "Science Project 2026 poster detailing the chemistry, physics, and biology of our candle.", link: "https://drive.google.com/drive/folders/1HQ5oq0tJj9Rx7p-U3o6SKdKreA4ZCAVV" },
              { title: "Project Video", icon: Video, desc: "Documentary of our making process and science.", link: "https://drive.google.com/file/d/14v1ZWi7euEEXdnltR-T2ehD-BHoBTHUZ/view?usp=drivesdk" }
            ].map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                {item.link ? (
                  <a href={item.link} target={item.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="block bg-sage-dark/50 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-sage-dark transition-colors h-full" onClick={(e) => { if (item.link === "#") { e.preventDefault(); alert("Please replace this placeholder with your actual Canva or Google Drive link in the code!"); } }}>
                    <item.icon className="w-12 h-12 text-amber mb-6" />
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-cream/80 mb-4">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 text-amber font-medium text-sm">
                      {item.title === "Project Video" ? "Watch Video" : "View Flyer"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                ) : (
                  <div className="bg-sage-dark/50 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-sage-dark transition-colors h-full">
                    <item.icon className="w-12 h-12 text-amber mb-6" />
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-cream/80">{item.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RUBRIC SECTION */}
      <section id="rubric" className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-sage uppercase mb-2">Evaluation</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">Scoring Rubric Alignment</h3>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {[
              { 
                id: 'chemistry', 
                title: 'Chemistry Criteria', 
                content: 'Demonstrates deep understanding of combustion reactions, balancing chemical equations, and the structural differences between alkanes (paraffin) and alkenes (soy wax). Product shows successful application of chemical principles in formulation.'
              },
              { 
                id: 'physics', 
                title: 'Physics Criteria', 
                content: 'Accurately explains the Rutherford atomic model in relation to light emission. Clearly distinguishes between chemical changes (burning wax) and nuclear changes, demonstrating understanding of energy transformations.'
              },
              { 
                id: 'biology', 
                title: 'Biology Criteria', 
                content: 'Thoroughly evaluates the ecological impact of materials used. Demonstrates understanding of renewable vs. non-renewable resources and the carbon cycle implications of agricultural products versus petrochemicals.'
              },
              { 
                id: 'ict', 
                title: 'ICT Criteria', 
                content: 'Exhibits high proficiency in digital tools (Canva, web development). Presentation is highly organized, aesthetically pleasing, and effectively communicates complex scientific information to a general audience. Innovative use of QR technology.'
              }
            ].map((rubric) => (
              <div key={rubric.id} className="bg-white border border-sage/20 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenRubric(openRubric === rubric.id ? null : rubric.id)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-cream/50 transition-colors"
                >
                  <span className="font-serif font-bold text-lg text-charcoal">{rubric.title}</span>
                  <ChevronDown className={`w-5 h-5 text-sage transition-transform duration-300 ${openRubric === rubric.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openRubric === rubric.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-charcoal-light border-t border-cream-dark">
                        <p className="leading-relaxed">{rubric.content}</p>
                        <div className="mt-4 flex items-center gap-2 text-sage-dark font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4" /> Target: Exceeds Expectations (Level 4)
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-cream py-12 border-t border-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 font-serif font-bold text-2xl text-sage mb-4">
                <Leaf className="w-6 h-6" />
                <span>Group 5</span>
              </div>
              <p className="text-charcoal-light max-w-md">
                Grade 10 Science Project integrating Chemistry, Physics, Biology, and ICT to create a sustainable future.
              </p>
            </div>
            <div className="md:text-right">
              <h5 className="font-bold uppercase tracking-wider text-sm text-amber mb-4">References</h5>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li>National Candle Association. (2023). Candle Science.</li>
                <li>Environmental Protection Agency. (2022). Indoor Air Quality.</li>
                <li>Soybean Board. (2023). Sustainable Agriculture.</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-charcoal-light/50 text-center text-sm text-charcoal-light flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Group 5 Science Project. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Educational Purposes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
