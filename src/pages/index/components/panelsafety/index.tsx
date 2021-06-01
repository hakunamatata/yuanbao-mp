import React, { FC, useState } from 'react'
import { View } from "@tarojs/components"
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelSafetyPropsType {

}

interface PanelSafetyStateType {

}

const PanelSafety: FC<PanelSafetyPropsType> = props => {

    const { } = props;
    const [state, setState] = useState<PanelSafetyStateType>({

    });

    return <Panel title="我要安全" extra="我去做" icon={true}>
        <View>我去做</View>
    </Panel>
}

export default PanelSafety
export {
    PanelSafety
}