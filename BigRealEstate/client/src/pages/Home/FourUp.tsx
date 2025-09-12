import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Configuration - Edit this to add new weeks and items
const FOURUPS_DATA = [
  {
    id: 4,
    dateRange: "10/31/25 - 11/07/25", // Fixed date range - was backwards
    progress: [
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Andrew" },
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Robert" }
    ],
    plans: [
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Andrew" },
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Robert" }
    ],
    needs: [
      { text: "The first risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null },
      { text: "The second risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null }
    ],
    risks: [
      { text: "The first risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null },
      { text: "The second risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null }
    ]
  },
  {
    id: 3,
    dateRange: "09/23/25 - 09/30/25",
    progress: [
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Andrew" },
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Robert" }
    ],
    plans: [
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Andrew" },
      { text: "The progress of this week is that we have completed a figma file and talked with our sponsor", assignee: "Robert" }
    ],
    needs: [
      { text: "The first risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null },
      { text: "The second risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null }
    ],
    risks: [
      { text: "The first risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null },
      { text: "The second risk that we face is that we have no risks and with no risk there is no reward just like the goat crossing the river", assignee: null }
    ]
  },
  {
    id: 2,
    dateRange: "09/16/25 - 09/22/25",
    progress: [
      { text: "Initial project setup and team formation", assignee: "Andrew" },
      { text: "Research phase completed for user requirements", assignee: "Robert" }
    ],
    plans: [
      { text: "Begin prototype development", assignee: "Andrew" },
      { text: "Schedule stakeholder interviews", assignee: "Robert" }
    ],
    needs: [
      { text: "Access to development environment", assignee: null },
      { text: "User feedback on current designs", assignee: null }
    ],
    risks: [
      { text: "Potential delay in stakeholder availability", assignee: null },
      { text: "Technical dependencies may cause blockers", assignee: null }
    ]
  },
  {
    id: 1,
    dateRange: "09/09/25 - 09/15/25",
    progress: [
      { text: "Project kickoff meeting completed", assignee: "Andrew" },
      { text: "Initial requirements gathering", assignee: "Robert" }
    ],
    plans: [
      { text: "Define project scope and timeline", assignee: "Andrew" },
      { text: "Set up project management tools", assignee: "Robert" }
    ],
    needs: [
      { text: "Budget approval for tools and resources", assignee: null },
      { text: "Team member role clarifications", assignee: null }
    ],
    risks: [
      { text: "Unclear requirements from stakeholders", assignee: null },
      { text: "Resource allocation conflicts", assignee: null }
    ]
  }
];

// Component for individual items
const FourUpItem = ({ item, index, type }: { item: any, index: number, type: string }) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="text-white font-medium min-w-16">
        {item.assignee ? `${item.assignee}:` : `${type === 'needs' ? 'Need' : type === 'risks' ? 'Risk' : type === 'progress' ? 'Progress' : 'Plan'} ${index + 1}:`}
      </div>
      <div className="flex-1 text-white text-sm leading-relaxed">
        {item.text}
      </div>
    </div>
  );
};

// Component for each section (Progress, Plans, Needs, Risks)
const FourUpSection = ({ title, items, type }: { title: string, items: any[], type: string }) => {
  return (
    <div className="bg-slate-700 rounded-lg p-4 flex-1">
      <h3 className="text-white font-bold text-2xl mb-4">{title}</h3>
      {items.map((item, index) => (
        <FourUpItem 
          key={index} 
          item={item} 
          index={index} 
          type={type} 
        />
      ))}
    </div>
  );
};

// Component for individual week
const WeekCard = ({ week }: { week: any }) => {
  return (
    <div className="mb-8">
      {/* Title above the 2x2 grid */}
      <div className="text-center mb-6">
        <h2 className="text-white text-3xl font-bold mb-2">4 UP</h2>
        <p className="text-gray-300">{week.dateRange}</p>
      </div>
      
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        <FourUpSection 
          title="Progress" 
          items={week.progress} 
          type="progress"
        />
        <FourUpSection 
          title="Plans" 
          items={week.plans} 
          type="plans"
        />
        <FourUpSection 
          title="Needs" 
          items={week.needs} 
          type="needs"
        />
        <FourUpSection 
          title="Risks" 
          items={week.risks} 
          type="risks"
        />
      </div>
    </div>
  );
};

// Main component
const FourUp = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only first 2 weeks by default, all if showAll is true
  const visibleWeeks = showAll ? FOURUPS_DATA : FOURUPS_DATA.slice(0, 2);
  const hasMore = FOURUPS_DATA.length > 2;

  return (
    <div className="min-h-screen bg-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {visibleWeeks.map((week) => (
          <WeekCard key={week.id} week={week} />
        ))}
        
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { FourUp };