import Svg, {G, Path} from 'react-native-svg';
import {memo} from 'react';
import {CircleLineCheckT} from './CircleLineCheck.tsx';

const MemoCircleLineCheck = memo(
  ({width = 20, height = 20, color = '#3A9238'}: CircleLineCheckT) => (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G id="system-checkbox-circle-line">
        <Path
          id="Vector"
          d="M9.99996 18.3335C5.39758 18.3335 1.66663 14.6025 1.66663 10.0002C1.66663 5.39782 5.39758 1.66685 9.99996 1.66685C14.6023 1.66685 18.3333 5.39782 18.3333 10.0002C18.3333 14.6025 14.6023 18.3335 9.99996 18.3335ZM9.99996 16.6669C13.6819 16.6669 16.6666 13.6821 16.6666 10.0002C16.6666 6.31829 13.6819 3.33352 9.99996 3.33352C6.31806 3.33352 3.33329 6.31829 3.33329 10.0002C3.33329 13.6821 6.31806 16.6669 9.99996 16.6669ZM9.16879 13.3335L5.63328 9.79803L6.8118 8.61944L9.16879 10.9765L13.8829 6.26246L15.0614 7.44097L9.16879 13.3335Z"
          fill={color}
        />
      </G>
    </Svg>
  ),
);

MemoCircleLineCheck.displayName = 'MemoCircleLineCheck';

export default MemoCircleLineCheck;
