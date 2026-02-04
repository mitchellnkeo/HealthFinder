/**
 * Mock provider data for list and grid views.
 * Each provider accepts a subset of insurance names; filter by selected insurance when searching.
 */
export const MOCK_PROVIDERS = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    clinic: 'HealthFirst Medical Center',
    specialty: 'Primary Care',
    address: '1234 Medical Ave, New York, NY 10001',
    phone: '(555) 123-4567',
    rating: 4.8,
    accepts: ['Blue Cross', 'Aetna', 'UnitedHealthcare', 'Cigna'],
    waitTime: '1-2 weeks',
    slots: [
      { date: 'Thu, Feb 5', count: 7 },
      { date: 'Fri, Feb 6', count: 3 },
      { date: 'Sat, Feb 7', count: 7 },
    ],
    imageUrl: null,
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    clinic: 'Downtown Health Clinic',
    specialty: 'Primary Care',
    address: '5678 Broadway, New York, NY 10012',
    phone: '(555) 234-5678',
    rating: 4.5,
    accepts: ['Blue Cross', 'Medicare', 'Medicaid'],
    waitTime: '2-3 weeks',
    slots: [
      { date: 'Thu, Feb 5', count: 1 },
      { date: 'Fri, Feb 6', count: 8 },
      { date: 'Sat, Feb 7', count: 5 },
    ],
    imageUrl: null,
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    clinic: 'Westside Family Medicine',
    specialty: 'Primary Care',
    address: '9012 Health Blvd, New York, NY 10011',
    phone: '(555) 345-6789',
    rating: 4.9,
    accepts: ['Aetna', 'Cigna', 'Humana'],
    waitTime: '3-5 days',
    slots: [
      { date: 'Thu, Feb 5', count: 4 },
      { date: 'Fri, Feb 6', count: 6 },
      { date: 'Sat, Feb 7', count: 2 },
    ],
    imageUrl: null,
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    clinic: 'Central Care Associates',
    specialty: 'Primary Care',
    address: '3456 Park Ave, New York, NY 10022',
    phone: '(555) 456-7890',
    rating: 4.6,
    accepts: ['Blue Cross', 'UnitedHealthcare', 'Medicare', 'Kaiser Permanente'],
    waitTime: '1 week',
    slots: [
      { date: 'Thu, Feb 5', count: 5 },
      { date: 'Fri, Feb 6', count: 5 },
      { date: 'Sat, Feb 7', count: 9 },
    ],
    imageUrl: null,
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    clinic: 'Metro Health Group',
    specialty: 'Primary Care',
    address: '7890 First Ave, New York, NY 10009',
    phone: '(555) 567-8901',
    rating: 4.7,
    accepts: ['Aetna', 'Medicaid', 'Cigna'],
    waitTime: '2 weeks',
    slots: [
      { date: 'Thu, Feb 5', count: 2 },
      { date: 'Fri, Feb 6', count: 4 },
      { date: 'Sat, Feb 7', count: 6 },
    ],
    imageUrl: null,
  },
];

/**
 * Filter providers by selected insurance.
 * @param {Array} providers - List of provider objects
 * @param {{ name: string } | null} selectedInsurance - Selected insurance or null
 * @returns {Array} Filtered providers (all if no insurance or "No Insurance" selected)
 */
export function filterProvidersByInsurance(providers, selectedInsurance) {
  if (!providers?.length) return [];
  if (!selectedInsurance || selectedInsurance.name === 'No Insurance') return providers;
  return providers.filter((p) => p.accepts?.includes(selectedInsurance.name));
}

/** Insurance tag styling for "Accepts" pills (initial, bg, text). */
export const INSURANCE_TAG_STYLES = {
  'Blue Cross': { initial: 'B', bg: 'bg-blue-500', text: 'text-white' },
  Aetna: { initial: 'A', bg: 'bg-purple-500', text: 'text-white' },
  UnitedHealthcare: { initial: 'U', bg: 'bg-orange-500', text: 'text-white' },
  Cigna: { initial: 'C', bg: 'bg-green-500', text: 'text-white' },
  Medicare: { initial: 'M', bg: 'bg-cyan-500', text: 'text-white' },
  Medicaid: { initial: 'M', bg: 'bg-emerald-500', text: 'text-white' },
  Humana: { initial: 'H', bg: 'bg-red-500', text: 'text-white' },
  'Kaiser Permanente': { initial: 'K', bg: 'bg-blue-700', text: 'text-white' },
};
