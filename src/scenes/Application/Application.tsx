import React from 'react';
import ApplicationSpecificComponent from './components/ApplicationSpecificComponent';

export interface ApplicationProps {

}

export const Application: React.FunctionComponent<ApplicationProps> = () => {
    return <React.Fragment><h1>Hello!</h1><ApplicationSpecificComponent/></React.Fragment>
}