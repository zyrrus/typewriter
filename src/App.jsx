import { useState } from "react";
import Textbox from "./components/Textbox";
import { TbBulbOff, TbBulb } from "react-icons/tb";

function App() {
    const [showHint, setShowHint] = useState(true);

    return (
        <div>
            <div className='settings'>
                <div className='button' onClick={() => setShowHint(!showHint)}>
                    {showHint ? (
                        <TbBulb title='hide hint' />
                    ) : (
                        <TbBulbOff title='show hint' />
                    )}
                </div>
            </div>
            <Textbox showHint={showHint} />
        </div>
    );
}

export default App;
