import React, { FC } from 'react'
import { View } from "@tarojs/components"
import { AtIcon } from 'taro-ui'
import "./index.scss"

interface PanelPropsType {
    labelColor?: string
    title?: React.ReactNode | string
    extra?: React.ReactNode | string
    icon?: string | boolean
    children?: React.ReactNode
}

const Panel: FC<PanelPropsType> = props => {

    const { labelColor, title, extra, icon, children } = props;
    return <View className="panel">
        {title
            ? <View className='at-row row-title'>
                <View className='at-col'>
                    {
                        labelColor
                            ? <View className='head' style={{ backgroundColor: labelColor }}></View>
                            : <View className='head'></View>
                    }
                    <View className='title'>{title}</View>
                </View>
                {
                    extra
                        ? <View className='extra at-col at-col-2 at-col-auto'>{extra}
                            {icon && icon === true && <View className={"at-icon at-icon-chevron-right"}></View>}
                            {icon && (typeof icon == 'string') && <View className={"at-icon at-icon-" + icon}></View>}
                        </View>
                        : <></>

                }
            </View>
            : <></>}
        <View className='at-row row-content'>
            <View className='at-col'>
                {children}
            </View>
        </View>
    </View>
}

export default Panel