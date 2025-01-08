import React from 'react';

const collaborators = [
  "Abhinav Ramesh", "Alessandro Argenio", "Alessandro Bernard", "Alessandro Contini",
  "Alessandra Martina", "Alessio Nicastro", "Alice Mela", "Amedeo Spagnolo",
  "Andrea Bocca", "Andrea Corradi", "Andrea Iannantuoni", "Andrea Pinchi",
  "Beatrice Pepe", "Carlo Syed", "Elena Fonti", "Elena Gianni", "Edoardo Tenani",
  "Emanuele Lomello", "Emilio Bondioli", "Enrico Ascoli", "Eric Tron Gianet",
  "Ezra Capogna", "Fabiola Nardecchia", "Fabrizio Bonaga", "Federica Zucchini",
  "Francesco Carletto", "Gabriele Gambotto", "Giuseppe Piazza", "Julie Faure",
  "Karen Oetling", "Kerem Türkyılmaz", "Lorenzo Romagnoli", "Luca Zanconi",
  "Marco Aimo", "Mario Ciardulli", "Marta Garbolino", "Marta Monge",
  "Marzio Del Sole", "Matteo Barbeni", "Matteo Milaneschi", "Matteo Palù",
  "Michelle Nebiolo", "Nicole Martinet", "Paolo Ceretto", "Riccardo Mongelluzzo",
  "Stefania Vulpi", "Stefano Maccarelli", "Vanessa Poli", "Virginia Toffetti"
];

export function CollaboratorsList() {
  return (
    <div className="border-t pt-24 mb-24">
      <h2 className="font-medium text-lg mb-12">People</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 text-sm leading-relaxed">
        {collaborators.map((collaborator) => (
          <div key={collaborator} className="mb-3 break-inside-avoid">
            {collaborator}
          </div>
        ))}
      </div>
    </div>
  );
}