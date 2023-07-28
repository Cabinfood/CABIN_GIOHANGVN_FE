import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}
function DashboardBody({ children }: Props) {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export default DashboardBody
