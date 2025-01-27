import { SearchBarComponent, Wrap } from "./styles";

interface InputWithIconProps {
  icon: React.ElementType;  // `React.ElementType` is the correct type for React component props
  placeholder: string;
  value?: any;
  onChange?: any;
}

function InputWithIcon({ icon: IconComponent, placeholder, value: useState, onChange }: InputWithIconProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <Wrap>
      <IconComponent /> {/* Render the icon component */}
      <SearchBarComponent placeholder={placeholder} value={useState} onChange={handleChange} />
    </Wrap>
  );
}

export default InputWithIcon;
