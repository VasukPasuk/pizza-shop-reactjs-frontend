import React, {FC} from 'react';
import './style.scss';

type TVariant = 'main' | 'success' | 'danger' | 'warning';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TVariant;
}

const Button: FC<IButtonProps> = (props) => {
  const {variant = 'main', children, ...rest} = props;
  return (
    <button
      {...rest}
      data-variant={variant}
    >
      {children}
    </button>
  );
};

export default Button;
