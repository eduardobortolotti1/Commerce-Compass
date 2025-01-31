import { SearchBarComponent, Wrap } from "./styles";

interface InputWithIconProps {
  icon: React.ElementType;  // `React.ElementType` is the correct type for React component props
  placeholder: string;
  type?: string;
  value?: string;
  style?: React.CSSProperties; 
  onChange?: (value: string) => void;
  onClick?: () => void;
}

function InputWithIcon({ icon: IconComponent, placeholder, type, value: useState, style, onChange, onClick }: InputWithIconProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.value);
  }

  function handleClick() {
    onClick?.();
  }

  return (
    <Wrap>
      <IconComponent /> {/* Render the icon component */}
      <SearchBarComponent placeholder={placeholder} type={type} value={useState} onChange={handleChange} onClick={handleClick} style={style}/>
    </Wrap>
  );
}

export default InputWithIcon;
