import React from 'react';

const clients = [
  "1436 - ERDOS", "Acquario di Genova", "Antonio Vallardi Editore", "Arduino", "Audi",
  "Banca d'Italia", "BMW", "Cartier", "Circolo del Design", 
  "Ciudad de las Artes y las Ciencias - Valencia", "Clementoni", "Comitato Italia 150",
  "Compagnia di San Paolo", "Comune di Bologna", "Cupra", "Doha Tribeca Film Institute",
  "Domus Academy", "Eataly", "Enel", "Enerbrain", "Expo Milano 2015", "Ferrero", "Fiat",
  "Fondazione Agnelli", "Fondazione Innovazione Urbana", "Franke", "Grom",
  "Hotpoint Ariston", "Hyundai", "IAAD", "IED", "Infocamere", "Maker Faire Rome",
  "Mozilla Foundation", "MUSE", "Museo Egizio", "MTV", "NABA", "Nesta", "Nike",
  "Orto Botanico di Padova", "Peugeot", "Reale Mutua", "San Siro 2000", "Sky", "SUPSI",
  "Telecom Italia", "Torino World Design Capital", "Unilever", "VCU Qatar", "Vodafone",
  "Volkswagen Group Italia", "Telt", "Unicredit", "United Arab Emirates University"
];

export function ClientsList() {
  return (
    <div className="border-t pt-24">
      <h2 className="font-medium text-lg mb-12">Selected Clients</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 text-sm leading-relaxed">
        {clients.map((client) => (
          <div key={client} className="mb-3 break-inside-avoid">
            {client}
          </div>
        ))}
      </div>
    </div>
  );
}