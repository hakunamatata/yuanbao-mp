import { View, Text, Image } from '@tarojs/components'
import { Swiper, SwiperItem } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default () =>
  <View className='index' >
    <View className="swiper">
      <Swiper
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View>
            <Image src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2FBN%3DXAiikG9uSfnFWpdsqDPodynxnic91%3DxzfDHceIJ2Z21526892647045transferflag.png&thumbnail=650x2147483647&quality=80&type=jpg"
              style={{ width: '100%', height: 376 }} />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image src="https://pic4.zhimg.com/80/v2-7e787549873dfb8e349556a63b5c0b5c_1440w.jpg?source=1940ef5c"
              style={{ width: '100%', height: 376 }} />
          </View>
        </SwiperItem>
      </Swiper>
    </View>
  </View>
