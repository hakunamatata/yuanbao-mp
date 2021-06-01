import React, { FC, useState } from 'react'
import { View } from "@tarojs/components"
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelWeatherPropsType {

}

interface PanelWeatherStateType {

}

const PanelWeather: FC<PanelWeatherPropsType> = props => {

    const { } = props;
    const [state, setState] = useState<PanelWeatherStateType>({

    });

    return <Panel title="我的环境" extra="更多" icon={true}>
        <View>天气预报</View>
    </Panel>
}

export default PanelWeather
export {
    PanelWeather
}