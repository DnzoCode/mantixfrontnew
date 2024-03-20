"use client";
import { useRouter } from "next/navigation";
import { Avatar } from "primereact/avatar";
import { ContextMenu } from "primereact/contextmenu";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Tag } from "primereact/tag";
import React, { useRef } from "react";

export default function NavBar() {
  const cm = useRef<ContextMenu>(null);
  const contextMenuItems: MenuItem[] = [
    { label: "Perfil", icon: "pi pi-user" },
    { label: "Cerrar Sesion", icon: "pi pi-sign-in" },
  ];
  const router = useRouter();
  const navBarMenuitems: MenuItem[] = [
    {
      label: "Calendar",
      icon: "pi pi-calendar",
      command: () => {
        router.push("/Dashboard/calendar");
      },
    },
    {
      label: "Calendar",
      icon: "pi pi-user",
      command: () => {
        router.push("/Dashboard/users");
      },
    },
  ];
  return (
    <>
      <div className="w-full h-14 flex justify-center items-center sticky top-0 z-40">
        <div className="flex justify-between px-4 items-center w-full h-full bg-dark_bg p-2 rounded-md transition-all ease-out shadow-md shadow-dark_medium_bg">
          <div
            className="flex justify-evenly items-center cursor-pointer"
            onClick={() => router.push("/Dashboard")}
          >
            <h1 className="dark:text-white font-extrabold mr-1">Mantix</h1>
            <Tag severity="warning" value="Pro" />
          </div>
          <div className="flex justify-evenly items-center">
            <Menu model={navBarMenuitems} />
          </div>
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
            shape="circle"
            onContextMenu={(e) => cm.current?.show(e)}
          />
          <ContextMenu model={contextMenuItems} ref={cm} />
        </div>
      </div>
    </>
  );
}