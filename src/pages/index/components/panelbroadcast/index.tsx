import React, { FC, useState } from 'react'
import { View } from "@tarojs/components"
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelBroadcastPropsType {

}

interface PanelBroadcastStateType {

}

const PanelBroadcast: FC<PanelBroadcastPropsType> = props => {

    const { } = props;
    const [state, setState] = useState<PanelBroadcastStateType>({

    });

    return <Panel>
        <View>提醒小喇叭</View>
    </Panel>
}

export default PanelBroadcast
export {
    PanelBroadcast
}