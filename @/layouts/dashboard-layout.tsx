import { ReactNode } from "react"

type Props = {
  children: ReactNode
}
function DashboardLayout({ children }: Props) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="mx-auto max-w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
