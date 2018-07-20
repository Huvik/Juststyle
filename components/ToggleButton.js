import { colors } from '../constants/colors'

export default ({ checked, onClick }) =>
  <div className="toggle-button" onClick={onClick}>
    <input className="toggle-input" type="checkbox" checked={checked} />
    <div className="toggle-slider" />
    <style jsx>{`
      .toggle-button {
        width: 5.4rem;
        height: 2.8rem;
        position: relative;
      }
      .toggle-slider {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: ${colors.blue};
        transition: transform 70ms linear;
        border-radius: 100rem;
      }
      .toggle-slider:before {
        position: absolute;
        content: '';
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${colors.pink};
        border-radius: 50%;
        top: 0.2rem;
        left: 0.3rem;
        transition: transform 70ms linear;
      }
      .toggle-input {
        display: none;
      }
      .toggle-input:checked + div {
        background-color: ${colors.pink};
      }
      .toggle-input:checked + div:before {
        transform: translateX(2.4rem);
        background-color: ${colors.white};
      }
    `}</style>
  </div>
