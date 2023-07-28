import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TABS } from "@/mocks/common"
function DashboardNav() {
  return (
      <Tabs defaultValue="products" className="w-[400px]">
        <TabsList className="grid-cols-3">
          {TABS.map((item) => (
            <TabsTrigger key={item.id} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="products">
          <div className="flex gap-2">
            <div className="flex w-full flex-col gap-2">
              <Label className="text-4xl">Products</Label>
              <p className="text-bas">
                List of products from 1 or more of your stores, even products from all other brands
              </p>
            </div>
            <div>
              <Button className="whitespace-nowrap">Magic Sync</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
  )
}

export default DashboardNav
