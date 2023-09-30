import './Button.scss'
import { ButtonTypes } from '../../resources/interfaces';

const Button = ({ buttonText, color, children, clickFunc }: ButtonTypes) => (
    <button type="button" className={`button ${color && `button-${color}`}`}>{buttonText}</button>
)

export default Button;