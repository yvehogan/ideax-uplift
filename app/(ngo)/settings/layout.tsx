import React, { ReactNode } from "react";
import Image from "next/image";  // Add this import
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MyAccount from "./MyAccount";
import Notifications from "./Notifications";
import Payment from "./Payment";
import Security from "./Security";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const tabs = [
    { id: "account", label: "Account", component: MyAccount },
    { id: "security", label: "Security", component: Security },
    { id: "notification", label: "Notifications", component: Notifications },
    { id: "payment", label: "Payment", component: Payment },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-10">Settings</h1>
      <Tabs defaultValue="notification">
        <TabsList className="flex w-[37%] mb-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex-1 py-2 text-center transition-colors data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary hover:text-gray-600"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex justify-between items-start gap-6">
          <div className="w-2/5 bg-white mt-3 rounded-lg drop-shadow-md px-4 py-5 flex gap-3">
            <Image src="/images/profile-pic.png" height={100} width={100} alt="Profile picture" className="mb-4" />
            <div>
            <h2 className="text-[24px] font-bold text-[#111928]">Dear to Heart Foundation</h2>
            <p className="text-[#6B7280] pt-2 pb-4">RC1234678</p>
            <Button
                //   asChild
                  size="lg"
                  className="bg-secondary text-white text-[16px] font-semibold hover:bg-secondary hover:opacity-70"
                >
                  Change Picture
                </Button>

            </div>
          </div>
          <div className="w-2/3">
            <main className="bg-white mt-3 rounded-lg drop-shadow-md p-5">
              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  <tab.component />
                </TabsContent>
              ))}
              {children}
            </main>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Layout;