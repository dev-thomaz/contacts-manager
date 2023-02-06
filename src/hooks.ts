import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ContactState } from "./features/contact/contact-slice";
import { RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useFilterContactsByGroup(group: ContactState[]){
  return group.sort((a: ContactState, b: ContactState) => a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))
}