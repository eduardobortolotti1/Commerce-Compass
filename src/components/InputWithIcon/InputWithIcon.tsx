import { SearchBarComponent, Wrap } from "./styles";

interface InputWithIconProps {
  icon: React.ElementType;  // `React.ElementType` is the correct type for React component props
  placeholder: string;
}

function InputWithIcon({ icon: IconComponent, placeholder }: InputWithIconProps) {
  return (
    <Wrap>
      <IconComponent /> {/* Render the icon component */}
      <SearchBarComponent placeholder={placeholder} />
    </Wrap>
  );
}

export default InputWithIcon;
