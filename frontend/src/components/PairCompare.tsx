import React from 'react';
import AthleteCard, { Athlete } from './AthleteCard';

/**
 * PairCompare toont twee atleetkaarten naast elkaar. Met behulp van een
 * responsief grid past de indeling zich aan voor kleinere schermen.
 */
export default function PairCompare({
  athlete1,
  athlete2,
}: {
  athlete1: Athlete;
  athlete2: Athlete;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AthleteCard athlete={athlete1} />
      <AthleteCard athlete={athlete2} />
    </div>
  );
}
