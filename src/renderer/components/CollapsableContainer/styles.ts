import styled, { css } from 'styled-components';

interface CollapsibleProps {
  isCollapsed: boolean;
}

export const CollapsibleContainer = styled.div``;

export const CollapsibleContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CollapsibleContainerHeaderTitleContainer = styled.div`
  flex: 1;
`;

export const CollapsibleContainerBody = styled.div<CollapsibleProps>`
  margin-top: 10px;
  overflow: hidden;

  ${props =>
    props.isCollapsed &&
    css`
      height: 0px;
      margin: 0px;
    `}
`;

export const CollapseTitleStyled = styled.p``;

export const CollapseToggleButton = styled.button<CollapsibleProps>`
  border: 0;
  background: none;
  outline: none;

  ${props =>
    props.isCollapsed &&
    css`
      transform: rotate(-180deg);
    `}
`;
