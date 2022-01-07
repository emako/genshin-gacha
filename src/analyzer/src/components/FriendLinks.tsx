/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tooltip, TooltipProps } from 'antd';
import { FONT_FAMILY } from 'const';
import { useGlobalContext } from 'context/GlobalContext';
import { FC } from 'react';

interface FriendLinksProps {
  mode: 'left' | 'bottom';
  visible?: boolean;
}

export const FriendLinks: FC<FriendLinksProps> = ({ mode, visible }) => {
  const { isVertical } = useGlobalContext();
  if (visible === false) return <></>;
  if (mode === 'bottom') {
    if (!isVertical && visible !== true) return <></>;
    return (
      <div
        css={css`
          text-align: center;
          font-size: 14px;
          padding-bottom: 12px;
          font-family: ${FONT_FAMILY};
        `}
      >
      </div>
    );
  }
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 20px;
        left: 0px;
        padding: 0;
        & > ul {
          padding-left: 0px;
        }
      `}
    >
    </div>
  );
};
