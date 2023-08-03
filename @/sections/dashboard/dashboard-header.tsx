import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDownIcon, ChevronUpIcon, SlashIcon } from "@radix-ui/react-icons"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "../../components/ui/button"
import Image from "next/image"
import { ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "redux/reducers/auth-slice"
import { setAuthState } from "redux/actions/auth-action"

type Props = {
  children?: ReactNode
}

function DashboardHeader({ children }: Props) {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div className="border-b">
      <nav className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 flex h-16 select-none items-center justify-between">
        <div className="flex">
          <ol className="flex items-center text-black">
            <li className="flex-0 flex-auto hidden lg:block">
              <Avatar>
                <AvatarImage src="https://source.unsplash.com/random/200x200?sig=1" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
            <li className="flex-0 mx-2 flex flex-auto hidden lg:block">
              <SlashIcon width={24} height={24} style={{ color: "lightgray" }} />
            </li>
            <li className="flex-0 flex min-w-0 flex-auto text-sm">
              <div className="flex-initial flex-row items-center justify-start gap-0 p-0">
                <div className="flex w-full items-center">
                  <a href="#" className="min-w-0 max-w-full no-underline">
                    <div className="flex flex-row items-center justify-start gap-2 p-0">
                      <span className="text-xl" aria-label="cabin@doowood" role="img">
                        <Image
                          src="https://source.unsplash.com/random/200x200?sig=2"
                          alt="dcn"
                          width={22}
                          height={22}
                          className="max-h-xs max-w-xs rounded-full"
                        />
                      </span>
                      <p className="truncate text-sm font-medium leading-6 tracking-normal text-black">{authState ? 'cabin@doowood' : 'cabin@nologin'}</p>
                      <div>
                        <span className="truncate rounded-full bg-black px-3 py-1 capitalize text-white">free</span>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button className="flex h-8 w-6 flex-col" variant="ghost" size="icon" 
                          onClick={() =>
                            // fake login to test setup react persist
                            authState
                              ? dispatch(setAuthState(false))
                              : dispatch(setAuthState(true))
                          }>
                            <ChevronDownIcon />
                            <ChevronUpIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>Place content for the popover here.</PopoverContent>
                      </Popover>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div className="justify-center">
          <Avatar>
            <AvatarImage src="https://source.unsplash.com/random/200x200?sig=3" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default DashboardHeader
