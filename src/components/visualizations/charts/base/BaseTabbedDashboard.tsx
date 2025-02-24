import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface BaseTabbedDashboardProps {
  tabs: Tab[];
  defaultTab?: string;
  height?: string;
  className?: string;
}

export function BaseTabbedDashboard({
  tabs,
  defaultTab,
  height = "h-[300px]",
  className = "",
}: BaseTabbedDashboardProps) {
  const [currentTab, setCurrentTab] = React.useState(defaultTab || tabs[0].id);

  return (
    <Tabs value={currentTab} onValueChange={setCurrentTab} className={`w-full ${className}`}>
      <TabsList className="inline-flex w-full items-center justify-center rounded-lg bg-surface-muted/30 p-1 mb-6">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.id} 
            value={tab.id}
            className="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-6">
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className={height}>
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
