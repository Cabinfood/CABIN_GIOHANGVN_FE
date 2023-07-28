import { ReactNode } from "react"

type Props = {
  children: ReactNode
}
function DashboardLayout({ children }: Props) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
