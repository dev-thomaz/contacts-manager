import { Icon } from "./styles";

export type SvgProps = {
   fill?: string;
   width?: string;
   height?: string;
}

export function PlusIcon({fill = '#fff', width = '40px', height = '40px'}: SvgProps){

    
    return(
        <Icon 
        fill={fill} 
        height={height} 
        id="Layer_1"  
        version="1.1" 
        width={width} 
        xmlSpace="preserve" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
           <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"/>
            </Icon>
    )
}




