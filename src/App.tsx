import React from 'react';
import { Dot } from 'lucide-react';
import { ClientsList } from './components/ClientsList';
import { CollaboratorsList } from './components/CollaboratorsList';

function App() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-12 lg:px-24 py-12 md:py-24">
      <main className="max-w-4xl mx-auto">
        {/* Initial Statement 
        <h1 className="font-light text-2xl md:text-3xl lg:text-4xl mb-12 leading-relaxed">
          Closing a chapter rich with creativity and innovation, TODO disbanded and concluded its transformative journey spanning over 15 years.
        </h1>

        <div className="space-y-12 mb-12 text-lg leading-relaxed">
          <p>
            Amidst the ever-evolving digital landscape, we passionately pushed the boundaries of design to craft new worlds and weave meaningful narratives.
          </p>
          <p>
            As one of the pioneering Italian interaction design studios, our trajectory led us through award-winning installations, from museums to music festivals, encompassing branding and creative direction. We ventured into the realm of augmented gaming experiences, interactive audience engagement at events and exhibitions, mobile apps, kinetic installations and groundbreaking generative design research.
          </p>
          <p>
            To our collaborators, clients, and friends – a heartfelt thank you for being integral to our extraordinary journey.
          </p>
        </div>

        <div className="mb-24">
          <p className="text-lg mb-2">Farewell - 2023</p>
          <div className="font-light">
            Giorgio Olivero <Dot className="inline h-4 w-4" /> 
            Fabio Franchino <Dot className="inline h-4 w-4" /> 
            Andrea Clemente <Dot className="inline h-4 w-4" /> 
            Fabio Cionini
          </div>
        </div>*/}




        {/* Initial Statement */}
        <h1 className="font-light text-2xl md:text-3xl lg:text-4xl mb-12 leading-relaxed">
          A Journey Concluded, but Not Forgotten
        </h1>

        {/* Main Content */}
        <div className="space-y-12 mb-12 text-lg leading-relaxed">
          <p>
            After over 15 years of creative exploration and boundary-pushing innovation, TODO has come to a close.
          </p>
          <p>
            As one of Italy's pioneering interaction design studios, we embraced the ever-changing digital landscape, crafting engaging worlds and meaningful experiences. Our journey led us to create award-winning installations in museums, festivals, and beyond—spanning branding, creative direction, mobile apps, kinetic installations, augmented gaming, and cutting-edge generative design.
          </p>
          <p>
            This chapter wouldn't have been possible without the incredible collaborators, clients, and friends who traveled alongside us. To each of you—thank you for being part of our story.
          </p>
           <p>
            While TODO's doors close, the spirit of curiosity and experimentation lives on in new adventures.
          </p>
        </div>

        {/* Signature */}
        <div className="mb-24">
          <p>
            With gratitude,<br />
            Giorgio Olivero<Dot className="inline h-4 w-4" /> 
            Fabio Franchino<Dot className="inline h-4 w-4" /> 
            Andrea Clemente<Dot className="inline h-4 w-4" /> 
            Fabio Cionini<br />
            Farewell, 2023
          </p>

          
        </div>

        {/* Extended Message 
        <div className="border-t pt-24 mb-24 space-y-8 text-sm leading-relaxed opacity-70">
          <h2 className="font-medium mb-8">A Journey Concluded, but Not Forgotten</h2>
          <p>
            After over 15 years of creative exploration and boundary-pushing innovation, TODO has come to a close.
          </p>
          <p>
            As one of Italy's pioneering interaction design studios, we embraced the ever-changing digital landscape, crafting engaging worlds and meaningful experiences. Our journey led us to create award-winning installations in museums, festivals, and beyond—spanning branding, creative direction, mobile apps, kinetic installations, augmented gaming, and cutting-edge generative design.
          </p>
          <p>
            This chapter wouldn't have been possible without the incredible collaborators, clients, and friends who traveled alongside us. To each of you—thank you for being part of our story.
          </p>
          <p>
            While TODO's doors close, the spirit of curiosity and experimentation lives on in new adventures.
          </p>
          <p>
            With gratitude,<br />
            Giorgio Olivero, Fabio Franchino, Andrea Clemente, Fabio Cionini<br />
            Farewell, 2023
          </p>
        </div>*/}

        {/* Collaborators List */}
        <CollaboratorsList />

        {/* Clients List */}
        <ClientsList />

        
      </main>
    </div>
  );
}

export default App;
