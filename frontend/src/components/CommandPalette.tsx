"use client";

import { useState } from 'react';

/**
 * CommandPalette is een eenvoudige zoekbalk die gebruikt kan worden om snel sporters
 * of uitslagen op te zoeken. Deze component bevat nog geen daadwerkelijke zoeklogica,
 * maar is voorbereid om later een backend of API aan te roepen.
 */
export default function CommandPalette() {
  const [query, setQuery] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: roep zoeklogica aan wanneer beschikbaar
    console.log('Zoekopdracht:', query);
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Typ om een sporter of uitslag te zoeken..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
}
