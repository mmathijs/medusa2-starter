import { Menu as HeadlessMenu, type MenuProps as HeadlessMenuProps } from '@headlessui/react';
import clsx from 'clsx';
import type { ElementType, FC } from 'react';

export type MenuProps = HeadlessMenuProps<ElementType>;

export const Menu: FC<MenuProps> = ({ className, ...props }) => (
  <HeadlessMenu as="div" className={clsx('relative inline-block text-left', className)} {...props} />
);
