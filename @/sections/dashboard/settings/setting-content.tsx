import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function SettingContent() {
  return (
    <div className="flex flex-col flex-1 shadow-sm bg-white rounded-md border h-fit p-6 gap-4">
      <div className="flex flex-auto gap-4 max-lg:flex-col">
        <div className="w-full">
          <Label className="text-lg font-semibold">Edit profile</Label>
          <p className="text-slate-400">Make changes to your profile here. Click save when you're done.</p>
        </div>
        <div className="flex flex-col justify-end w-full items-end gap-4">
          <div className="flex gap-4 items-center w-full max-lg:w-full">
            <Label className="font-semibold text-base w-32 text-right max-lg:w-32 max-lg:text-left">Email</Label>
            <Input placeholder="Email" type="email" />
          </div>
          <div className="flex gap-4 items-center w-full max-lg:w-full">
            <Label className="font-semibold text-base w-32 text-right max-lg:w-32 max-lg:text-left">Username</Label>
            <Input placeholder="@cabin" type="text" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Save changes</Button>
      </div>
    </div>
  );
}

export default SettingContent;