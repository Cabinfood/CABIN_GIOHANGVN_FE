import DashboardHeader from "@/sections/dashboard/dashboard-header"
import DashboardLayout from "@/layouts/dashboard-layout"
import DashboardNav from "@/sections/dashboard/dashboard-nav"
import DashboardBody from "@/sections/dashboard/dashboard-body"

function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardNav />
      {/* <DashboardBody>
         <div className="py-8">
           <p className="text-justify">
             Ut congue convallis massa eget rhoncus. Vivamus interdum semper lacus, at viverra ante porttitor in. Nullam
             mattis egestas justo, tempus efficitur massa luctus a. Praesent mollis vehicula vehicula. Aliquam in justo
             faucibus, efficitur neque nec, convallis tortor. Sed dapibus turpis ac massa commodo egestas. Praesent id
             eros urna. Praesent sed auctor dolor. Morbi condimentum euismod augue nec varius. Mauris mollis tincidunt
             massa. Mauris et orci quis nisl porta finibus. Etiam accumsan vulputate lobortis. Mauris non nunc ultrices
             metus vulputate iaculis. Vivamus ultrices arcu et nulla ultricies, sit amet luctus dui mattis. Nunc blandit
             tincidunt congue
           </p>
         </div>
       </DashboardBody>  */}
    </DashboardLayout>
  )
}

export default DashboardPage
