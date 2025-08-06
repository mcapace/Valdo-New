'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ValdobbiadeneSection: React.FC = () => {
  return (
    <section className="section-minimal bg-beige-light mt-0">
      <div className="container-minimal">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">VALDO IS VALDOBBIADENE</h2>
          <p className="section-subtitle">Named for the village at the historical center of Prosecco, Valdo wines are a direct interpretation of their legendary terroir</p>
          <div className="text-gold text-lg mb-4 font-semibold">[val·dob·bia·dé·ne]</div>
          <div className="inline-block p-4 border border-gold rounded-lg">
            <div className="text-center">
              <span className="text-lg font-semibold">UNESCO WORLD HERITAGE SITE</span>
              <p className="text-sm text-black mt-2 font-medium">
                The Prosecco Hills of Conegliano and Valdobbiadene were inscribed on the UNESCO World Heritage List in 2019
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-headline font-semibold text-black">WHY VALDOBBIADENE?</h3>
            <p className="text-body text-black leading-relaxed font-medium">
              Valdobbiadene is the heart and soul of exceptional Prosecco production. This extraordinary region in the Veneto province of Italy has been recognized as a UNESCO World Heritage Site for its centuries-old tradition of viticulture and the unique landscape shaped by generations of winemakers.
            </p>
            <p className="text-body text-black leading-relaxed font-medium">
              Nestled between the snow-capped mountains and the Adriatic Sea, Valdo's homeland is naturally protected which ensures a productive growth season year-after-year in the hills of Valdobbiadene. Here, the Glera grape reaches its pinnacle.
            </p>
            <p className="text-body text-black leading-relaxed font-medium">
              The unique microclimate of Valdobbiadene, with its rolling hills, optimal sun exposure, and perfect soil composition, creates the ideal conditions for growing the finest Glera grapes.
            </p>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Vineyards/Copia di Copia di drone_territorio_valdobbiadene.jpg"
                alt="Valdobbiadene Vineyards"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <h3 className="text-headline font-semibold text-black mb-6">VALDOBBIADENE PROSECCO SUPERIORE DOCG</h3>
          <p className="text-body text-black leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
            The prestigious DOCG (Denominazione di Origine Controllata e Garantita) represents Italy's highest quality classification for wines. Only wines produced in the most prestigious vineyards of Valdobbiadene can bear this designation. Valdo wines proudly bear the quality seals of Prosecco Superiore DOCG and Prosecco DOC— delivering a wine that is guaranteed to be more refined, more complex.
          </p>
          
          {/* Google Maps Embed */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-4xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26091.627404168434!2d11.970047620220445!3d45.89259399936332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!1!3m3!1m2!1s0x47791f036175e295%3A0x407098715915c90!2s31049%20Valdobbiadene%2C%20Province%20of%20Treviso%2C%20Italy!5e1!3m2!1sen!2sus!4v1754337828951!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Logos */}
          <div className="flex justify-center">
            <Image
              src="/images/Maps/Screenshot_2025-08-04_at_5.06.04_PM-removebg-preview.png"
              alt="Valdobbiadene Logos"
              width={400}
              height={100}
              className="w-auto h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValdobbiadeneSection; 