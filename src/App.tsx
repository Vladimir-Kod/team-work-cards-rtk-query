import {SliderRoot} from "@/components/ui/slider";
import {useState} from "react";



export function App() {
  const [minMaxCurrentValue, setMinMaxCurrentValue] = useState<number[]>([33, 66])

  return <div>
    <SliderRoot changeSliderValue={setMinMaxCurrentValue} minMaxValues={minMaxCurrentValue} step={1} max={100}/>
  </div>
}
