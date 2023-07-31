import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TABS } from "@/mocks/common"
function DashboardNav() {
  return (
    <Tabs defaultValue="products" className="container flex h-52 flex-col justify-evenly px-4 sm:px-6 lg:px-8">
      <TabsList className="w-fit grid-cols-3">
        {TABS.map((item) => (
          <TabsTrigger key={item.id} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((item) => (
        <TabsContent value={item.value}>
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
