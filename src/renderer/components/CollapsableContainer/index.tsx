import React, { useCallback, useState } from 'react';
import {
  CollapsibleContainer,
  CollapsibleContainerHeader,
  CollapsibleContainerHeaderTitleContainer,
  CollapsibleContainerBody,
  CollapseTitleStyled,
  CollapseToggleButton,
} from './styles';

import chevronUp from '../../assets/chevron-up-icon-light.svg';

interface CollapsibleProps {
  title: string;
  header?: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  title,
  header,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <CollapsibleContainer>
      <CollapsibleContainerHeader>
        <CollapsibleContainerHeaderTitleContainer>
          {header || <CollapseTitleStyled>{title}</CollapseTitleStyled>}
        </CollapsibleContainerHeaderTitleContainer>

        <CollapseToggleButton
          onClick={handleToggleCollapse}
          isCollapsed={isCollapsed}
        >
          <img src={chevronUp} alt="chevron" />
        </CollapseToggleButton>
      </CollapsibleContainerHeader>

      <CollapsibleContainerBody isCollapsed={isCollapsed}>
        {children}
      </CollapsibleContainerBody>
    </CollapsibleContainer>
  );
};
