import { subDays, format, startOfMonth } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const CENTERS = ['Mumbai', 'Delhi', 'Bangalore', 'Pune'];
const USER_TYPES = ['Parent', 'Staff', 'Child'];
const ACTIVITY_TYPES = ['Activities', 'Meals', 'Health Updates', 'Messages'];

// Helper to get random number
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate simulated large dataset
export const generateMockDataset = (count = 5000) => {
  const data = [];
  const today = new Date();

  for (let i = 0; i < count; i++) {
    // Spread data over the last 120 days
    const date = subDays(today, getRandomInt(0, 120));
    
    data.push({
      id: uuidv4(),
      date,
      dateString: format(date, 'yyyy-MM-dd'),
      month: format(startOfMonth(date), 'MMM'),
      center: CENTERS[getRandomInt(0, CENTERS.length - 1)],
      userType: USER_TYPES[getRandomInt(0, USER_TYPES.length - 1)],
      activityType: ACTIVITY_TYPES[getRandomInt(0, ACTIVITY_TYPES.length - 1)],
      revenueBase: getRandomInt(500, 5000), // Only some will have actual revenue, others 0 depending on logic, but let's assign a base
      isRevenueEvent: Math.random() > 0.8 // 20% of events generate revenue
    });
  }

  // Sort by date descending
  return data.sort((a, b) => b.date - a.date);
};

export const MOCK_DATASET = generateMockDataset(3000);

// Initial Aggregated Data for quick start (matches screenshots roughly if no filters)
export const initialCentersData = [
  { name: 'Mumbai', value: 8 },
  { name: 'Delhi', value: 6 },
  { name: 'Bangalore', value: 5 },
  { name: 'Pune', value: 5 },
];

export const initialRevenueData = [
  { month: 'Jan', revenue: 98000 },
  { month: 'Feb', revenue: 105000 },
  { month: 'Mar', revenue: 118000 },
  { month: 'Apr', revenue: 125000 },
];

export const initialUsersData = [
  { month: 'Jan', parents: 680, staff: 100, children: 720 },
  { month: 'Feb', parents: 720, staff: 105, children: 760 },
  { month: 'Mar', parents: 780, staff: 110, children: 810 },
  { month: 'Apr', parents: 856, staff: 124, children: 856 },
];
