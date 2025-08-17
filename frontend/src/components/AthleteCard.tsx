import React from 'react';

export interface PersonalBest {
  event: string;
  time: string;
}

export interface Athlete {
  name: string;
  country?: string;
  age?: number;
  personalBests?: PersonalBest[];
}

/**
 * AthleteCard toont basisinformatie over een sporter. Het is ontworpen als
 * generieke component zodat het zowel zelfstandig als binnen andere
 * componenten (bijv. PairCompare) gebruikt kan worden.
 */
export default function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-semibold mb-1">{athlete.name}</h2>
      {athlete.country && <p className="text-gray-500 mb-1">{athlete.country}</p>}
      {athlete.age !== undefined && <p className="mb-2">Leeftijd: {athlete.age}</p>}
      {athlete.personalBests && athlete.personalBests.length > 0 && (
        <div className="mt-2">
          <h3 className="font-semibold mb-1">Persoonlijke records</h3>
          <ul className="space-y-1 text-sm">
            {athlete.personalBests.map((pb, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{pb.event}</span>
                <span>{pb.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
