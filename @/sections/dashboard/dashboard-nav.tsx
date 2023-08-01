import React, { useState, useEffect} from'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TABS } from "@/mocks/common"
import { useDispatch, useSelector } from "react-redux"
import { setTabState } from "redux/actions/tab-action"
import { selectTabState } from "redux/reducers/tab-slice"

function DashboardNav() {
  const dispatch = useDispatch();
  const tabState = useSelector(selectTabState);
  const [currentTab, setCurrentTab] = useState<string>(tabState || 'products');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  
  const handleSetTab = (value: String) => {
    dispatch(setTabState(value))
  }
  useEffect(() => {
    if (!isInitialized && tabState) {
      setCurrentTab(tabState);
      setIsInitialized(true);
    }
  }, [isInitialized, tabState]);

  return (
    <Tabs value={currentTab} onValueChange={setCurrentTab} className="container flex h-52 flex-col justify-evenly px-4 sm:px-6 lg:px-8">
      <TabsList className="w-fit grid-cols-3">
        {TABS.map((item) => (
          <TabsTrigger key={item.id} value={item.value} onClick={() => handleSetTab(item.value)}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((item) => (
        <TabsContent key={item.id} value={item.value}>
          <div className="flex h-20 space-x-2">
            <div className="flex w-full flex-col space-y-2">
              <Label className="text-3xl">{item.label}</Label>
              <p className="text-base">
                {item.description}
              </p>
            </div>
            <div>
              {item.buttonLabel &&  <Button className="whitespace-nowrap">{item.buttonLabel}</Button>}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default DashboardNav
