import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
 import { handleChangeGroup } from "../../features/contact/contact-slice"; 
import { handleChangeSegmentSelected } from "../../features/segmentSelected/segmentSelected-slice";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { Container, Input, Label } from "./styles";
export function Segment(){
    const dispatch = useDispatch()
    const segments = useAppSelector((state: RootState) => state.segments)
    const segmentSelected = useAppSelector((state: RootState) => state.segmentSelected)
    const [valueSelected, changeValueSelected] = useState(segmentSelected.value)

    useEffect(() => {
        changeValueSelected(segmentSelected.value)
        dispatch(handleChangeGroup(segmentSelected.value));
    }, [segmentSelected])
    


    function handleChangeSegment(value: string){
    dispatch(handleChangeGroup(value));
    changeValueSelected(value)
    const segmentSelected = segments.filter((segment) => segment.value === value)
   dispatch(handleChangeSegmentSelected(segmentSelected[0]))
}

    return(
        <Container>
            {segments.map((segment) => {
                const {label, value} = segment
                return(
                    <div key={value}>
                    <Input type="radio"  value={value} id={value} checked={valueSelected === value} onChange={v => handleChangeSegment(v.target.value)} />
                    <Label isSelected={valueSelected === value} htmlFor={value}>
                        {label}
                    </Label>
                    </div>
                )
            })}
 

</Container>
    );
}