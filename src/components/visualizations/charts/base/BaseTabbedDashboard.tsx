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
      <TabsList className={`grid w-full grid-cols-${tabs.length}`}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
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