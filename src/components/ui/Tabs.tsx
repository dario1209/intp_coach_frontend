// Use @headlessui/react TabGroup for production
import { Tab } from '@headlessui/react';

export default function TabsExample() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-slate-900/20 p-1">
        {['Recent', 'Active', 'Completed'].map((category) => (
          <Tab
            key={category}
            className="w-full py-2.5 text-sm font-medium leading-5 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 group"
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}
