"use client";

import { useState } from 'react';

/**
 * StartListImporter accepteert een CSV bestand met een startlijst. Op dit
 * moment wordt enkel de bestandsnaam getoond en wordt parsing nog niet
 * uitgevoerd. In de toekomst kan hier bijvoorbeeld PapaParse gebruikt
 * worden om de startlijst in te lezen en door te sturen naar een backend.
 */
export default function StartListImporter() {
  const [fileName, setFileName] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // TODO: parse CSV en sla data op in state of roep API aan
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <label className="block mb-2 font-semibold">Startlijst importeren (CSV)</label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      {fileName && (
        <p className="mt-2 text-sm text-gray-600">Geselecteerd: {fileName}</p>
      )}
    </div>
  );
}
