import React, { FC, useState } from 'react'
import { View, Text } from "@tarojs/components"
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelBroadcastPropsType {
    message: string
}

interface PanelBroadcastStateType {

}

const PanelBroadcast: FC<PanelBroadcastPropsType> = props => {

    const { message } = props;
    const [state, setState] = useState<PanelBroadcastStateType>({

    });

    return <Panel transparent>
        <View>
            <View className='at-icon at-icon-volume-plus'></View>
            <Text>{message}</Text>
        </View>
    </Panel>
}

export default PanelBroadcast
export {
    PanelBroadcast
}