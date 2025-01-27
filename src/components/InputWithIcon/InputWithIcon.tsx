import { SearchBarComponent, Wrap } from "./styles";

interface InputWithIconProps {
  icon: React.ElementType;  // `React.ElementType` is the correct type for React component props
  placeholder: string;
  value?: any;
  onChange?: any;
  onClick?: any;
}

function InputWithIcon({ icon: IconComponent, placeholder, value: useState, onChange, onClick }: InputWithIconProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  function handleClick() {
    onClick();
  }

  return (
    <Wrap>
      <IconComponent /> {/* Render the icon component */}
      <SearchBarComponent placeholder={placeholder} value={useState} onChange={handleChange} onClick={handleClick} />
    </Wrap>
  );
}

export default InputWithIcon;
