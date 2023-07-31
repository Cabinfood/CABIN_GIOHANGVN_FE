import { ReactNode } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductSidebar from "./products/products-sidebar"
import ListProduct from "./products/products-list"

type Props = {
  children?: ReactNode
}
function DashboardBody({ children }: Props) {
  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 w-full items-end justify-end">
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort by name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-nowrap gap-6 py-4">
          <ProductSidebar />
          <ListProduct />
        </div>
      </div>
    </div>
  )
}

export default DashboardBody
