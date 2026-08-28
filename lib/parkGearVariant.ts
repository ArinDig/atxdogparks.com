import { DogPark } from '@/types/dogPark'
import type { ParkGearVariant } from '@/components/GearRecommendations'

// Phrases that indicate a dog can actually get IN the water here.
//
// Deliberately does NOT match bare "creek" or "lake" — a large share of Austin
// park names contain them as proper nouns (Walnut Creek, Shoal Creek, Bull
// Creek, Onion Creek, Barton Creek, "Lake Creek Park pavilion"), and matching
// those tagged nearly every park in the directory as a swimming park.
const WATER_SIGNALS = [
  'swim',
  'wading',
  'water access',
  'lake access',
  'creek access',
  'dog pond',
  'pond for',
  'shallow stream',
  'cooling off',
  'off-leash in water',
  'boat ramp',
  'shoreline',
  'natural swimming',
]

const TRAIL_SIGNALS = [
  'hiking',
  'trail',
  'rocky',
  'limestone',
  'cliff',
  'natural terrain',
  'wooded',
  'greenbelt',
  'mixed terrain',
  'natural landscape',
  'acres of parkland',
  'acres of natural',
]

// Human amenities that contain a water word but mean nothing for a dog.
// "The wading pool runs roughly 1 to 8pm..." at West Austin Park is a kids'
// pool, not dog water access.
const FALSE_POSITIVES = ['wading pool', 'swimming pool on site', 'pool on site']

/**
 * Picks which gear set to show on a park page.
 *
 * Matches against description + features only (never the park name) so that
 * "Walnut Creek" doesn't read as water access.
 */
export function getParkGearVariant(park: DogPark): ParkGearVariant {
  let blob = [park.description ?? '', ...(park.features ?? [])].join(' ').toLowerCase()

  for (const phrase of FALSE_POSITIVES) {
    blob = blob.split(phrase).join(' ')
  }

  if (WATER_SIGNALS.some((s) => blob.includes(s))) return 'water'
  if (TRAIL_SIGNALS.some((s) => blob.includes(s))) return 'rocky'
  return 'general'
}
