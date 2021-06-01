import React, { FC, useState } from 'react'
import { View, Image, Text } from "@tarojs/components"
import { AtRate } from 'taro-ui'
import "./index.scss"
import Panel from '../../../../components/panel';

interface PanelWorkPropsType {
    value?: any
}

interface PanelWorkStateType {
    profile: {
        name: string
        avatar?: string
        tags?: { text: string, color?: string }[]
        // 公司名称
        orgname?: string
        // 部门名称
        depname?: string
        rate?: number
    },

    project: {
        name: string
        // 承包商
        contractor: string
        telephone: string
    },

    attendence: {
        onduty: {
            label: string
            checked?: boolean
        }

        offduty: {
            label: string
            checked?: boolean
        }
    }
}

const PanelWork: FC<PanelWorkPropsType> = props => {

    const { value } = props;
    const [state, setState] = useState<PanelWorkStateType>({
        profile: {
            name: "马波",
            avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fj2.s2.dpfile.com%2Fpc%2Fb944706bea889f77b674de1246e9a21c%28700x700%29%2Fthumb.jpg&refer=http%3A%2F%2Fj2.s2.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625160304&t=962b49a621983a3e4c317a4cdea62ef8",
            depname: '施工A组',
            orgname: '江苏筑美劳务公司',
            rate: 5,
            tags: [{ text: '钢筋工', color: '#EAAA39' }, { text: '长期', color: '#51A6F4' }]

        },
        project: {
            name: "垣宝集团水木清华项目",
            contractor: "上海建工集团有限公司",
            telephone: "025-83365577"
        },
        attendence: {
            onduty: {
                label: "上午08:23打卡",
                checked: true
            },
            offduty: {
                label: "上午未打卡",
            }
        }
    });

    const { profile: pProfile, project: pProject, attendence: pAttend } = state
    return <Panel title="我的工作" extra="更多" icon={true}>
        <View className='at-row'>
            <View className='at-col at-col-1 at-col--auto'>
                <Image src={pProfile.avatar}
                    className='avatar' />
            </View>
            <View className='at-col'
                style={{ padding: '0 12px' }}>
                <View className='at-row profile'>
                    <View className='at-col'>
                        <View className='at-row h2'>
                            {pProfile.name}
                            {pProfile.tags && pProfile.tags.length > 0
                                && pProfile.tags.map((value, i) => {
                                    if (i < 3) return <View className='tag' style={{ backgroundColor: value.color ? value.color : 'auto' }} >{value.text}</View>
                                    return <></>
                                })}
                        </View>
                        <View className='at-row'>{pProfile.orgname}/{pProfile.depname}</View>
                    </View>
                    <View className='at-col at-col-1 at-col--auto'>
                        <View
                            style={{ height: '100%', position: 'relative' }}>
                            <View
                                style={{ position: 'absolute', top: '50%', transform: 'translateX(-50%)' }}>
                                <AtRate size={10} value={pProfile.rate}></AtRate>
                            </View>

                        </View>
                    </View>
                </View>

                <View className='at-row profile'>
                    <View className='at-col'>
                        <View className='at-row h3'>{pProject.name}</View>
                        <View className='at-row'>承包商: {pProject.contractor}</View>
                    </View>
                    <View className='at-col at-col-1 at-col--auto' style={{ width: '100%' }}>
                        <View
                            style={{ textAlign: 'center' }}>
                            <View className='at-icon at-icon-phone'
                                style={{ fontSize: '1.2rem' }}></View>
                            <View style={{ fontSize: '.6rem', fontWeight: 'bold', color: '#282C34' }}>拨打电话</View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

        <View className='at-row at-row__justify--between attend'>
            <View className='at-col'>
                <View className='h3'>上工打卡</View>
                <View className='h4'>
                    <View className='at-icon at-icon-check-circle'
                        style={{ color: pAttend.onduty.checked ? '#51A6F4' : 'auto' }}></View>
                    {pAttend.onduty.label}</View>
            </View>
            <View className='at-col at-col-1 at-col--auto transparent'></View>
            <View className='at-col h3'>
                <View className='h3'>收工打卡</View>
                <View className='h4'>
                    <View className='at-icon at-icon-alert-circle'
                        style={{ color: pAttend.offduty.checked ? '#51A6F4' : 'auto' }}></View>
                    {pAttend.offduty.label}</View>
            </View>
        </View>
    </Panel>
}

export default PanelWork
export {
    PanelWork
}