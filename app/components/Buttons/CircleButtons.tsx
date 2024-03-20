import React, { ElementType, ReactNode } from 'react'

type CircleButtonsProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    Icon: ElementType;
}

export const CircleButtons = ({label, Icon, onClick, children, ...props}: CircleButtonsProps) => {
  return (
    <button className="cursor-pointer select-none flex flex-row items-center space-x-[18px] text-md font-bold text-neutral02 hover:text-white fill-neutral02 hover:fill-white">
        <Icon size={32}/>
        <h1>{label}</h1>
    </button>
  ) 
}