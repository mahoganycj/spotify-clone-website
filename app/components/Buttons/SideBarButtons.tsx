import React, { ElementType, ReactNode } from 'react'

type SideBarButtonsProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    Icon: ElementType;
}

export const SideBarButtons = ({label, Icon, onClick, children, ...props}: SideBarButtonsProps) => {
  return (
    <button className="cursor-pointer select-none flex flex-row items-center space-x-[18px] text-md font-bold text-neutral02 hover:text-white fill-neutral02 hover:fill-white">
        <Icon size={32}/>
        <h1>{label}</h1>
    </button>
  ) 
}
