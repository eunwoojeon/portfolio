import './Carear.css';

function Carear() {
    return (
      <div id="Carear">
        <div>
          <div>경력</div>
          <hr></hr>
          <div className='carear-list'>
            <div>스트라토아이티(Protec으로 합병) <span>2022.07~2022.12</span></div>
            <div>Protec <span>2023.01~2023.10</span></div>
          </div>
        </div>
        <div>
          <div>교육</div>
          <hr></hr>
          <div className='education-list'>
            <div>멀티 디바이스 융합 자바(Java) 디지털 컨버전스 과정 <span>2021.11~2022.4</span></div>
            <div>교육기관 : 울산KH정보교육원</div>
            <div>비고 : 교육 우수자 표창 수여</div>
          </div>
        </div>
        <div>
          <div>스킬</div>
          <hr></hr>
          <div className='skill-list'>
            지라 컨플루언스 슬랙 팀즈
          </div>
        </div>
      </div>
    );
  }
  
  export default Carear;
  