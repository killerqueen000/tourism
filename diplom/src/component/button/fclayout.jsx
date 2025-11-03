import ScrollUpButton from "./ScrollUpButton";
import ScrollUpButtonCs from "./ScrollUpButtonCs";
import "./fclayout.css"

const FcLayout = () => {
    return(
        <div className="fc-layout">
        <div className="scroll-btn scroll-btn-1">
          <ScrollUpButton />
        </div>
        <div className="scroll-btn scroll-btn-2">
          <ScrollUpButtonCs />
        </div>
      </div>
    )
}

export default FcLayout