import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CodeIcon, CopyIcon, DotsVerticalIcon } from "@radix-ui/react-icons"
import Image from "next/image"
interface Item {
  id: string,
  title: string,
  description: string,
  viewCount: number | 0,
  url: string,
  sold: number | 0
}

interface ProductItemProps {
  item: Item
}
function ProductItem(props: ProductItemProps) {
  const { item } = props;
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div className="flex flex-1 gap-4">
        <div className="flex">
          <Image
            src={item.url}
            alt="dcn"
            width={48}
            height={48}
            className="w-12 h-12 min-w-48 min-h-48 max-w-fit rounded-sm object-cover"
          />
          <Image
            src="https://source.unsplash.com/random/200x200?sig=1"
            alt="dcn"
            width={48}
            height={48}
            className="w-5 h-5 rounded-full object-cover absolute translate-x-9 translate-y-8"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <Label>{item.title}</Label>
            <div className="v-5 h-6 rounded-full bg-slate-100 p-1 text-slate-500">
              <CopyIcon />
            </div>
            <div className="v-5 h-6 rounded-full bg-slate-100 p-1 text-slate-500">
              <CodeIcon />
            </div>
            <div className="v-5 h-6 rounded-lg bg-slate-100 px-2 text-slate-500 text-ellipsis whitespace-nowrap">
              <p>{item.viewCount} views</p>
            </div>
          </div>
          <div>
            <p>https://giohang.vn/p/8TU05KB113</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 whitespace-nowrap">
        <p>{item.sold} sold</p>
        <Button variant="ghost" className="v-6 h-10">
          <DotsVerticalIcon className="items-center" />
        </Button>
      </div>
    </div>
  )
}

export default ProductItem
