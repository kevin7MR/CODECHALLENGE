import {useContext} from 'react';
import {AuthContex} from "../Contexts/AuthContext";

export const useAuth = () => useContext(AuthContex);

