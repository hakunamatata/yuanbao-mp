import { View, Image } from '@tarojs/components'
import { Swiper, SwiperItem } from "@tarojs/components";
import Panel from '../../components/panel';
import Tabber from '../../components/tabber';
import PanelAds from './components/panelads';
import PanelBroadcast from './components/panelbroadcast';
import PanelWork from './components/panelwork';
import PanelSafety from './components/panelsafety';
import PanelWeather from './components/panelweather';
import './index.scss'

export default () =>
  <View className='index' >
    <View className="swiper">
      <Swiper
        circular
        indicatorDots
        autoplay
        style={{ height: '100%' }}>
        <SwiperItem>
          <View>
            <Image src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2FBN%3DXAiikG9uSfnFWpdsqDPodynxnic91%3DxzfDHceIJ2Z21526892647045transferflag.png&thumbnail=650x2147483647&quality=80&type=jpg"
            />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image src="https://pic4.zhimg.com/80/v2-7e787549873dfb8e349556a63b5c0b5c_1440w.jpg?source=1940ef5c"
            />
          </View>
        </SwiperItem>
      </Swiper>
    </View>
    <View>

      <PanelWork />
      <PanelBroadcast message="您已连续工作4小时56分58秒，请注意休息，避免过度疲劳" />
      <PanelAds />
      <PanelSafety />
      <PanelWeather />

    </View>
    <View>
      <Tabber></Tabber>
    </View>
  </View>
