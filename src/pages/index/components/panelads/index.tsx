import React, { FC, useState } from 'react'
import { View } from "@tarojs/components"
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelAdsPropsType {

}

interface PanelAdsStateType {

}

const PanelAds: FC<PanelAdsPropsType> = props => {

    const { } = props;
    const [state, setState] = useState<PanelAdsStateType>({

    });

    return <Panel>
        <View>广告</View>
    </Panel>
}

export default PanelAds
export {
    PanelAds
}