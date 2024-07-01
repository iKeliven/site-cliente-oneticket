import classNames from 'classnames';
import { LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  size: 'small' | 'medium' | 'big' | 'large';
}

export function Heading({
  children,
  size = 'small',
  className,
  ...rest
}: Props) {
  return (
    <label
      className={classNames(
        'font-bold',
        size === 'small' && 'text-[16px]',
        size === 'medium' && 'text-[21px]',
        size === 'big' && 'text-[25px]',
        size === 'large' && 'text-[30px]',
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
}
