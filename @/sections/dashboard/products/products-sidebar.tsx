import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Cross2Icon, GridIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
function ProductSidebar() {
  return (
    <Card className="w-80">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center justify-between">
          Filter products <Cross2Icon className="h-5 w-5 rounded-sm border border-slate-200 text-slate-500" />{" "}
        </CardTitle>
      </CardHeader>
      <CardContent className=":pt-0 border-b">
        <div className="flex h-8 items-center">
          <Input
            type="text"
            placeholder="Search product..."
            className="py-2 pl-10 pr-4 focus:border-transparent focus:bg-white focus:outline-none"
          />
          <div className="pointer-events-none absolute flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-black" aria-hidden="true" />
          </div>
        </div>
      </CardContent>
      <CardContent className=":pt-0 border-b">
        <div className="pb-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2 px-3">
                  <GridIcon /> Categories
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex h-12 items-center">
            <Input
              type="text"
              placeholder="Filter categories"
              className="py-2 pl-10 pr-4 focus:border-transparent focus:bg-white focus:outline-none"
            />
            <div className="pointer-events-none absolute flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </div>
          </div>

          <RadioGroup defaultValue="option-one" className="space-y-1">
            <div className="flex h-10 items-center justify-between rounded-md bg-slate-100 px-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Danh mục 01</Label>
              </div>
              <Label htmlFor="option-one">3</Label>
            </div>
            <div className="flex h-10 items-center justify-between rounded-md bg-slate-100 px-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Danh mục 02</Label>
              </div>
              <Label htmlFor="option-two">2</Label>
            </div>
            <div className="flex h-10 items-center justify-between rounded-md bg-slate-100 px-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Danh mục 03</Label>
              </div>
              <Label htmlFor="option-three">2</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardContent className=":pt-0 border-b">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2 px-3">
                <GridIcon /> Type of item
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-3">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="items-center space-y-2 px-3">
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Products
              </label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Giftcards
              </label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscriptions
              </label>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Licenses
              </label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardContent className=":pt-0 border-b">
        <div className="flex items-center justify-between space-x-2 px-3">
          <Label htmlFor="airplane-mode">Include out-stock</Label>
          <Switch id="airplane-mode" />
        </div>
      </CardContent>
      <CardContent className=":pt-0 border-b">
        <div className="flex items-center justify-between space-x-2 px-3">
          <Label htmlFor="airplane-mode">Show my items only</Label>
          <Switch id="airplane-mode" />
        </div>
      </CardContent>
      <CardContent className=":pt-0 border-b">
        <div className="flex items-center justify-between space-x-2 px-3">
          <Label htmlFor="airplane-mode">Show available only</Label>
          <Switch id="airplane-mode" />
        </div>
      </CardContent>
      <CardContent className=":pt-0">
        <div className="flex items-center justify-between space-x-2 px-3">
          <Label htmlFor="airplane-mode">Include archived items</Label>
          <Switch id="airplane-mode" />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default ProductSidebar
