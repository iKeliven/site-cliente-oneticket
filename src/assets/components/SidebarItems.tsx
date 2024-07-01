import { ReactNode } from 'react';
import { Text } from './Text';

interface Props {
  label: string;
  children: ReactNode;
}

export default function SidebarItems({ label, children = true }: Props) {
  return(
    <div className="self-stretch flex flex-row items-center justify-start py-[15px] px-[15px] gap-[15px] z-[2] mt-[-1px]">
      {children}
      <Text size="medium" className="relative tracking-[0.02em] font-medium inline-block min-w-[82px] hover:font-bold">
        {label}
      </Text>
    </div>
  );
}
