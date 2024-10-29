// app-sidebar.jsx

import Link from "next/link";
import { Album, Music, User, User2, ChevronUp } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const items = [
  {
    title: "Explore",
    url: "/explore",
    icon: Music,
  },
  {
    title: "Albums",
    url: "/albums",
    icon: Album,
  },
  {
    title: "Artists",
    url: "/artists",
    icon: User,
  },
  {
    title: "Playlists",
    url: "/playlists",
    icon: Music,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Image 
          src="/smile.png"
          alt="Logo"
          width={90}
          height={90}
          className="ml-auto mr-2"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} passHref legacyBehavior>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/felipegon9im.png" alt="@felipegondim" />
                    <AvatarFallback>FG</AvatarFallback>
                  </Avatar>
                  <span>felipegondimdev</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
