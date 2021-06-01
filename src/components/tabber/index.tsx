import React, { FC, useState } from 'react'
import { View } from "@tarojs/components"
import { AtTabBar } from 'taro-ui'

import "./index.scss"

interface TabberPropsType {
}


interface TabberStateType {
    current: number
}

const Tabber: FC<TabberPropsType> = props => {

    const [state, setState] = useState<TabberStateType>({
        current: 0
    });
    const tabList = [
        { title: '主页', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png' },
        { title: '心声', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png' },
        { title: '', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png' },
        { title: '消息', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png' },
        { title: '我的', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png' }
    ]

    const handleClick = (i) => {
        setState(pre => { return { ...pre, current: i } })
    }
    return <View>
        <AtTabBar
            fixed
            tabList={tabList}
            current={state.current}
            onClick={handleClick} />
    </View>
}

export default Tabber

export {
    Tabber
}