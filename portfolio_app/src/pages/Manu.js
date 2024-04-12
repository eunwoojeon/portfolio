import './Manu.css';
import { TfiMenu } from "react-icons/tfi";

function Manu() {
  return (
    <div id="manu">
      <div id='hamberger'>
        <TfiMenu />
        <div>Intro</div>
        <div>Carear</div>
        <div>Skill</div>
        <div>Project</div>
      </div>
    </div>
  );
}

export default Manu;