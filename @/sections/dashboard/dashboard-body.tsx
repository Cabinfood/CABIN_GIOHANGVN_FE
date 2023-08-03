import { ReactNode, useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductSidebar from "./products/products-sidebar"
import ProductContent from "./products/products-content"
import { useSelector } from "react-redux"
import { selectTabState } from "redux/reducers/tab-slice"
import SettingContent from "./settings/setting-content"
import { TABS } from "@/mocks/common"
import SettingSidebar from "./settings/setting-sidebar"
import DesignContent from "./design/design-content"
import { AlignTopIcon, TextAlignBottomIcon, TextAlignTopIcon } from "@radix-ui/react-icons"

type TabRenderers = Record<string, () => JSX.Element>;

type Props = {
  children?: ReactNode
}
function DashboardBody({ children }: Props) {
  const tabState = useSelector(selectTabState);

  const renderProductsTab = () => (
    <>
      <ProductSidebar />
      <ProductContent />
    </>
  );

  const renderDesignTab = () => (
    <>
      <ProductSidebar />
      <DesignContent />
    </>
  );

  const renderSettingsTab = () => (
    <>
      <SettingSidebar />
      <SettingContent />
    </>
  );

  const tabRenderers: TabRenderers = {
    'products': renderProductsTab,
    'design': renderDesignTab,
    'settings': renderSettingsTab,
  };
  const currentTabRenderer = tabRenderers[tabState];

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto min-h-screen px-4 sm:px-0 lg:px-8 select-none">
        {
          tabState === TABS[0].value && <div className="flex h-14 w-full items-end justify-end">
            <Select>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="Sort by name"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <span className="flex items-center">
                    <TextAlignTopIcon className="mr-2" />Date Added
                  </span>
                </SelectItem>
                <SelectItem value="dark">
                  <span className="flex items-center">
                    <TextAlignBottomIcon className="mr-2" />Numer Of Clicks
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        <div className="flex flex-nowrap gap-6 py-4">
          {
            currentTabRenderer && currentTabRenderer()
          }
        </div>
      </div>
    </div>
  )
}

export default DashboardBody
