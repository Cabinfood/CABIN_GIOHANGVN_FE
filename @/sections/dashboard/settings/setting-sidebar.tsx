import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Cross2Icon, GridIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
function SettingSidebar() {
  return (
    <Card className="w-80 h-fit hidden lg:block">
      <CardContent className=":pt-0 px-2 py-2">
        <div className="flex items-center justify-between p-3 rounded-md bg-slate-100">
          <Label htmlFor="airplane-mode">General</Label>
        </div>
      </CardContent>
      <CardContent className=":pt-0 px-2 py-2">
        <div className="flex items-center justify-between p-3 rounded-md hover:bg-slate-100">
          <Label htmlFor="airplane-mode">Billing</Label>
        </div>
      </CardContent>
      <CardContent className=":pt-0 px-2 py-2">
        <div className="flex items-center justify-between p-3 rounded-md hover:bg-slate-100">
          <Label htmlFor="airplane-mode">Members</Label>
        </div>
      </CardContent>
    </Card>
  )
}

export default SettingSidebar
