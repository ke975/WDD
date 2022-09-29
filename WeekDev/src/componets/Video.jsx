import React from 'react'
import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube } from '@vime/react'
export function Video() {
  return (
    <div>
  <Player>
      <Youtube
videoId='RCvh0pmow_A'    

/>
      <DefaultUi/>
    </Player>

    </div>
  )
}
