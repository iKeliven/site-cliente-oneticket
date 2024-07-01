import classNames from 'classnames';
import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  size: 'small' | 'medium' | 'large' | 'big';
}

export function Text({ children, size = 'small', className, ...rest }: Props) {
  return (
    <label
      className={classNames(
        size === 'small' && 'text-[10px]',
        size === 'medium' && 'text-[16px]',
        size === 'big' && 'text-[18px]',
        size === 'large' && 'text-[21px]',
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
}
