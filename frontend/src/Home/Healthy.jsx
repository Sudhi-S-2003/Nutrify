import tick from "../assets/tick.png";
import rect1 from '../assets/Rect1.png'
import rect2 from '../assets/Rect2.png'
import rect3 from '../assets/Rect3.png'
import rect4 from "../assets/rect4.png"
function Healthy() {
  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Why Healthy</h1>
      </div>

      <div className="sm:flex  justify-evenly items-center">
        <div>
          <ul className="space-y-6">
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Improved physical health
            </li>
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Better mental health
            </li>
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Increased longevity
            </li>
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Weight management
            </li>
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Improved self-confidence
            </li>
            <li className="flex items-center">
              <img src={tick} alt="Tick" className="w-4 h-4 mr-2" />
              Reduced stress
            </li>
          </ul>
        </div>
        <div>
          <div className="sm:flex items-end">
          <img src={rect1} alt="img1" className="sm:h-[240px]"/>
          <img src={rect2} alt="img2"className="sm:h-[380px]" />
          </div>
         
          <img src={rect3} alt="img3" className="sm:h-[180px]"/>
        </div>
      </div>
      <div className="w-[100vw] h-[2px] my-3 border border-dashed "></div>
      <div className="sm:flex justify-between items-center text-center mt-4">
        <div className="sm:w-[50%] min-h-[50vh] sm:min-h-0">
          <h1 className="text-5xl text-green-500 mb-5">Well done</h1>
          <h3 className="text-xl">Get started to a healthy lifestyle...</h3>
        </div>
        <img src={rect4} alt="" />
      </div>
    </div>
  );
}

export default Healthy;
