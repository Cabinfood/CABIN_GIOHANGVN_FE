import DashboardHeader from "@/sections/dashboard/dashboard-header"
import DashboardLayout from "@/layouts/dashboard-layout"
import DashboardNav from "@/sections/dashboard/dashboard-nav"
import DashboardBody from "@/sections/dashboard/dashboard-body"

function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader>
        <DashboardNav />
      </DashboardHeader>
      <DashboardBody/>
    </DashboardLayout>
  )
}

export default DashboardPage
