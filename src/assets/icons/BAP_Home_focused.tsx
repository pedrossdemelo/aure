import React from 'react';

import Svg, {Path} from 'react-native-svg';

export default function BAP_Home_focused() {
  return (
    <Svg width={26} height={26} fill="none">
      <Path
        d="M24 20.077C24 22.24 22.206 24 19.973 24h-2.196a1.408 1.408 0 01-1.428-1.43v-3.483c0-.88-.732-1.577-1.647-1.577h-3.404c-.915 0-1.647.697-1.647 1.577v3.483c0 .77-.623 1.393-1.428 1.43H6.027C3.794 24 2 22.24 2 20.077V10.91c0-.843.403-1.65 1.098-2.163l7.614-5.977a3.691 3.691 0 012.27-.77c.805 0 1.61.257 2.27.77l7.613 5.94a2.694 2.694 0 011.098 2.163L24 20.077z"
        stroke="#321A12"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#321A12"
      />
    </Svg>
  );
}
