import { SwitchButton, SwitchInput, SwitchLabel } from "./styles";

type Props = {
  id: string;
  toggled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ id, toggled, onChange }: Props) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
};

export default Switch;